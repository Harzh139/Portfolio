"use client"

import React, { useState } from 'react'
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
  // SPOTIFY VS YOUTUBE TEARDOWN
  {
    title: "Some creators are making 2–3x more money on Spotify than YouTube.",
    date: "2026-05-11",
    category: "PM Teardown",
    brand: "Spotify Vs YouTube",
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
    brand: "Spotify Vs YouTube",
    url: "https://www.linkedin.com/posts/harsh-sharma-406044299_productmanagement-spotify-productstrategy-share-7459218167387746304-vuXF?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEgWMUYBWkAMYPJiYpYOoUm1z68nl2r5MUI",
    reactions: 28,
    comments: 4,
    hook: "Spotify now has 500,000+ video shows. 390 million users have already watched video on the app. But here's the part everyone gets wrong: This is NOT a YouTube attack."
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

const brandDomains: Record<string, string> = {
  'Zomato': 'zomato.com',
  'Zomato / Zepto': 'zeptonow.com',
  'Blinkit / Zomato': 'blinkit.com',
  'UPI / NPCI': 'npci.org.in',
  'UPI / Google Pay': 'pay.google.com',
  'UPI / PhonePe': 'phonepe.com',
  'Netflix': 'netflix.com',
  'CRED': 'cred.club',
  'Snapdeal': 'snapdeal.com',
  'Meesho / Flipkart': 'meesho.com',
  'Meesho': 'meesho.com',
  'Spotify': 'spotify.com',
  'Spotify Vs YouTube': 'spotify.com',
  'Red Bull': 'redbull.com',
  'PUBG / BGMI': 'krafton.com',
  'Snapchat': 'snapchat.com',
  'Meta': 'meta.com',
  'Instagram': 'instagram.com',
  'LinkedIn': 'linkedin.com',
  'GitHub': 'github.com',
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
                      {brandDomains[brand.name] ? (
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
                          <span>📝 {brand.posts.length} Posts</span>
                          <span className="text-yellow-500 dark:text-yellow-400">👍 {brand.totalReactions}</span>
                          <span className="text-blue-500 dark:text-blue-400">💬 {brand.totalComments}</span>
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