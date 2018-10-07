<template lang="html">
    <div class="my-8 p-8 shadow-md rounded inline-block w-full lg:w-1/2 bg-white overflow-hidden relative">
        <div class="flex flex-col justify-center items-center h-full w-full">
            <transition name="fade" mode="out-in">
                <celebration v-if="form.submitted">
                    <h1 class="text-3xl -mt-4 text-center"
                        role="presentation"
                        aria-hidden="true">
                        🎉
                    </h1>
                    <p class="text-xl font-bold">Thanks for subscribing!</p>
                    <confetti recycle="false" width="100%" height="400" />
                </celebration>

                <div v-else key="2">
                    <p class="mb-2 md:mb-4">
                        Subscribe to my newsletter for links to interesting content, and for more thoughts that don't make it to my blog:
                    </p>

                    <span v-if="!form.errors.any()" class="block mb-2 text-xs">&nbsp;</span>
                    <span v-if="form.errors.any()"
                        v-for="error in form.errors"
                        v-html="error"
                        class="text-red text-xs block mb-2 errors">
                    </span>

                    <form @submit.prevent="onSubmit"
                        @keydown="form.errors.clear()"
                        id="mc-embedded-subscribe-form"
                        class="flex"
                        name="mc-embedded-subscribe-form"
                        action="https://dstrunk.us5.list-manage.com/subscribe/post?u=a7c123810b9ee1f1c439e951d&amp;id=1fdf7a9fbc"
                        method="post"
                        target="_blank" novalidate>

                        <label for="mce-EMAIL" class="a11y">Email</label>
                        <input v-model="form.email"
                            v-bind:class="{ 'border-red': form.errors.any() }"
                            type="text"
                            name="EMAIL"
                            id="mce-EMAIL"
                            placeholder="Your Email..."
                            class="p-2 rounded-l-sm flex-1 border-t border-l border-b border-grey-light" 
                            tabindex="0"
                            required />

                        <div style="position: absolute; left: -5000px;" aria-hidden="true">
                            <input v-model="form.bot" type="text" name="b_a7c123810b9ee1f1c439e951d_1fdf7a9fbc" tabindex="-1" value="">
                        </div>

                        <input :disabled="form.errors.any()"
                            @click="form.submitted = true; handleSubmission()"
                            type="submit"
                            name="subscribe"
                            id="mc-embedded-subscribe"
                            value="Sign me up"
                            tabindex="0"
                            class="px-4 py-2 cursor-pointer rounded-r-sm bg-indigo text-white tracking-wide font-bold uppercase text-sm" />
                    </form>
                </div>
            </transition>
        </div>
    </div>
</template>

<script>
import Form from './Form.js';
import Celebration from './Celebration.vue';
import Confetti from './Confetti.vue';

export default {
  data() {
    return {
      form: new Form({
        email: null,
        bot: null,
      }),
      loading: false,
    };
  },

  methods: {
    onSubmit() {
      let endpoint =
        'https://dstrunk.us5.list-manage.com/subscribe/post-json?u=a7c123810b9ee1f1c439e951d&amp;id=1fdf7a9fbc';
      let params =
        '&EMAIL=' +
        this.form.email +
        '&b_a7c123810b9ee1f1c439e951d_1fdf7a9fbc=' +
        this.form.bot;
      let mailchimpUrl = endpoint + params;
      let opts = {
        param: 'c',
        name: 'vuechimp',
      };

      jsonp(mailchimpUrl, opts, (err, data) => {
        if (err) {
          this.form.errors.record(err.message);
        }

        if (data.result === 'error') {
          this.form.errors.record(data.msg);
        } else {
          this.onSuccess(data.msg);
          form.reset();
        }

        this.$forceUpdate();
      });
    },

    handleSubmission() {},

    onSuccess(response) {
      this.form.submitted = true;
    },
  },

  components: {
    Celebration,
    Confetti,
  },
};
</script>

<style lang="less">
.errors > a {
  &:hover {
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.25s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
