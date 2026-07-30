import { useMemo } from "react";
import cglp from "../../assets/cglp.png";

function BlogPage({ blogData }) {
  const html = useMemo(
    () => ({
      text1: blogData?.text1 || "",
      crux: blogData?.crux || "",
      hookText: blogData?.hookText || "",
      conclusion: blogData?.conclusion || "",
    }),
    [blogData]
  );

  return (
    <div className="w-full bg-[#f4f6fb] py-10 px-5">
      <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-lg p-6 md:p-10">
        <div className="flex flex-col gap-6">
          {/* Title + Date on top */}
          <div>
            <div className="text-sm text-red-600 font-semibold">{blogData?.date}</div>
            <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-2 leading-tight">
              {blogData?.title}
            </h1>
          </div>

          {/* Full image below */}
          <div className="w-full">
            {blogData?.image && (
              <img
                src={blogData?.image}
                alt={blogData?.title}
                className="w-full h-auto rounded-2xl"
              />
            )}
          </div>

          {/* Description + Tags below image */}
          <div>
            <p className="text-gray-600 text-lg mt-4 leading-relaxed">{blogData?.description}</p>

            {Array.isArray(blogData?.tags) && blogData.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-5">
                {blogData.tags.map((t) => (
                  <span
                    key={t}
                    className="bg-[#f3f4f6] text-gray-800 px-3 py-1 rounded-full text-sm"
                  >
                    {t}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>

        {html.text1 && (
          <div
            className="mt-8 text-gray-800 text-base leading-8"
            dangerouslySetInnerHTML={{ __html: html.text1 }}
          />
        )}

        {html.crux && (
          <div className="mt-8" dangerouslySetInnerHTML={{ __html: html.crux }} />
        )}

        {blogData?.hookTitle && (
          <div className="mt-10">
            <h2 className="text-2xl font-bold text-gray-900">{blogData.hookTitle}</h2>
            {html.hookText && (
              <div
                className="mt-4 text-gray-800"
                dangerouslySetInnerHTML={{ __html: html.hookText }}
              />
            )}
          </div>
        )}

        {Array.isArray(blogData?.keyPoints) && blogData.keyPoints.length > 0 && (
          <div className="mt-10">
            <h3 className="text-xl font-bold text-gray-900">Key Points</h3>
            <ul className="mt-4 space-y-3">
              {blogData.keyPoints.map((p, idx) => (
                <li
                  key={idx}
                  className="bg-[#f8fafc] border border-gray-200 rounded-2xl p-4 text-gray-800"
                  dangerouslySetInnerHTML={{ __html: p }}
                />
              ))}
            </ul>
          </div>
        )}

        {Array.isArray(blogData?.faqs) && blogData.faqs.length > 0 && (
          <div className="mt-10">
            <h3 className="text-xl font-bold text-gray-900">FAQs</h3>
            <div className="mt-4 space-y-4">
              {blogData.faqs.map((f, idx) => (
                <div key={idx} className="border border-gray-200 rounded-2xl p-4">
                  <div className="font-semibold text-gray-900">{f.question}</div>
                  <div className="mt-2 text-gray-700">{f.answer}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {html.conclusion && (
          <div className="mt-10" dangerouslySetInnerHTML={{ __html: html.conclusion }} />
        )}
      </div>
    </div>
  );
}

export default function SSCCGL2026PreparationBlog() {
  const blogData = {
    title:
      "SSC CGL 2026 Preparation Strategy: Complete 45-Day Study Plan for Beginners in Patna",

    description:
      "SSC CGL 2026 Tier 1 exam is coming in August-September 2026. Get a simple, day-wise preparation plan, subject-wise tips, and expert guidance from BSC Academy Patna to boost your score.",

    date: "2026-07-25",

    image: cglp,

    link: "/blog/ssc-cgl-2026-preparation-strategy",

    tags: [
      "SSC CGL 2026",
      "SSC Coaching",
      "Exam Preparation",
      "Government Exams",
      "BSC Academy",
      "Patna",
    ],

    text1: `
      <p style="font-size: 1.125rem; line-height: 1.8; margin-bottom: 1.5rem; color: #374151;">
        If you're one of the <strong>28 lakh+ candidates</strong> who applied for SSC CGL 2026, you already know how big this exam is. This year, <strong>12,256 vacancies</strong> are up for grabs across popular posts like Income Tax Inspector, Assistant Audit Officer, and Assistant Section Officer. Naturally, the competition is huge.
      </p>
      <p style="font-size: 1.125rem; line-height: 1.8; margin-bottom: 1.5rem; color: #374151;">
        But here's the good part — the <strong>SSC CGL Tier 1 exam is scheduled for August–September 2026</strong>. That still gives you enough time to prepare properly, as long as you plan it well and stay consistent.
      </p>
      <p style="font-size: 1.125rem; line-height: 1.8; margin-bottom: 1.5rem; color: #374151;">
        At <strong>BSC Academy, Patna</strong>, we have been helping students prepare for SSC and Banking exams for years. In this blog, we are sharing a simple, easy-to-follow plan that our own students use in the final weeks before their exam. No confusing jargon, just practical steps you can start today.
      </p>

      <h2 style="font-size: 1.5rem; font-weight: 600; margin-top: 2rem; margin-bottom: 1rem;">What's New in SSC CGL 2026</h2>
      <p>Before you start preparing, it helps to know what has changed this year:</p>

      <table style="width: 100%; border-collapse: collapse; margin: 1.5rem 0; background: #f9fafb;">
        <thead><tr style="background: #e5e7eb;"><th style="border: 1px solid #d1d5db; padding: 0.75rem; text-align: left;">Change</th><th style="border: 1px solid #d1d5db; padding: 0.75rem; text-align: left;">What It Means for You</th></tr></thead>
        <tbody>
          <tr><td style="border: 1px solid #d1d5db; padding: 0.75rem;">Sectional Timing</td><td style="border: 1px solid #d1d5db; padding: 0.75rem;">Fixed time per section in Tier 1 & Tier 2 — no shifting time between sections</td></tr>
          <tr><td style="border: 1px solid #d1d5db; padding: 0.75rem;">AAO Post Reintroduced</td><td style="border: 1px solid #d1d5db; padding: 0.75rem;">A high-value government role is back after a few years</td></tr>
          <tr><td style="border: 1px solid #d1d5db; padding: 0.75rem;">Tier 2 Now Has 3 Papers</td><td style="border: 1px solid #d1d5db; padding: 0.75rem;">Selection process is a bit more detailed this year</td></tr>
          <tr><td style="border: 1px solid #d1d5db; padding: 0.75rem;">OTR Mandatory</td><td style="border: 1px solid #d1d5db; padding: 0.75rem;">Old OTR IDs won't work — register fresh on the new SSC portal</td></tr>
        </tbody>
      </table>

      <p>Because of sectional timing, just practicing questions is not enough anymore. You also need to practice managing time within each section, not just overall.</p>

      <h2 style="font-size: 1.5rem; font-weight: 600; margin-top: 2rem; margin-bottom: 1rem;">A Simple 45-Day Study Plan for SSC CGL Tier 1</h2>

      <h3 style="font-size: 1.25rem; font-weight: 500; margin-top: 1.5rem;">Week 1–2: Know Where You Stand</h3>
      <p>Don't jump straight into mock tests. First, take one full-length test just to see where you are right now. This will show you your weak topics clearly. Once you know your weak areas, make a simple list and start with those — don't waste time going over things you're already good at.</p>

      <h3 style="font-size: 1.25rem; font-weight: 500; margin-top: 1.5rem;">Week 3–4: Practice Subject by Subject</h3>
      <ul style="list-style-type: disc; padding-left: 1.5rem; margin: 1rem 0;">
        <li><strong>Quantitative Aptitude:</strong> Practice Simplification, Percentage, and Data Interpretation daily. These come up in almost every shift.</li>
        <li><strong>General Intelligence & Reasoning:</strong> Solve Puzzles and Seating Arrangement questions every day.</li>
        <li><strong>English Language:</strong> Practice error-spotting questions instead of just reading grammar rules.</li>
        <li><strong>General Awareness:</strong> Spend 30-45 minutes a day on Static GK and Current Affairs, instead of cramming it all at the end.</li>
      </ul>

      <h3 style="font-size: 1.25rem; font-weight: 500; margin-top: 1.5rem;">Week 5–6: Take Mock Tests and Learn From Them</h3>
      <p>Try to take 3-4 full-length mock tests every week, following the sectional timing. Spend equal time going through your mistakes afterward — a mock test only helps if you learn something from it.</p>

      <h3 style="font-size: 1.25rem; font-weight: 500; margin-top: 1.5rem;">Last Few Days: Revise, Don't Learn New Things</h3>
      <p>In the final 5-7 days before the exam, avoid picking up new topics. Go back to your formula sheets, GK notes, and the list of mistakes you've been noting down from your mock tests.</p>

      <h2 style="font-size: 1.5rem; font-weight: 600; margin-top: 2rem; margin-bottom: 1rem;">Common Mistakes Students Make in the Final Weeks</h2>
      <ol style="list-style-type: decimal; padding-left: 1.5rem; margin: 1rem 0;">
        <li><strong>Changing study material too late</strong> — stick to whatever you've already been practicing from.</li>
        <li><strong>Ignoring sectional timing while practicing</strong> — this is new for 2026, so get used to it before exam day.</li>
        <li><strong>Skipping mock test analysis</strong> — just attempting mocks without reviewing mistakes doesn't help much.</li>
        <li><strong>Starting new topics instead of revising</strong> — new chapters close to the exam usually do more harm than good.</li>
      </ol>
    `,

    crux: `
      <div style="background-color: #f3f4f6; padding: 1.5rem; border-left: 4px solid #2563eb; border-radius: 0.5rem;">
        <p style="font-size: 1.125rem; line-height: 1.8; margin: 0; color: #374151;">
          <strong>BSC Academy Patna</strong> offers expert coaching for SSC CGL and Banking exams. With experienced faculty, daily mock tests, updated study material, and a proven track record, we provide the right guidance to help you crack SSC CGL 2026.
        </p>
      </div>
    `,

    hookTitle: "Who Is This Blog For?",
    hookText: `
      <ul style="list-style-type: disc; padding-left: 1.5rem; margin: 1rem 0;">
        <li>Students who have applied for SSC CGL 2026 and want a clear study plan</li>
        <li>Graduates preparing for their first attempt at a government job</li>
        <li>Working professionals trying to balance a job with exam preparation</li>
        <li>Anyone who has attempted SSC CGL before and wants to improve their score</li>
        <li>First-time aspirants who don't know where to start</li>
      </ul>
      <p style="font-size: 1.125rem; line-height: 1.8;">If you fall into any of these categories — keep reading. This blog is written for you.</p>
    `,

    keyPoints: [
      "<span style='font-size: 1.125rem; line-height: 1.8;'><strong>General Awareness:</strong> Read current affairs daily — it's the easiest section to score well in.</span>",
      "<span style='font-size: 1.125rem; line-height: 1.8;'><strong>Quantitative Aptitude:</strong> Learn shortcut tricks for Percentage, Ratio, and Data Interpretation.</span>",
      "<span style='font-size: 1.125rem; line-height: 1.8;'><strong>Reasoning:</strong> 20-25 minutes of daily puzzle-solving improves speed fast.</span>",
      "<span style='font-size: 1.125rem; line-height: 1.8;'><strong>English:</strong> Practice error-spotting and build vocabulary through daily reading.</span>",
      "<span style='font-size: 1.125rem; line-height: 1.8;'><strong>Success Formula:</strong> Consistency + Sectional Mock Tests + Revision + Expert Guidance.</span>",
    ],

    faqs: [
      {
        question: "When is the SSC CGL 2026 Tier 1 exam?",
        answer:
          "The SSC CGL Tier 1 exam 2026 is tentatively scheduled for August-September 2026, with Tier 2 expected in December 2026.",
      },
      {
        question: "How many vacancies are there in SSC CGL 2026?",
        answer:
          "SSC has announced 12,256 vacancies for various Group B and Group C posts under the SSC CGL 2026 notification.",
      },
      {
        question: "How many hours should I study daily for SSC CGL?",
        answer:
          "A focused 5 to 6 hours of daily study with regular sectional mock tests is more than enough for most aspirants. Consistency over the coming weeks matters more than long hours.",
      },
      {
        question: "What is sectional timing in SSC CGL 2026?",
        answer:
          "Sectional timing means each section in the exam has its own fixed time limit. You can no longer use extra time from one section for another, so practicing with sectional timing before the exam is important.",
      },
      {
        question: "Are there any classes available at BSC Academy for SSC CGL?",
        answer:
          "Yes. BSC Academy Patna offers dedicated SSC CGL batches with daily classes, mock tests, and doubt-clearing sessions. Visit bscacademypatna.com or contact us directly for batch details.",
      },
    ],

    conclusion: `
      <div style="border-top: 2px solid #e5e7eb; padding-top: 1.5rem;">
        <p style="font-size: 1.125rem; line-height: 1.8; margin-bottom: 1rem; color: #374151;">
          <strong>Why Choose BSC Academy for Your SSC CGL Preparation</strong><br/>
          Preparing on your own is possible, but the right guidance can save you a lot of time and confusion — especially with changes like sectional timing this year. At BSC Academy, you get experienced faculty, daily practice sessions built around the latest exam pattern, regular full-length mock tests with detailed analysis, and a strong track record of student selections year after year.
        </p>
        <p style="font-size: 1.125rem; line-height: 1.8; margin-bottom: 1rem; color: #374151;">
          <strong>Admissions Are Open — Your Government Job Is Waiting</strong><br/>
          New batches for SSC CGL 2026 are starting soon. Seats are limited to maintain quality of teaching and personal attention for every student.
        </p>
        <p style="font-size: 1.125rem; line-height: 1.8; margin-bottom: 1rem; color: #374151;">
          SSC CGL 2026 is a big opportunity, but only for those who prepare smartly with the time they have left. Whether you study on your own or with guidance, staying consistent in the coming weeks will matter more than anything you've done so far.
        </p>
        <p style="font-size: 1.125rem; line-height: 1.8; margin-bottom: 1rem; color: #374151;">
          🌐 Website: <a href="https://bscacademypatna.com" target="_blank" style="color: #2563eb;">bscacademypatna.com</a><br/>
          📩 Contact Us: <a href="https://bscacademypatna.com/contact" target="_blank" style="color: #2563eb;">bscacademypatna.com/contact</a>
        </p>
        <p style="font-size: 1.125rem; line-height: 1.8; color: #374151;">
          The right guidance can genuinely speed up your progress. Start today — your future self will thank you.
        </p>
      </div>
    `,
  };

  return (
    <div>
      <BlogPage blogData={blogData} />
    </div>
  );
}