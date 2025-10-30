<script setup lang="ts">
import { teamMembers } from '@/data/team'
</script>

<template>
  <section>
    <div>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/ALXrb68nyQU?si=OZXpYiQlpL_DGRNH"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
    </div>
    <div>
      <div>Yours forms. On-time. Hassle-free</div>
      <p>
        UB FormFlow is an interactive online interface that reimagines the form process for students
        at the University of Belize. No more uncertainty about where your form is. Submit and track
        your forms online with the ultimate ease and convenience.
      </p>
    </div>
  </section>
  <section>
    <h2>Meet the CodeCraft Solutions Team</h2>
    <div>
      <div v-for="member in teamMembers" :key="member.id" class="team-member">
        <img :src="member.photoUrl" :alt="member.name" />
        <h3>{{ member.name }}</h3>
        <div>{{ member.role }}</div>
        <p>{{ member.tagLine }}</p>
      </div>
    </div>
  </section>
</template>

<style scoped src="@/styles/test.css"></style>
