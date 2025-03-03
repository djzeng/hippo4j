/*
 * Licensed to the Apache Software Foundation (ASF) under one or more
 * contributor license agreements.  See the NOTICE file distributed with
 * this work for additional information regarding copyright ownership.
 * The ASF licenses this file to You under the Apache License, Version 2.0
 * (the "License"); you may not use this file except in compliance with
 * the License.  You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

package cn.hippo4j.springboot.starter.core;

import cn.hippo4j.adapter.base.ThreadPoolAdapter;
import cn.hippo4j.adapter.base.ThreadPoolAdapterCacheConfig;
import cn.hippo4j.adapter.base.ThreadPoolAdapterExtra;
import cn.hippo4j.adapter.base.ThreadPoolAdapterState;
import cn.hippo4j.common.config.ApplicationContextHolder;
import cn.hippo4j.common.toolkit.CollectionUtil;
import cn.hippo4j.common.web.base.Result;
import cn.hippo4j.core.toolkit.IdentifyUtil;
import cn.hippo4j.core.toolkit.inet.InetUtils;
import cn.hippo4j.springboot.starter.config.BootstrapProperties;
import cn.hippo4j.springboot.starter.remote.HttpAgent;
import cn.hippo4j.springboot.starter.toolkit.CloudCommonIdUtil;
import com.google.common.collect.Lists;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.core.env.ConfigurableEnvironment;

import java.util.List;
import java.util.Map;

import static cn.hippo4j.common.constant.Constants.IDENTIFY_SLICER_SYMBOL;
import static cn.hippo4j.common.constant.Constants.REGISTER_ADAPTER_PATH;

/**
 * Thread-pool adapter register.
 */
@Slf4j
@AllArgsConstructor
public class ThreadPoolAdapterRegister implements ApplicationRunner {

    private final HttpAgent httpAgent;

    private final BootstrapProperties properties;

    private final ConfigurableEnvironment environment;

    private final InetUtils hippo4JInetUtils;

    private final ThreadPoolAdapterExtra threadPoolAdapterExtra;

    @Override
    public void run(ApplicationArguments args) throws Exception {
        Map<String, ThreadPoolAdapter> threadPoolAdapterMap = ApplicationContextHolder.getBeansOfType(ThreadPoolAdapter.class);
        register(threadPoolAdapterMap);
        threadPoolAdapterExtra.extraStart(map -> register(map));
    }

    public void register(Map<String, ThreadPoolAdapter> threadPoolAdapterMap) {

        List<ThreadPoolAdapterCacheConfig> cacheConfigList = Lists.newArrayList();
        threadPoolAdapterMap.forEach((key, val) -> {
            List<ThreadPoolAdapterState> threadPoolStates = val.getThreadPoolStates();
            if (CollectionUtil.isEmpty(threadPoolStates)) {
                return;
            }
            ThreadPoolAdapterCacheConfig cacheConfig = new ThreadPoolAdapterCacheConfig();
            cacheConfig.setMark(val.mark());
            String tenantItemKey = properties.getNamespace() + IDENTIFY_SLICER_SYMBOL + properties.getItemId();
            cacheConfig.setTenantItemKey(tenantItemKey);
            cacheConfig.setClientIdentify(IdentifyUtil.getIdentify());
            String clientAddress = CloudCommonIdUtil.getClientIpPort(environment, hippo4JInetUtils);
            cacheConfig.setClientAddress(clientAddress);
            cacheConfig.setThreadPoolAdapterStates(threadPoolStates);
            cacheConfigList.add(cacheConfig);
        });
        if (CollectionUtil.isNotEmpty(cacheConfigList)) {
            try {
                Result result = httpAgent.httpPost(REGISTER_ADAPTER_PATH, cacheConfigList);
                if (!result.isSuccess()) {
                    log.warn("Failed to register third-party thread pool data.");
                }
            } catch (Throwable ex) {
                log.error("Failed to register third-party thread pool data.", ex);
            }
        }
    }
}
