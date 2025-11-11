<script setup lang="ts">
import { teamMembers } from '@/data/team'
import { RouterLink } from 'vue-router'
</script>

<template>
  <div class="container">
    <!-- Section 1: Hero -->
    <section class="hero">
      <!-- Left: Video -->
      <div class="hero-media">
        <div class="video-embed">
          <iframe
            src="https://www.youtube.com/embed/ALXrb68nyQU?si=OZXpYiQlpL_DGRNH"
            title="UB FormFlow Overview"
            allowfullscreen
          ></iframe>
        </div>
      </div>

      <!-- Right: Overview + Notice -->
      <div>
        <h1>UB FormFlow</h1>
        <h2>Form Management: Reimagined</h2>
        <p>
          UB FormFlow is an interactive online interface that reimagines the form process for
          students at the University of Belize. Submit, track, and receive updates on your
          administrative forms with confidence and clarity.
        </p>
        <div class="hero-notice">
          <h3 class="section-subheader">Try our Medium-Fidelity Prototype!</h3>
          <p>
            We're excited to showcase our medium-fidelity prototype at the upcoming FST STEM Fair.
            Join us to experience the future of form management at the University of Belize.
          </p>
          <div class="notice-links">
            <a
              href="https://ub-formflow-medium-fi.figma.site/"
              class="link-chip"
              target="_blank"
              rel="noopener noreferrer"
              >Prototype</a
            >
            <a
              href="documents/display/CMPS3141-SPP8-25S1-POSTER.png"
              class="link-chip"
              target="_blank"
              rel="noopener noreferrer"
              >Poster</a
            >
            <a
              href="documents/display/CMPS3141-SPP8-25S1-SLIDE.png"
              class="link-chip"
              target="_blank"
              rel="noopener noreferrer"
              >Pitch Slide</a
            >
            <a
              href="documents/readmes/CMPS3141-SPP6-25S1-README.pdf"
              class="link-chip"
              target="_blank"
              rel="noopener noreferrer"
              >README</a
            >
          </div>
        </div>
      </div>
    </section>

    <!-- Section 2: Development Process Overview -->
    <section id="development" class="section-spacing">
      <div class="section-grid">
        <div>
          <h2 class="section-header">The Development Journey</h2>
          <h3 class="section-subheader">From User Insights to Refined Prototypes</h3>
          <p class="section-text">
            UB FormFlow was crafted through a rigorous human-centered design process, spanning
            multiple phases of needfinding, prototyping, and usability testing. From initial user
            interviews to high-fidelity interactive prototypes, each phase brought us closer to a
            solution that truly serves the University of Belize community.
          </p>
          <div class="image-container">
            <div class="image-embed">
              <img
                src="/images/development/ub-formflow-development-collage.png"
                alt="Collage showing UB FormFlow's development process: research, wireframes, and prototypes"
              />
            </div>
          </div>
          <h3 class="section-subheader">Explore Each Phase in Detail</h3>
          <p class="section-text">
            Dive deeper into each stage of the UB FormFlow project by exploring our comprehensive
            reports and presentations. Learn about the challenges we faced, the solutions we
            devised, and the insights we gained along the way. We invite you to explore the detailed
            documentation of each phase to see how UB FormFlow evolved from concept to reality.
          </p>
          <div>
            <RouterLink to="/design-and-development" class="btn alt">Explore Phases</RouterLink>
          </div>
        </div>
      </div>
    </section>

    <!-- Section 3: Team -->
    <section id="team" class="section-spacing">
      <div class="section-grid">
        <div>
          <h2 class="section-header">Meet the CodeCraft Solutions Team</h2>
          <div class="team-grid">
            <div v-for="member in teamMembers" :key="member.id" class="team-member">
              <img :src="member.photoUrl" :alt="member.name" />
              <h3>{{ member.name }}</h3>
              <div class="role">{{ member.role }}</div>
              <p class="muted">{{ member.tagLine }}</p>
              <div class="social-links">
                <a
                  :href="member.github"
                  class="social-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  :aria-label="`GitHub profile for ${member.name}`"
                >
                  <img
                    src="/images/team/github-mark.svg"
                    alt="GitHub"
                    class="icon icon-github"
                    loading="lazy"
                    decoding="async"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
