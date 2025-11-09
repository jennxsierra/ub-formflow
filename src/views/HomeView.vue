<script setup lang="ts">
import { teamMembers } from '@/data/team'
import { RouterLink } from 'vue-router'
</script>

<template>
  <div class="container">
    <!-- Hero: Project Portfolio Overview -->
    <section class="hero">
      <div>
        <h1>UB FormFlow Portfolio</h1>
        <h2>A User-Centered Design Approach - From Concept to Reality</h2>
        <p>
          Explore the complete design and development process behind UB FormFlow, an innovative
          solution transforming how University of Belize students manage administrative forms.
          Discover the research, prototypes, and team that brought this project to life.
        </p>
        <div class="cta">
          <a href="#team" class="btn">Meet the Team</a>
          <RouterLink to="/design-and-development" class="btn alt btn-spacing"
            >Explore Phases</RouterLink
          >
        </div>
      </div>
      <div class="hero-image">
        <img src="/images/hero-graphic.png" alt="UB FormFlow Logo with CodeCraft Solutions Branding" />
      </div>
    </section>

    <!-- Open Day Notice: Medium-Fi Prototype Showcase -->
    <section id="open-day" class="section-spacing notice-section">
      <div class="section-grid">
        <div>
          <span class="notice-badge">Open Day Showcase</span>
          <h2 class="section-header">Try our Medium-Fidelity Prototype</h2>
          <p class="section-text">
            We're excited to share a special preview for Open Day. Explore the interactive
            prototype, browse our poster and pitch slide, and read a quick overview of the
            project.
          </p>
          <div class="notice-links">
            <a href="/" class="link-chip">Launch Prototype</a>
            <a href="/" class="link-chip">Poster</a>
            <a href="/" class="link-chip">Pitch Slide</a>
            <a href="/" class="link-chip">README</a>
          </div>
        </div>
      </div>
    </section>

    <!-- Section 1: UB FormFlow Introduction -->
    <section id="formflow" class="section-spacing">
      <div class="section-grid">
        <div>
          <h2 class="section-header">What is UB FormFlow?</h2>
          <h3 class="section-subheader">
            Streamlined Form Management for University of Belize Students
          </h3>
          <p class="section-text">
            UB FormFlow is an interactive online interface that reimagines the form process for
            students at the University of Belize. Submit, track, and receive updates on your
            administrative forms with confidence and clarity.
          </p>
          <div class="video-container">
            <div class="video-embed">
              <iframe
                src="https://www.youtube.com/embed/ALXrb68nyQU?si=OZXpYiQlpL_DGRNH"
                title="UB FormFlow Overview"
                allowfullscreen
              ></iframe>
            </div>
          </div>
          <h3 class="section-subheader">What makes UB FormFlow special?</h3>
          <p class="section-text">
            Imagine being able to see exactly where your form is in the approval process—no more
            wondering if it's been lost in the shuffle. You'll get notifications when it's your turn
            to take action, sign documents digitally without printing a thing, and watch as your
            form automatically routes to the right departments. Whether you're on your phone between
            classes or on your laptop at home, everything you need is right there in one clean
            dashboard.
          </p>
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
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
