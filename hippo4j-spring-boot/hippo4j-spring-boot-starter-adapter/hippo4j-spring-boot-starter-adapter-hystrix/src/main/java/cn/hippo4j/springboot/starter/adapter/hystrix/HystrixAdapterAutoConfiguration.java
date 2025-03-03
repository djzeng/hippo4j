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

package cn.hippo4j.springboot.starter.adapter.hystrix;

import cn.hippo4j.adapter.base.ThreadPoolAdapterExtra;
import cn.hippo4j.adapter.base.ThreadPoolAdapterExtraAutoConfiguration;
import cn.hippo4j.adapter.hystrix.HystrixThreadPoolAdapter;
import cn.hippo4j.common.config.ApplicationContextHolder;
import org.springframework.boot.autoconfigure.AutoConfigureAfter;
import org.springframework.boot.autoconfigure.condition.ConditionalOnMissingBean;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

/**
 * @program: hippo4j
 * @description:
 * @author: lk
 * @create: 2022-07-15
 **/
@Configuration(proxyBeanMethods = false)
@AutoConfigureAfter(ThreadPoolAdapterExtraAutoConfiguration.class)
public class HystrixAdapterAutoConfiguration {

    @Bean
    @ConditionalOnMissingBean
    public ApplicationContextHolder simpleApplicationContextHolder() {
        return new ApplicationContextHolder();
    }

    @Bean
    public HystrixThreadPoolAdapter hystrixThreadPoolAdapter(ThreadPoolAdapterExtra threadPoolAdapterExtra) {
        return new HystrixThreadPoolAdapter(threadPoolAdapterExtra);
    }
}
