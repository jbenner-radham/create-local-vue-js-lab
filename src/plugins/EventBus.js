'use strict';

import Vue from 'vue';

export default {
    install(_Vue) {
        _Vue.prototype.$eventBus = new Vue();
    }
};
