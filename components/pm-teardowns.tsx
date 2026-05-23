"use client"

import React, { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader } from '@/components/ui/card'

interface Post {
  title: string
  date: string
  category: string
  brand?: string
  url: string
  reactions: number
  comments: number
  hook?: string
  isTopPost?: boolean
}

const posts: Post[] = [
  // TRUECALLER TEARDOWN SERIES
  {
    title: "Part 1: Crowdsourced Identity: The Invisible Data Moat",
    date: "2026-05-20",
    category: "PM Teardown",
    brand: "Truecaller",
    url: "https://www.linkedin.com/posts/harsh-sharma-406044299_nobody-uses-it-heres-how-id-fix-it-in-ugcPost-7462134297987112960-BTyx?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEgWMUYBWkAMYPJiYpYOoUm1z68nl2r5MUI",
    reactions: 184,
    comments: 32,
    hook: "How Truecaller built an un-replicable 16-year time barrier via crowdsourced phone books (500M MAU, 350M in India, 41% EBITDA margins). PM Insight: 'You cannot replicate a time barrier with capital.'",
    isTopPost: true
  },
  {
    title: "Part 2: The Dependency Trap: When an Algorithm Cost 30% Revenue",
    date: "2026-05-20",
    category: "PM Teardown",
    brand: "Truecaller",
    url: "https://www.linkedin.com/posts/harsh-sharma-406044299_can-truecaller-survive-when-its-core-feature-becomes-free-ugcPost-7462024845887766528-hIdU?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEgWMUYBWkAMYPJiYpYOoUm1z68nl2r5MUI",
    reactions: 142,
    comments: 24,
    hook: "Analyzing the August 2025 Google ad algorithm shift that dropped Truecaller's ad traffic by one-third instantly. Core structural flaw: 'Building an unbeatable moat against competitors, but zero protection against infrastructure dependencies.'",
    isTopPost: true
  },
  {
    title: "Part 3: Ecosystem Absorption: Surviving the Default OS Feature Threat",
    date: "2026-05-20",
    category: "PM Teardown",
    brand: "Truecaller",
    url: "https://www.linkedin.com/posts/harsh-sharma-406044299_can-truecaller-survive-when-its-core-feature-becomes-free-ugcPost-7462024845887766528-hIdU?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEgWMUYBWkAMYPJiYpYOoUm1z68nl2r5MUI",
    reactions: 165,
    comments: 29,
    hook: "How Truecaller pivots as its core utility becomes free and native in 2026 via India's CNAP, Apple iOS native caller ID, and Google Android spam detection. Their shift from 'Utility App' to 'Trust Infrastructure' (AI call screening, Family Protection, B2B verified identity).",
    isTopPost: true
  },
  // IRCTC TEARDOWN
  {
    title: "IRCTC: India's most profitable broken product.",
    date: "2026-05-14",
    category: "PM Teardown",
    brand: "IRCTC",
    url: "https://www.linkedin.com/posts/harsh-sharma-406044299_irctc-indias-most-profitable-broken-product-ugcPost-7460555099682045952-_RzR?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEgWMUYBWkAMYPJiYpYOoUm1z68nl2r5MUI",
    reactions: 250,
    comments: 48,
    hook: "IRCTC books 14.33 lakh tickets every single day. Processes $4 billion in transactions annually. Has 10 crore registered users. It also crashes every Tatkal morning. Has a CAPTCHA nobody can solve. And responds to complaints by saying 'please clear your cache.'",
    isTopPost: true
  },
  {
    title: "Broken by Design: The Tatkal Problem and SwaRail",
    date: "2026-05-14",
    category: "PM Teardown",
    brand: "IRCTC",
    url: "https://www.linkedin.com/posts/harsh-sharma-406044299_broken-by-design-the-tatkal-problem-and-swarail-ugcPost-7460559736195751937-6ZrG?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEgWMUYBWkAMYPJiYpYOoUm1z68nl2r5MUI",
    reactions: 0,
    comments: 0,
    hook: "Tatkal opens at 10:00 AM. April 17, 2026: 9:48 AM Downdetector complaints start. 10:01 AM servers showing 'currently unreachable.' 10:09 AM all tickets showing REGRET. SwaRail didn't touch the server infrastructure. UI improvements on top of infrastructure problems are not product improvements."
  },
  {
    title: "What if IRCTC woke up tomorrow and found a competitor?",
    date: "2026-05-14",
    category: "PM Teardown",
    brand: "IRCTC",
    url: "https://www.linkedin.com/posts/harsh-sharma-406044299_what-if-irctc-woke-up-tomorrow-and-found-a-competitor-ugcPost-7460560691712942080-CSjU?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEgWMUYBWkAMYPJiYpYOoUm1z68nl2r5MUI",
    reactions: 0,
    comments: 0,
    hook: "India built UPI — 18 billion transactions/month, 99.9% uptime. Built Aadhaar — 1.4 billion biometric records. Built CoWIN — 2 billion vaccine doses tracked. So why does IRCTC still crash every Tatkal morning? Because a monopoly has no reason to fix itself. 5 fixes a PM would ship if IRCTC had to compete tomorrow."
  },
  // SPOTIFY — DANIEL EK TEARDOWN
  {
    title: "20 years ago a 23-year-old who ran a piracy company built the world's most used music product.",
    date: "2026-05-15",
    category: "PM Teardown",
    brand: "Spotify",
    url: "https://www.linkedin.com/posts/harsh-sharma-406044299_a-23-year-old-who-used-to-run-a-piracy-company-built-the-w-ugcPost-7460940664751665152-oQXU?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEgWMUYBWkAMYPJiYpYOoUm1z68nl2r5MUI",
    reactions: 0,
    comments: 0,
    hook: "Daniel Ek didn't fight piracy. He out-built it. 70% of every rupee Spotify earns goes to music labels. Forever. It took 2 years of negotiation before a single song could legally play. Labels received 18% equity just for licensing. Went public at $29B — still unprofitable. Lost €532M in 2023. Laid off 1,500 people in one day. Yet users never left. 2024: €15.6B revenue. €1.14B first ever annual profit. 675M MAUs. That's not a business story — that's a product story.",
    isTopPost: true
  },
  // SPOTIFY VS YOUTUBE TEARDOWN
  {
    title: "Some creators are making 2–3x more money on Spotify than YouTube.",
    date: "2026-05-11",
    category: "PM Teardown",
    brand: "Spotify Vs YouTube?",
    url: "https://www.linkedin.com/posts/harsh-sharma-406044299_creatoreconomy-spotify-productmanagement-share-7459218979383828480-GkTT?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEgWMUYBWkAMYPJiYpYOoUm1z68nl2r5MUI",
    reactions: 34,
    comments: 6,
    hook: "Spotify pays based on Premium subscriber watch time not ad impressions. So instead of chasing millions of free-tier eyeballs, you get paid by a smaller, higher-intent audience.",
    isTopPost: true
  },
  {
    title: "Wait, is Spotify actually coming for YouTube? The answer surprised me.",
    date: "2026-05-11",
    category: "PM Teardown",
    brand: "Spotify Vs YouTube?",
    url: "https://www.linkedin.com/posts/harsh-sharma-406044299_productmanagement-spotify-productstrategy-share-7459218167387746304-vuXF?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEgWMUYBWkAMYPJiYpYOoUm1z68nl2r5MUI",
    reactions: 28,
    comments: 4,
    hook: "Spotify now has 500,000+ video shows. 390 million users have already watched video on the app. But here's the part everyone gets wrong: This is NOT a YouTube attack."
  },
  {
    title: "Part 3: Nobody Uses It. Here's How I'd Fix It in 1 Feature.",
    date: "2026-05-20",
    category: "PM Teardown",
    brand: "Spotify Vs YouTube?",
    url: "https://www.linkedin.com/posts/harsh-sharma-406044299_nobody-uses-it-heres-how-id-fix-it-in-ugcPost-7462134297987112960-BTyx?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEgWMUYBWkAMYPJiYpYOoUm1z68nl2r5MUI",
    reactions: 42,
    comments: 8,
    hook: "Analyzing why the vast majority of Spotify's premium users ignore the podcast tab, framing it as a UX layout/habit friction issue, and proposing a single strategic product feature to bridge the audio-to-video consumption gap.",
    isTopPost: true
  },
  // GENERAL INSIGHTS
  {
    title: "Most platforms solved “saving content.” Very few solved: “finding it again.”",
    date: "2026-05-09",
    category: "Product Insight",
    brand: "General Insights",
    url: "https://www.linkedin.com/posts/harsh-sharma-406044299_productmanagement-ai-creatoreconomy-share-7458583157953421312-Y-6K?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEgWMUYBWkAMYPJiYpYOoUm1z68nl2r5MUI",
    reactions: 156,
    comments: 32,
    hook: "Instagram Saves works like a warehouse. Creators actually need a second brain. Sometimes users don’t need “more organization.” They need better memory retrieval.",
    isTopPost: true
  },
  // PUBG / BGMI TEARDOWN (LATEST)
  {
    title: "BGMI Survived Two Bans. Can It Survive Itself?",
    date: "2026-05-09",
    category: "PM Teardown",
    brand: "PUBG / BGMI",
    url: "https://www.linkedin.com/posts/harsh-sharma-406044299_bgmi-survived-two-bans-can-it-survive-itself-ugcPost-7458401446275874816-BSCX?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEgWMUYBWkAMYPJiYpYOoUm1z68nl2r5MUI",
    reactions: 142,
    comments: 28,
    hook: "BGMI survived two government bans. 100 million users came back twice. 930 million esports views in 2025. But in 2025 players started leaving. Krafton forgot why they came back.",
    isTopPost: true
  },
  // ZOMATO / QUICK COMMERCE TEARDOWN
  {
    title: "Zepto was founded in 2021 by two 19-year-old Stanford dropouts.",
    date: "2026-04-12",
    category: "PM Teardown",
    brand: "Zomato / Zepto",
    url: "https://www.linkedin.com/feed/update/urn:li:ugcPost:7450480765062635521",
    reactions: 89,
    comments: 21,
    hook: "Two 19-year-old Stanford dropouts. $1.4 billion in losses. A delivery promise nobody believed. And then — the fastest scaling startup India had ever seen. This is the quick commerce teardown.",
    isTopPost: true
  },
  {
    title: "Everyone talks about \"10-minute delivery\" — nobody talks about what makes it possible.",
    date: "2026-04-12",
    category: "PM Teardown",
    brand: "Zomato / Zepto",
    url: "https://www.linkedin.com/feed/update/urn:li:ugcPost:7450481000000000000",
    reactions: 8,
    comments: 0
  },
  {
    title: "Blinkit and Zepto spent 4 years and $1.4 billion in losses building infrastructure India didn't know it needed.",
    date: "2026-04-12",
    category: "PM Teardown",
    brand: "Blinkit / Zomato",
    url: "https://www.linkedin.com/feed/update/urn:li:ugcPost:7450123000000000000",
    reactions: 7,
    comments: 0
  },
  // ZOMATO CASE STUDY
  {
    title: "Part 1 — The Zomato teardown that started it all.",
    date: "2026-04-13",
    category: "PM Teardown",
    brand: "Zomato",
    url: "https://www.linkedin.com/feed/update/urn:li:ugcPost:7450856000000000000",
    reactions: 32,
    comments: 0,
    isTopPost: true
  },
  {
    title: "Zomato Case Study - Part 2",
    date: "2026-04-13",
    category: "PM Teardown",
    brand: "Zomato",
    url: "https://www.linkedin.com/feed/update/urn:li:ugcPost:7450857000000000000",
    reactions: 8,
    comments: 0
  },
  {
    title: "Zomato Case Study - Part 3",
    date: "2026-04-13",
    category: "PM Teardown",
    brand: "Zomato",
    url: "https://www.linkedin.com/feed/update/urn:li:ugcPost:7450858000000000000",
    reactions: 19,
    comments: 0,
    isTopPost: true
  },
  {
    title: "I just did my first proper PM case study — here's what I learned.",
    date: "2026-04-15",
    category: "Learning",
    url: "https://www.linkedin.com/feed/update/urn:li:ugcPost:7451586000000000000",
    reactions: 10,
    comments: 8
  },
  // UPI / PAYMENTS TEARDOWN
  {
    title: "India processes 20+ billion UPI transactions every single month. But one company owns the infrastructure quietly.",
    date: "2026-04-22",
    category: "PM Teardown",
    brand: "UPI / NPCI",
    url: "https://www.linkedin.com/feed/update/urn:li:ugcPost:7454432000000000000",
    reactions: 8,
    comments: 0
  },
  {
    title: "Here's the paradox of UPI — India's biggest payment network earns zero per transaction.",
    date: "2026-04-22",
    category: "PM Teardown",
    brand: "UPI / Google Pay",
    url: "https://www.linkedin.com/feed/update/urn:li:ugcPost:7454433000000000000",
    reactions: 10,
    comments: 0
  },
  {
    title: "Every UPI app looks the same. The real war is 3 layers deeper — credit, data, and ecosystem lock-in.",
    date: "2026-04-22",
    category: "PM Teardown",
    brand: "UPI / PhonePe",
    url: "https://www.linkedin.com/feed/update/urn:li:ugcPost:7454434000000000000",
    reactions: 14,
    comments: 0
  },
  // NETFLIX TEARDOWN
  {
    title: "[Deep Dive] Netflix LLM Platform: The Operational Reality of AI at Scale",
    date: "2026-05-23",
    category: "PM Teardown",
    brand: "Netflix",
    url: "https://www.linkedin.com/posts/harsh-sharma-406044299_productmanagement-ai-machinelearning-activity-7463198131845742594-dyW_?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEgWMUYBWkAMYPJiYpYOoUm1z68nl2r5MUI",
    reactions: 168,
    comments: 32,
    hook: "\"Experimentation should be constrained by imagination, not operational complexity.\" Shifting the AI product narrative from building smarter models to engineering distributed infrastructure, handling tokenizer silent failures, and maximizing pipeline throughput.\n\nKey Takeaways: Tokenization alignment, system behavior testing over binary bug-tracking, 4.7x sequence packing throughput gains.",
    isTopPost: true
  },
  {
    title: "[Deep Dive] Netflix Switchboard: Deconstructing Monolithic ML Abstractions",
    date: "2026-05-23",
    category: "PM Teardown",
    brand: "Netflix",
    url: "https://www.linkedin.com/posts/harsh-sharma-406044299_productmanagement-netflix-activity-7463491409178931200-_YJ4?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEgWMUYBWkAMYPJiYpYOoUm1z68nl2r5MUI",
    reactions: 142,
    comments: 24,
    hook: "Scaling an ML platform from V1 to V2 requires shifting from a unified, high-risk middleware execution model (Switchboard rules) to decoupled failure isolation (Lightbulb + Envoy) without degrading the core developer experience.\n\nKey Takeaways: Failure domain isolation, p99 latency path management, intelligent API gateway routing.",
    isTopPost: true
  },
  {
    title: "Netflix India — 1/3",
    date: "2026-04-20",
    category: "PM Teardown",
    brand: "Netflix",
    url: "https://www.linkedin.com/feed/update/urn:li:ugcPost:7453711000000000000",
    reactions: 16,
    comments: 0
  },
  {
    title: "Netflix India — 2/3",
    date: "2026-04-20",
    category: "PM Teardown",
    brand: "Netflix",
    url: "https://www.linkedin.com/feed/update/urn:li:ugcPost:7453712000000000000",
    reactions: 4,
    comments: 0
  },
  {
    title: "Netflix India — 3/3",
    date: "2026-04-20",
    category: "PM Teardown",
    brand: "Netflix",
    url: "https://www.linkedin.com/feed/update/urn:li:ugcPost:7453713000000000000",
    reactions: 2,
    comments: 4
  },
  // RAVE TEARDOWN
  {
    title: "[Teardown] The Rave Paradox: Moats vs. Windows",
    date: "2026-05-23",
    category: "PM Teardown",
    brand: "Rave",
    url: "https://www.linkedin.com/posts/harsh-sharma-406044299_50-million-downloads-11-employees-zero-activity-7463838148486160384-m6HR?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEgWMUYBWkAMYPJiYpYOoUm1z68nl2r5MUI",
    reactions: 185,
    comments: 34,
    hook: "Building a product in the alignment gap of incumbent incentives (like Netflix/Disney killing watch parties to force individual subscriptions) is a brilliant growth window, but it's not a sustainable moat without deep, native switching costs.\n\nKey Takeaways: Incentive mapping, platform dependency risk, defensive lock-in strategy.",
    isTopPost: true
  },
  // CRED TEARDOWN
  {
    title: "CRED does something incredibly boring — and that's exactly the point.",
    date: "2026-04-14",
    category: "PM Teardown",
    brand: "CRED",
    url: "https://www.linkedin.com/feed/update/urn:li:ugcPost:7451218000000000000",
    reactions: 4,
    comments: 0
  },
  {
    title: "Everyone thinks CRED makes money from bill payments. They don't.",
    date: "2026-04-14",
    category: "PM Teardown",
    brand: "CRED",
    url: "https://www.linkedin.com/feed/update/urn:li:ugcPost:7451219000000000000",
    reactions: 4,
    comments: 0
  },
  {
    title: "CRED has the most premium user base in India. So why can't they convert them?",
    date: "2026-04-14",
    category: "PM Teardown",
    brand: "CRED",
    url: "https://www.linkedin.com/feed/update/urn:li:ugcPost:7451220000000000000",
    reactions: 3,
    comments: 0
  },
  {
    title: "Why isn't Kuvera converting CRED's premium users?",
    date: "2026-04-15",
    category: "Product Insight",
    brand: "CRED",
    url: "https://www.linkedin.com/feed/update/urn:li:ugcPost:7451585000000000000",
    reactions: 4,
    comments: 0
  },
  // SNAPDEAL TEARDOWN
  {
    title: "Snapdeal had 25% of India's e-commerce market. 100 million users. Then they visited China.",
    date: "2026-04-30",
    category: "PM Teardown",
    brand: "Snapdeal",
    url: "https://www.linkedin.com/feed/update/urn:li:ugcPost:7455215654586155008",
    reactions: 3,
    comments: 3
  },
  {
    title: "July 2017. Flipkart put ₹7,500 Cr on the table. The founders said no.",
    date: "2026-04-30",
    category: "PM Teardown",
    brand: "Snapdeal",
    url: "https://www.linkedin.com/feed/update/urn:li:ugcPost:7455216323518865409",
    reactions: 3,
    comments: 0
  },
  {
    title: "Snapdeal invented value commerce for Bharat in 2014. Meesho perfected it in 2019.",
    date: "2026-04-30",
    category: "PM Teardown",
    brand: "Snapdeal",
    url: "https://www.linkedin.com/feed/update/urn:li:ugcPost:7455217000000000000",
    reactions: 1,
    comments: 0
  },
  // MEESHO / FLIPKART
  {
    title: "Flipkart has 48% market share. Meesho has 213 million buyers. So who's actually winning?",
    date: "2026-04-23",
    category: "PM Teardown",
    brand: "Meesho / Flipkart",
    url: "https://www.linkedin.com/feed/update/urn:li:ugcPost:7454600000000000000",
    reactions: 6,
    comments: 0
  },
  {
    title: "Meesho had 1.1 million sellers. Zero control over how their products ranked.",
    date: "2026-04-23",
    category: "PM Teardown",
    brand: "Meesho / Flipkart",
    url: "https://www.linkedin.com/feed/update/urn:li:ugcPost:7454601000000000000",
    reactions: 3,
    comments: 0
  },
  {
    title: "Meesho IPO'd in December 2025. Listed at 46% premium. Oversubscribed 73x.",
    date: "2026-04-24",
    category: "Product Insight",
    brand: "Meesho",
    url: "https://www.linkedin.com/feed/update/urn:li:ugcPost:7454900000000000000",
    reactions: 6,
    comments: 4
  },
  // SPOTIFY TEARDOWN
  {
    title: "Spotify entered India in 2019. It was 3 years late to a market dominated by JioSaavn and Gaana.",
    date: "2026-04-10",
    category: "PM Teardown",
    brand: "Spotify",
    url: "https://www.linkedin.com/feed/update/urn:li:ugcPost:7448144000000000000",
    reactions: 4,
    comments: 0
  },
  {
    title: "Most people think Spotify is just another music app. It's not. It's a taste graph.",
    date: "2026-04-11",
    category: "PM Teardown",
    brand: "Spotify",
    url: "https://www.linkedin.com/feed/update/urn:li:ugcPost:7448500000000000000",
    reactions: 3,
    comments: 0
  },
  {
    title: "Spotify has 100 million+ songs. But 80% of streams come from just 40,000 tracks.",
    date: "2026-04-11",
    category: "PM Teardown",
    brand: "Spotify",
    url: "https://www.linkedin.com/feed/update/urn:li:ugcPost:7448501000000000000",
    reactions: 4,
    comments: 0
  },
  {
    title: "I realized something interesting about how I use Spotify — and it's a product lesson.",
    date: "2026-04-19",
    category: "Product Insight",
    brand: "Spotify",
    url: "https://www.linkedin.com/feed/update/urn:li:ugcPost:7452700000000000000",
    reactions: 3,
    comments: 4
  },
  {
    title: "Every Monday Spotify knows what you want to hear. That's not luck. That's 170 billion data points.",
    date: "2026-05-05",
    category: "PM Teardown",
    brand: "Spotify",
    url: "https://www.linkedin.com/feed/update/urn:li:ugcPost:7457277914843955201",
    reactions: 2,
    comments: 0
  },
  {
    title: "Spotify has 45 million Blends. The social layer that makes people stay.",
    date: "2026-05-05",
    category: "PM Teardown",
    brand: "Spotify",
    url: "https://www.linkedin.com/feed/update/urn:li:ugcPost:7457277249079676928",
    reactions: 5,
    comments: 0
  },
  {
    title: "Spotify made their recommendations \"safer\" in 2024. Users noticed. Reddit and X blew up.",
    date: "2026-05-06",
    category: "PM Teardown",
    brand: "Spotify",
    url: "https://www.linkedin.com/feed/update/urn:li:ugcPost:7457618000000000000",
    reactions: 6,
    comments: 7
  },
  {
    title: "Spotify operates in 180+ countries. Here's the full teardown.",
    date: "2026-05-05",
    category: "PM Teardown",
    brand: "Spotify",
    url: "https://www.linkedin.com/feed/update/urn:li:ugcPost:7457276000000000000",
    reactions: 2,
    comments: 0
  },
  // RED BULL TEARDOWN
  {
    title: "Red Bull sold 13.97 billion cans in 2025. It's not a drinks company. It's a media empire.",
    date: "2026-05-07",
    category: "PM Teardown",
    brand: "Red Bull",
    url: "https://www.linkedin.com/feed/update/urn:li:ugcPost:7458041063392329729",
    reactions: 3,
    comments: 0
  },
  {
    title: "Red Bull Media House generates $2.52 billion annually. Independent of energy drink sales.",
    date: "2026-05-07",
    category: "PM Teardown",
    brand: "Red Bull",
    url: "https://www.linkedin.com/feed/update/urn:li:ugcPost:7458043094538567680",
    reactions: 5,
    comments: 0
  },
  {
    title: "5 things Red Bull did that most product teams never do.",
    date: "2026-05-07",
    category: "PM Teardown",
    brand: "Red Bull",
    url: "https://www.linkedin.com/feed/update/urn:li:ugcPost:7458044028907888640",
    reactions: 6,
    comments: 5
  },
  // PUBG / BGMI TEARDOWN
  {
    title: "2018. A game nobody had heard of. 2019. Every hostel. Every chai tapri. \"Bhai PUBG khelta hai?\"",
    date: "2026-05-08",
    category: "PM Teardown",
    brand: "PUBG / BGMI",
    url: "https://www.linkedin.com/feed/update/urn:li:ugcPost:7458398990699479040",
    reactions: 2,
    comments: 0
  },
  {
    title: "Banned Twice. Back Twice. Krafton's Crisis PM Playbook",
    date: "2026-05-08",
    category: "PM Teardown",
    brand: "PUBG / BGMI",
    url: "https://www.linkedin.com/posts/harsh-sharma-406044299_banned-twice-back-twice-kraftons-crisis-ugcPost-7458400482026328064-JsrR",
    reactions: 0,
    comments: 0,
    hook: "When India banned PUBG, 50M users vanished overnight. Krafton didn't just rebrand; they executed a surgical product strategy: cutting Tencent, localizing data to Azure India, and addressing root-cause security concerns to become the government's preferred solution."
  },
  // SNAPCHAT TEARDOWN
  {
    title: "The duopoly is dead. India's ride-hailing market now has three serious players — and Snapchat is the wildcard.",
    date: "2026-04-17",
    category: "PM Teardown",
    brand: "Snapchat",
    url: "https://www.linkedin.com/feed/update/urn:li:ugcPost:7452500000000000000",
    reactions: 13,
    comments: 7
  },
  {
    title: "Snapchat didn't add a feature. They removed a friction.",
    date: "2026-04-26",
    category: "UX Insight",
    brand: "Snapchat",
    url: "https://www.linkedin.com/feed/update/urn:li:ugcPost:7454930000000000000",
    reactions: 13,
    comments: 4
  },
  {
    title: "Snapchat has 250 million users in India. And almost zero revenue from them.",
    date: "2026-04-27",
    category: "PM Teardown",
    brand: "Snapchat",
    url: "https://www.linkedin.com/feed/update/urn:li:ugcPost:7455100000000000000",
    reactions: 2,
    comments: 0
  },
  {
    title: "Snapchat just fired 16% of its employees. Here's the product lesson.",
    date: "2026-04-27",
    category: "Product Insight",
    brand: "Snapchat",
    url: "https://www.linkedin.com/feed/update/urn:li:ugcPost:7455101000000000000",
    reactions: 1,
    comments: 0
  },
  // META / INSTAGRAM TEARDOWN
  {
    title: "250 million Indian users. ~3% of global revenue. Meta's India problem is a product problem.",
    date: "2026-04-27",
    category: "PM Teardown",
    brand: "Meta",
    url: "https://www.linkedin.com/feed/update/urn:li:ugcPost:7455102000000000000",
    reactions: 3,
    comments: 0
  },
  {
    title: "Meta just added AI to your Instagram group chats. Nobody asked for it. That's the point.",
    date: "2026-05-03",
    category: "Product Insight",
    brand: "Meta",
    url: "https://www.linkedin.com/feed/update/urn:li:ugcPost:7456500000000000000",
    reactions: 6,
    comments: 0
  },
  // INSTAGRAM UX OBSERVATIONS
  {
    title: "Instagram quietly does something most apps don't — and it's a retention masterclass.",
    date: "2026-05-01",
    category: "UX Insight",
    brand: "Instagram",
    url: "https://www.linkedin.com/feed/update/urn:li:ugcPost:7455700000000000000",
    reactions: 9,
    comments: 4
  },
  {
    title: "Instagram did something most PMs are too scared to do — they broke a habit you've had for years.",
    date: "2026-04-09",
    category: "UX Insight",
    brand: "Instagram",
    url: "https://www.linkedin.com/feed/update/urn:li:share:7447860229268000768",
    reactions: 3,
    comments: 0
  },
  {
    title: "Instagram copied YouTube. YouTube copied TikTok. Nobody copied anyone's mistake.",
    date: "2026-04-09",
    category: "UX Insight",
    brand: "Instagram",
    url: "https://www.linkedin.com/feed/update/urn:li:ugcPost:7447862000000000000",
    reactions: 1,
    comments: 0
  },
  // LINKEDIN UX OBSERVATIONS
  {
    title: "Most people scroll past ads. But today I paused — and it was a product lesson.",
    date: "2026-04-29",
    category: "UX Insight",
    brand: "LinkedIn",
    url: "https://www.linkedin.com/feed/update/urn:li:share:7455133304003043328",
    reactions: 5,
    comments: 0
  },
  {
    title: "LinkedIn quietly updated the reaction bar. Sometimes the best PM decision is to NOT change what's working.",
    date: "2026-04-28",
    category: "UX Insight",
    brand: "LinkedIn",
    url: "https://www.linkedin.com/feed/update/urn:li:share:7454775706976366592",
    reactions: 2,
    comments: 0
  },
  {
    title: "I spotted this notification on LinkedIn today and couldn't stop thinking about it as a product decision.",
    date: "2026-04-24",
    category: "UX Insight",
    brand: "LinkedIn",
    url: "https://www.linkedin.com/feed/update/urn:li:ugcPost:7454901000000000000",
    reactions: 1,
    comments: 0
  },
  // STANDALONE PRODUCT INSIGHTS
  {
    title: "Someone asked me if we can get a cracked version of Anthropic Claude. That's actually a product insight.",
    date: "2026-05-06",
    category: "Product Insight",
    url: "https://www.linkedin.com/feed/update/urn:li:ugcPost:7457619000000000000",
    reactions: 11,
    comments: 8
  },
  {
    title: "Was reviewing code on GitHub and noticed something weird — a repo with 0 stars but 847 commits.",
    date: "2026-05-06",
    category: "Product Insight",
    brand: "GitHub",
    url: "https://www.linkedin.com/feed/update/urn:li:ugcPost:7457620000000000000",
    reactions: 6,
    comments: 0
  },
  {
    title: "China just made it illegal to fire someone and replace them with AI. Here's the product angle.",
    date: "2026-05-03",
    category: "Product Insight",
    url: "https://www.linkedin.com/feed/update/urn:li:ugcPost:7456501000000000000",
    reactions: 4,
    comments: 5
  },
  {
    title: "Most product decisions are made on assumptions. That word \"probably\" has killed more products than bad code.",
    date: "2026-04-08",
    category: "PM Thinking",
    url: "https://www.linkedin.com/feed/update/urn:li:share:7447589013190008832",
    reactions: 1,
    comments: 0
  },
  {
    title: "You didn't build a bad product. You explained it badly. Clarity is a product skill.",
    date: "2026-04-08",
    category: "PM Thinking",
    url: "https://www.linkedin.com/feed/update/urn:li:share:7447495735945912320",
    reactions: 10,
    comments: 4
  },
  {
    title: "The duopoly is dead. India's ride-hailing market now has three serious players.",
    date: "2026-04-17",
    category: "Product Insight",
    url: "https://www.linkedin.com/feed/update/urn:li:ugcPost:7452500000000000000",
    reactions: 13,
    comments: 7
  },
  {
    title: "Market share is vanity. Cash flow is sanity. So who's actually winning in India's delivery wars?",
    date: "2026-04-17",
    category: "Product Insight",
    url: "https://www.linkedin.com/feed/update/urn:li:ugcPost:7452501000000000000",
    reactions: 2,
    comments: 3
  },
  {
    title: "Features are copied in weeks. Culture, matching efficiency, and ecosystem lock-in take years.",
    date: "2026-04-17",
    category: "Product Insight",
    brand: "Zomato",
    url: "https://www.linkedin.com/feed/update/urn:li:ugcPost:7452502000000000000",
    reactions: 6,
    comments: 0
  },
  {
    title: "Remember in school when we were taught to find one right answer? PM work is the opposite.",
    date: "2026-04-21",
    category: "PM Thinking",
    url: "https://www.linkedin.com/feed/update/urn:li:ugcPost:7453800000000000000",
    reactions: 9,
    comments: 0
  },
  // LEARNING / CERTIFICATIONS
  {
    title: "Just completed the Product Management Job Simulation by Forage — here's what I actually learned.",
    date: "2026-05-08",
    category: "Learning",
    url: "https://www.linkedin.com/feed/update/urn:li:ugcPost:7458124051006484480",
    reactions: 2,
    comments: 2
  }
]

