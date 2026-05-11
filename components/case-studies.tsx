import React from 'react'

export function CaseStudies() {
  return (
    <section id="case-studies" className="py-32 px-6 bg-background relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -right-1/4 w-1/2 h-1/2 bg-blue-500/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 -left-1/4 w-1/2 h-1/2 bg-purple-500/5 rounded-full blur-[120px]" />
      </div>

      <div className="mx-auto max-w-4xl relative z-10">
        <div className="flex flex-col gap-12">
          <div className="flex items-center gap-6">
            <h2 className="text-xs font-mono text-accent tracking-[0.3em] uppercase whitespace-nowrap">
              Case Studies
            </h2>
            <div className="flex-1 h-px bg-gradient-to-r from-border/60 to-transparent" />
          </div>

          <div className="bg-card/20 border border-white/10 rounded-xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
            <div className="p-8 md:p-12">
              <div className="mb-8 border-b border-white/10 pb-8">
                <div className="flex gap-2 mb-4">
                  <span className="px-3 py-1 text-[10px] font-bold uppercase tracking-wider border rounded-full backdrop-blur-md bg-red-500/10 text-red-500 border-red-500/20 shadow-sm">
                    Zomato
                  </span>
                  <span className="px-3 py-1 text-[10px] font-bold uppercase tracking-wider border rounded-full backdrop-blur-md bg-blue-500/10 text-blue-500 border-blue-500/20 shadow-sm">
                    RCA
                  </span>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-foreground leading-tight">
                  RCA: Zomato's average rating for restaurants has dropped by 10% in Pune
                </h3>
              </div>

              <div className="space-y-12 text-muted-foreground leading-relaxed">
                {/* Clarifying Questions */}
                <section>
                  <h4 className="text-xl font-semibold text-foreground mb-4">Ask clarifying questions to dissect the problem statement:</h4>
                  <div className="space-y-4 bg-background/50 p-6 rounded-lg border border-white/5">
                    <p><strong className="text-foreground">Me:</strong> To reiterate the problem statement, if we were to take an average of all the restaurant ratings visible on the Zomato app for the city of Pune, that number has dropped by 10%?</p>
                    <p><strong className="text-foreground">Interviewer:</strong> Yes.</p>
                    
                    <p><strong className="text-foreground">Me:</strong> How is the average rating metric calculated? Is it just an average of all the restaurant ratings visible on Zomato? Also, are each of the restaurant ratings calculated by simply taking an average of all customer ratings submitted since the restaurant was onboarded?</p>
                    <p><strong className="text-foreground">Interviewer:</strong> Yes, the average rating is calculated as an average of all visible restaurant ratings. Each restaurant's rating is an average of all customer ratings submitted since the restaurant was onboarded.</p>

                    <p><strong className="text-foreground">Me:</strong> Has there been a change in the way the ‘average rating for restaurants’ metric is calculated?</p>
                    <p><strong className="text-foreground">Interviewer:</strong> No, there have been no changes to the calculation method.</p>

                    <p><strong className="text-foreground">Me:</strong> Has such a change been noticed in any other city, or is it only in Pune?</p>
                    <p><strong className="text-foreground">Interviewer:</strong> The drop has been noticed only in Pune.</p>

                    <p><strong className="text-foreground">Me:</strong> Is the drop sudden or over a period of time? The 10% drop is in comparison to what? (e.g., week over week, or month over month)</p>
                    <p><strong className="text-foreground">Interviewer:</strong> The drop has been sudden and observed over the past month compared to the previous month.</p>

                    <p><strong className="text-foreground">Me:</strong> Is the drop consistent across all user segments, or are there specific segments that are experiencing larger drops?</p>
                    <p><strong className="text-foreground">Interviewer:</strong> The drop can mainly be attributed to users without Zomato Gold membership.</p>

                    <p><strong className="text-foreground">Me:</strong> Is the drop experienced across all types of restaurants, or only specific ones (e.g., fine dining, fast food, local cuisines)?</p>
                    <p><strong className="text-foreground">Interviewer:</strong> The drop is experienced across all types of restaurants.</p>

                    <p><strong className="text-foreground">Me:</strong> Is the drop experienced for dining-in or food delivery, or both?</p>
                    <p><strong className="text-foreground">Interviewer:</strong> The drop is experienced specifically for food delivery.</p>

                    <p><strong className="text-foreground">Me:</strong> Have there been any changes to the rating system recently?</p>
                    <p><strong className="text-foreground">Interviewer:</strong> No, there have been no recent changes to the rating system.</p>
                  </div>
                </section>

                {/* Identify Possible Causes */}
                <section>
                  <h4 className="text-xl font-semibold text-foreground mb-4">Identify Possible Causes:</h4>
                  <p className="mb-6">List out all possible external and internal factors that could have led to this situation. The actual cause could be one of them or a combination of both, in some situations. Use data obtained from the clarifying questions to further narrow down.</p>
                  
                  <div className="space-y-8">
                    {/* External Factors */}
                    <div>
                      <h5 className="text-lg font-medium text-foreground mb-4 pb-2 border-b border-white/5">External Factors</h5>
                      <div className="space-y-4 bg-background/50 p-6 rounded-lg border border-white/5">
                        <p><strong className="text-foreground">Me:</strong> Is there increased competition in Pune, with users possibly comparing Zomato's services with other apps?</p>
                        <p><strong className="text-foreground">Interviewer:</strong> There has been some increase in competition, with a new local tiffin delivery app.</p>

                        <p><strong className="text-foreground">Me:</strong> Could there have been a major event in Pune that led to poor service from restaurants (e.g., a big festival, natural disasters, etc.)?</p>
                        <p><strong className="text-foreground">Interviewer:</strong> No major events that could affect restaurant services have occurred.</p>

                        <p><strong className="text-foreground">Me:</strong> Has there been any negative media coverage about Zomato or its associated restaurants, or a shift in public sentiment towards Tata Cliq?</p>
                        <p><strong className="text-foreground">Interviewer:</strong> No significant negative media coverage or sentiments crossed our radar.</p>

                        <p><strong className="text-foreground">Me:</strong> Have there been any regulatory changes affecting restaurant operations?</p>
                        <p><strong className="text-foreground">Interviewer:</strong> No recent regulatory changes.</p>

                        <p><strong className="text-foreground">Me:</strong> Could there be seasonal variations or economic downturns affecting customer behavior?</p>
                        <p><strong className="text-foreground">Interviewer:</strong> There has been no significant seasonal variation or economic downturn reported.</p>
                      </div>
                    </div>

                    {/* Internal Factors */}
                    <div>
                      <h5 className="text-lg font-medium text-foreground mb-4 pb-2 border-b border-white/5">Internal Factors</h5>
                      <div className="space-y-6">
                        {/* Product Changes */}
                        <div className="space-y-4 bg-background/50 p-6 rounded-lg border border-white/5">
                          <h6 className="font-semibold text-foreground">(a) Product Changes</h6>
                          <p><strong className="text-foreground">Me:</strong> Were there any recent app updates or feature changes?</p>
                          <p><strong className="text-foreground">Interviewer:</strong> Yes, there were some updates but nothing major that should affect ratings.</p>

                          <p><strong className="text-foreground">Me:</strong> Were there changes in the restaurant list, perhaps many new low-rated restaurants were added recently in Pune?</p>
                          <p><strong className="text-foreground">Interviewer:</strong> No significant changes to the restaurant list in Pune.</p>

                          <p><strong className="text-foreground">Me:</strong> Were there changes to the rating system, maybe a feature change that hinders the user experience, making it hard for users to navigate or submit reviews?</p>
                          <p><strong className="text-foreground">Interviewer:</strong> No changes to the rating system have been made.</p>

                          <p><strong className="text-foreground">Me:</strong> Has there been any removal or reduction of discounts and promotional offers that were previously popular among users?</p>
                          <p><strong className="text-foreground">Interviewer:</strong> Yes, there were some changes in the discounts available on delivery. A discount code that was applicable across major restaurants in Pune was retracted for the users without Zomato Gold membership.</p>

                          <p><strong className="text-foreground">Me:</strong> I would like to clarify the user journey to understand any possible changes in it? <br/>
                          <span className="italic">User Journey for rating a restaurant - Delivery:</span> <br/>
                          Users receive a prompt to rate a restaurant after an order is delivered OR User opens the app {'->'} taps on profile icon {'->'} taps on order history {'->'} selects the restaurant they want to review {'->'} taps on ‘review order’ {'->'} rates the restaurant (out of 5 stars) {'->'} adds a detailed reviews (optional) {'->'} taps on ‘add a photo’ and adds a photo (optional) {'->'} Clicks ‘Submit’</p>
                          <p><strong className="text-foreground">Interviewer:</strong> Yes, that is the correct user journey.</p>
                        </div>

                        {/* Tech Issue/Bug */}
                        <div className="space-y-4 bg-background/50 p-6 rounded-lg border border-white/5">
                          <h6 className="font-semibold text-foreground">(b) Tech Issue/Bug</h6>
                          <p><strong className="text-foreground">Me:</strong> Have there been any bugs or issues that were reported, or support tickets raised?</p>
                          <p><strong className="text-foreground">Interviewer:</strong> No significant bugs or issues have been reported recently.</p>

                          <p><strong className="text-foreground">Me:</strong> Can the lower ratings be traced back to specific app versions, or devices (website users vs mobile app users), or mobile operating systems (Android users vs iOS users)?</p>
                          <p><strong className="text-foreground">Interviewer:</strong> No, the ratings drop is consistent across all versions and devices.</p>

                          <p><strong className="text-foreground">Me:</strong> Are the users able to properly view all the UI elements on the rating/review screen?</p>
                          <p><strong className="text-foreground">Interviewer:</strong> Yes, all UI elements are functioning properly.</p>
                        </div>

                        {/* Backend Infrastructure Change */}
                        <div className="space-y-4 bg-background/50 p-6 rounded-lg border border-white/5">
                          <h6 className="font-semibold text-foreground">(c) Backend Infrastructure Change</h6>
                          <p><strong className="text-foreground">Me:</strong> Have there been any backend infrastructure changes, such as server migrations or database updates, that could have caused service interruptions or data loss</p>
                          <p><strong className="text-foreground">Interviewer:</strong> No significant backend changes have been made recently.</p>
                        </div>
                      </div>
                    </div>

                    {/* Operational Changes */}
                    <div>
                      <h5 className="text-lg font-medium text-foreground mb-4 pb-2 border-b border-white/5">Operational Changes</h5>
                      <div className="space-y-4 bg-background/50 p-6 rounded-lg border border-white/5">
                        <p><strong className="text-foreground">Me:</strong> Have there been any operational changes, such as an increase in the number of orders placed on the app or a decrease in the number of delivery executives operating in Pune?</p>
                        <p><strong className="text-foreground">Interviewer:</strong> No significant operational changes have been reported.</p>

                        <p><strong className="text-foreground">Me:</strong> Has there been a decline in the quality of customer service, whether in-person, via the app, or through customer support?</p>
                        <p><strong className="text-foreground">Interviewer:</strong> No decline in customer service quality has been reported.</p>

                        <p><strong className="text-foreground">Me:</strong> Have there been any failures to meet customer expectations regarding delivery times, availability of items, and service quality?</p>
                        <p><strong className="text-foreground">Interviewer:</strong> No significant failures to meet customer expectations have been reported.</p>

                        <p><strong className="text-foreground">Me:</strong> Could the recent retraction of discount codes on deliveries for users without Gold membership, coupled with the new competition in the market have affected customer satisfaction and influenced their ratings?</p>
                        <p><strong className="text-foreground">Interviewer:</strong> It's possible. Offers can have a significant impact on customer satisfaction and their perception of value.</p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Analyze the Causes */}
                <section>
                  <h4 className="text-xl font-semibold text-foreground mb-4">Analyze the Causes:</h4>
                  <div className="space-y-6">
                    <div>
                      <h5 className="font-medium text-foreground mb-2">Retraction of Discount Codes for Non-Gold Users:</h5>
                      <ul className="list-disc pl-5 space-y-2">
                        <li><strong className="text-foreground">Data Analysis:</strong> Examine the usage patterns of discount codes before and after the retraction. Compare the frequency of orders and average ratings from non-Gold users during both periods.</li>
                        <li><strong className="text-foreground">User Feedback:</strong> Review user feedback and complaints regarding the retraction of discount codes. Identify any correlations between negative feedback and lower ratings.</li>
                        <li><strong className="text-foreground">Rating Trends:</strong> Analyze if there is a noticeable decline in ratings from non-Gold users coinciding with the retraction of discount codes.</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-medium text-foreground mb-2">Introduction of New Competitors:</h5>
                      <ul className="list-disc pl-5 space-y-2">
                        <li><strong className="text-foreground">Market Analysis:</strong> Evaluate the market share of new competitors in Pune and a detailed analysis of the services and features offered by new competitors. Identify unique selling points that may attract users away from Zomato. Determine if there has been a significant shift in user base from Zomato the new competitor.</li>
                        <li><strong className="text-foreground">Customer Satisfaction:</strong> Compare the CSAT scores and ratings for Zomato and its new competitors. Look for patterns indicating users' preferences for competitor services.</li>
                        <li><strong className="text-foreground">Promotional Campaigns:</strong> Investigate the promotional strategies and discounts offered by competitors. Assess if they have impacted user expectations and satisfaction with Zomato.</li>
                      </ul>
                    </div>
                  </div>
                </section>

                {/* Plan and Implement Solution(s) */}
                <section>
                  <h4 className="text-xl font-semibold text-foreground mb-4">Plan and Implement Solution(s):</h4>
                  <div className="space-y-6">
                    <div>
                      <h5 className="font-medium text-foreground mb-2">Reintroduce Discount Codes:</h5>
                      <p>Develop a strategy to reintroduce discount codes or alternative incentives for non-Gold users. Communicate the availability of these incentives effectively to regain user trust and satisfaction.</p>
                    </div>
                    <div>
                      <h5 className="font-medium text-foreground mb-2">Competitive Analysis and Enhancement:</h5>
                      <p>Conduct a detailed competitive analysis to identify areas where Zomato can enhance its offerings. Launch targeted promotional campaigns to highlight unique features and advantages of using Zomato. Collaborate with restaurant partners to ensure high service standards and address any operational issues impacting user satisfaction.</p>
                    </div>
                  </div>
                </section>

                {/* Monitor/Analyze */}
                <section>
                  <h4 className="text-xl font-semibold text-foreground mb-4">Monitor/Analyze:</h4>
                  <div className="space-y-6">
                    <div>
                      <h5 className="font-medium text-foreground mb-2">Continuous Monitoring:</h5>
                      <p className="mb-2">Set up real-time monitoring of user ratings and feedback to identify any further issues quickly. Track the effectiveness of reintroduced discount codes and promotional campaigns through the following metrics:</p>
                      <ul className="list-disc pl-5 space-y-2">
                        <li><strong className="text-foreground">Redemption Rate:</strong> The percentage of issued discount codes that are actually used by customers. This measures how appealing and accessible the discount is to users.</li>
                        <li><strong className="text-foreground">Increase in Orders:</strong> The change in the number of orders before and after the introduction of the discount code. This indicates whether the discount code is driving more sales.</li>
                        <li><strong className="text-foreground">Conversion Rate:</strong> The percentage of users who view the discount code and then go on to make a purchase. This helps in understanding the code's ability to convert interest into sales.</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-medium text-foreground mb-2">User Satisfaction Surveys:</h5>
                      <p>Conduct regular user satisfaction surveys to gather insights into user experiences and expectations. Use CSAT scores to make informed adjustments to services and offerings.</p>
                    </div>
                    <div>
                      <h5 className="font-medium text-foreground mb-2">Competitive Benchmarking:</h5>
                      <p>Continuously benchmark Zomato's services against competitors to ensure competitive advantage. Adjust strategies based on market trends and user preferences.</p>
                    </div>
                  </div>
                </section>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
