# Swiggy Instamart — Competitive Analysis
## Why is Swiggy's Instamart losing to Blinkit?

![Swiggy Case](/swiggy_blinkit_case.png)

### Context
I just did my first proper PM case study. No template. No YouTube framework. Just real data and a brutal Senior PM asking 'why' after every single answer.

The case: Why is Swiggy's Instamart losing to Blinkit?

My first instinct? "Give discounts and free sugar to users."

The Senior PM did the math with me. I needed 28 LAKH new users per month just to break even. Back to the drawing board.

### Problem
The AOV gap between Instamart (₹527) and Blinkit (₹665) isn't a product failure. It's a customer profile difference.

### Insight (Segmentation Trap)
Blinkit dominates metros — corporate users who pay for convenience without thinking twice. Instamart is expanding into Tier 2/3 — value-first users who compare every price with their local kirana and buy monthly ration in bulk, not daily snacks.

Current data suggests demand-side behavior is the bigger constraint — though supply gaps in specific pin codes need parallel investigation.

### User Segments
| Metro (Blinkit) | Tier 2/3 (Instamart) |
| :--- | :--- |
| Corporate users paying for convenience. | Value-first users comparing prices with local kirana. |

### Core Insight Highlight
**"Instamart's challenge is customer profile, not product failure."**

### Solution
Three initiatives, sequenced deliberately:

① **Savings visibility first (Week 1)**  
Show "you saved ₹180 vs local kirana" on every order confirmation. Low engineering effort. High trust impact. Validates our hypothesis before we invest further.

② **Bulk ration bundles (Month 1)**  
Pre-curated monthly bundles — rice, dal, oil, sugar, flour — at 8-10% below MRP. Matches how Tier 2/3 users actually shop: monthly, in bulk, value-first.

③ **Qualified referral program (Month 2-3)**  
Referral reward unlocks ONLY when the referred user completes first purchase. People in Tier 2/3 trust people, not brands. But they need to believe the discount is real before they'll tell anyone — which is why savings visibility comes first.

### Trade-offs
*   **Savings visibility:** Needs reasonably accurate kirana price benchmarking.
*   **Bulk ration bundles:** Margin drops ~4% per bundle order. Acceptable if repeat frequency doubles — LTV goes up even if per-order margin goes down.
*   **Qualified referral program:** CAC increases per referral, but ₹100 reward on a ₹2,000 order from a retained customer is worth it.

### Metrics
→ North star: AOV moves from ₹527 → ₹650 within 90 days  
→ Referral conversion rate above 35%  
→ Month-2 repeat order rate above 40%

Data source: Public Swiggy/Zomato FY25 reports

---
If you're a Senior PM and see a flaw in this thinking — my comments are open. I'd rather be corrected publicly than be wrong quietly.