const categories = ['All', 'PM Teardown', 'UX Insight', 'Product Insight', 'Learning', 'PM Thinking']

const categoryColors = {
  'PM Teardown': 'bg-orange-500',
  'UX Insight': 'bg-blue-500',
  'Product Insight': 'bg-green-500',
  'PM Thinking': 'bg-purple-500',
  'Learning': 'bg-violet-500'
}

const brandDomains: Record<string, string | string[]> = {
  'Zomato': 'zomato.com',
  'Zomato / Zepto': 'zeptonow.com',
  'Blinkit / Zomato': 'blinkit.com',
  'UPI / NPCI': 'npci.org.in',
  'UPI / Google Pay': 'pay.google.com',
  'UPI / PhonePe': 'phonepe.com',
  'Netflix': 'netflix.com',
  'Rave': 'rave.io',
  'CRED': 'cred.club',
  'Snapdeal': 'snapdeal.com',
  'Meesho / Flipkart': 'meesho.com',
  'Meesho': 'meesho.com',
  'Spotify': 'spotify.com',
  'Spotify Vs YouTube?': ['spotify.com', 'youtube.com'],
  'Red Bull': 'redbull.com',
  'PUBG / BGMI': 'krafton.com',
  'Snapchat': 'snapchat.com',
  'Meta': 'meta.com',
  'Instagram': 'instagram.com',
  'LinkedIn': 'linkedin.com',
  'GitHub': 'github.com',
  'IRCTC': 'irctc.co.in',
  'Truecaller': 'truecaller.com',
}

