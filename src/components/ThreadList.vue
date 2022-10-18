<script setup>
import data from "@/data.json";
const posts = data.posts;
const users = data.users;

const props = defineProps({
    threads:{
        type: Array,
        required: true
    }
})

function postById(postId) {
  return posts.find((p) => p.id === postId);
}

function userById(userId) {
  return users.find((u) => {
    return u.id === userId;
  });
}
</script>

<template>
  <div class="thread-list">
    <h2 class="list-title">Threads</h2>

    <div v-for="thread in props.threads" :key="thread.id" class="thread">
      <div>
        <p>
          <router-link
            :to="{ name: 'ThreadShow', params: { id: thread.id } }"
            >{{ thread.title }}</router-link
          >
        </p>
        <p class="text-faded text-xsmall">
          By <a href="#"> {{ userById(thread.userId).name }} </a>,
          {{ thread.publishedAt }}.
        </p>
      </div>

      <div class="activity">
        <p class="replies-count">
          {{ thread.posts.length }} replies
        </p>

        <img
          class="avatar-medium"
          :src="userById(thread.userId).avatar"
          alt=""
        />

        <div>
          <p class="text-xsmall">
            <a href="#">{{ userById(thread.userId).name }}</a>
          </p>
          <p class="text-xsmall text-faded">{{ thread.publishedAt }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style>

</style>