// Custom logo overrides for brands where Google favicon doesn't work well
const brandLogos: Record<string, string> = {
  'IRCTC': '/irctc_logo.png',
  'Truecaller': '/truecaller_logo.svg',
}

export function PMTeardowns() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [selectedBrand, setSelectedBrand] = useState<string | null>(null)

  const filteredPostsByCategory = selectedCategory === 'All' 
    ? posts 
    : posts.filter(post => post.category === selectedCategory)

  const groupedPosts = filteredPostsByCategory.reduce((acc, post) => {
    const brand = post.brand || 'General Insights'
    if (!acc[brand]) {
      acc[brand] = {
        name: brand,
        posts: [],
        totalReactions: 0,
        totalComments: 0,
      }
    }
    acc[brand].posts.push(post)
    acc[brand].totalReactions += post.reactions
    acc[brand].totalComments += post.comments
    return acc
  }, {} as Record<string, { name: string, posts: Post[], totalReactions: number, totalComments: number }>)

  const brandCards = Object.values(groupedPosts).sort((a, b) => b.totalReactions - a.totalReactions)

  const displayedPosts = selectedBrand 
    ? groupedPosts[selectedBrand]?.posts.sort((a, b) => b.reactions - a.reactions) || []
    : []

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
  }

  return (
    <section id="pm-teardowns" className="bg-background py-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">PM Teardowns & Insights</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Breaking down real product decisions — what worked, what failed, and what every PM should steal.
          </p>
        </div>

        {/* Stats Bar */}
        <div className="flex justify-center items-center gap-8 mb-12 text-foreground">
          <div className="text-center">
            <div className="text-2xl font-bold">{posts.length}</div>
            <div className="text-sm text-muted-foreground">Posts</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold">{Object.keys(groupedPosts).length}</div>
            <div className="text-sm text-muted-foreground">Brands & Series</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold">
              {posts.length > 0 ? Math.max(...posts.map(p => p.reactions)) : 0}
            </div>
            <div className="text-sm text-muted-foreground">Top Post Reactions</div>
          </div>
        </div>

        {!selectedBrand ? (
          <>
            {/* Filter Bar */}
            <div className="flex flex-wrap justify-center gap-4 mb-16">
              {categories.map(category => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </Button>
              ))}
            </div>

            {/* Brands Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12">
              {brandCards.map((brand, index) => (
                <Card 
                  key={index} 
                  className="bg-card/50 border-border backdrop-blur-sm hover:bg-accent/50 transition-colors cursor-pointer flex flex-col p-2 group relative overflow-hidden"
                  onClick={() => setSelectedBrand(brand.name)}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 group-hover:from-blue-500/10 group-hover:to-purple-500/10 transition-colors" />
                  <CardHeader className="pb-3 relative z-10">
                    <div className="flex items-center gap-4">
                      {brandLogos[brand.name] ? (
                        <div className="w-12 h-12 rounded-full overflow-hidden bg-white flex items-center justify-center p-[2px] border border-border shrink-0">
                          <img 
                            src={brandLogos[brand.name]} 
                            alt={`${brand.name} logo`}
                            className="w-full h-full object-contain rounded-full bg-white"
                            onError={(e) => {
                              (e.target as HTMLImageElement).style.display = 'none';
                            }}
                          />
                        </div>
                      ) : brandDomains[brand.name] ? (
                        Array.isArray(brandDomains[brand.name]) ? (
                          <div className="flex -space-x-3 shrink-0 items-center">
                            <div className="w-12 h-12 rounded-full overflow-hidden bg-white flex items-center justify-center p-[2px] border-2 border-background shadow-sm relative z-10 shrink-0">
                              <img 
                                src={`https://www.google.com/s2/favicons?domain=${brandDomains[brand.name][0]}&sz=128`} 
                                className="w-full h-full object-contain rounded-full bg-white"
                                alt={`${brand.name} logo 1`}
                                onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
                              />
                            </div>
                            <div className="w-12 h-12 rounded-full overflow-hidden bg-white flex items-center justify-center p-[2px] border-2 border-background shadow-sm relative z-0 shrink-0">
                              <img 
                                src={`https://www.google.com/s2/favicons?domain=${brandDomains[brand.name][1]}&sz=128`} 
                                className="w-full h-full object-contain rounded-full bg-white"
                                alt={`${brand.name} logo 2`}
                                onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
                              />
                            </div>
                          </div>
                        ) : (
                          <div className="w-12 h-12 rounded-full overflow-hidden bg-white flex items-center justify-center p-[2px] border border-border shrink-0">
                            <img 
                              src={`https://www.google.com/s2/favicons?domain=${brandDomains[brand.name]}&sz=128`} 
                              alt={`${brand.name} logo`}
                              className="w-full h-full object-contain rounded-full bg-white"
                              onError={(e) => {
                                (e.target as HTMLImageElement).style.display = 'none';
                              }}
                            />
                          </div>
                        )
                      ) : (
                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white font-bold text-xl border border-border shrink-0">
                          {brand.name.charAt(0)}
                        </div>
                      )}
                      <h3 className="text-foreground font-semibold text-2xl leading-tight group-hover:text-primary transition-colors">
                        {brand.name}
                      </h3>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0 flex flex-col flex-grow justify-end">
                    <div className="mt-auto">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex gap-4 text-sm text-muted-foreground">
                          {brand.name === 'Truecaller' ? (
                            <span className="font-semibold text-xs text-foreground/80">📝 3 Posts | 500M+ Users | Moat Analysis</span>
                          ) : (
                            <>
                              <span>📝 {brand.posts.length} Posts</span>
                              <span className="text-yellow-500 dark:text-yellow-400">👍 {brand.totalReactions}</span>
                              <span className="text-blue-500 dark:text-blue-400">💬 {brand.totalComments}</span>
                            </>
                          )}
                        </div>
                      </div>
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="w-full pointer-events-none"
                      >
                        View Teardowns →
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </>
        ) : (
          <>
            <div className="mb-8 flex items-center justify-between">
              <Button 
                onClick={() => setSelectedBrand(null)}
                variant="outline"
              >
                ← Back to Brands
              </Button>
              <h3 className="text-2xl font-bold text-foreground">{selectedBrand}</h3>
            </div>

            {selectedBrand === 'Truecaller' && (
              <div className="mb-8 p-6 bg-blue-500/10 border border-blue-500/20 rounded-2xl flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                <div className="flex-1">
                  <h4 className="text-lg font-bold text-foreground">Truecaller: Moat Analysis & Ecosystem Absorption</h4>
                  <p className="text-sm text-muted-foreground mt-1">
                    Read the complete structured case study covering crowdsourced identity moats, algorithm dependency traps, and default OS integration threats.
                  </p>
                </div>
                <Button asChild className="bg-blue-600 hover:bg-blue-700 text-white font-semibold shrink-0">
                  <Link href="/truecaller-teardown">
                    View Case Study Deep Dive →
                  </Link>
                </Button>
              </div>
            )}

            {/* Posts Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 mb-12">
              {displayedPosts.map((post, index) => (
                <Card key={index} className="bg-card/50 border-border backdrop-blur-sm hover:bg-accent/50 transition-colors flex flex-col p-2">
                  <CardHeader className="pb-3">
                    <div className="flex items-start justify-between mb-2">
                      <Badge 
                        className={`${categoryColors[post.category as keyof typeof categoryColors] || 'bg-gray-500'} text-white text-xs`}
                      >
                        {post.category}
                      </Badge>
                      {post.isTopPost && (
                        <Badge className="bg-red-500 text-white text-xs">
                          🔥 Top Post
                        </Badge>
                      )}
                    </div>
                    <h3 className="text-foreground font-semibold text-lg leading-tight">
                      {post.title}
                    </h3>
                    {post.hook && (
                      <p className="text-muted-foreground text-sm mt-2 line-clamp-2">
                        {post.hook}
                      </p>
                    )}
                  </CardHeader>
                  <CardContent className="pt-0 flex flex-col flex-grow justify-end">
                    <div className="mt-auto">
                      <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                        <span>{formatDate(post.date)}</span>
                      </div>
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex gap-4 text-sm">
                          <span className="text-yellow-500 dark:text-yellow-400">👍 {post.reactions}</span>
                          <span className="text-blue-500 dark:text-blue-400">💬 {post.comments}</span>
                        </div>
                      </div>
                      <Button 
                        asChild 
                        variant="outline" 
                        size="sm" 
                        className="w-full"
                      >
                        <a href={post.url} target="_blank" rel="noopener noreferrer">
                          View on LinkedIn →
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </>
        )}

        {/* Footer */}
        <div className="text-center">
          <p className="text-muted-foreground mb-6">
            New teardown every week · {posts.length} posts published
          </p>
          <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
            <a href="https://www.linkedin.com/in/harsh-sharma-406044299" target="_blank" rel="noopener noreferrer">
              Follow on LinkedIn
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}