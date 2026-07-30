import { useMemo } from "react";
import rail from "../../assets/rail.png"; // 👉 replace with your actual banner image path

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

export default function BankSSCRailwayExams2026Blog() {
  const blogData = {
    title: "Bank, SSC & Railway Exams 2026: Complete Notification, Exam Date & Preparation Guide",

    description:
      "From SSC CGL to IBPS PO 2026 and Railway admit cards — 2026 is packed with major government exam updates. Here's a complete, exam-wise breakdown of every notification, date, and pattern change, along with why BSC Coaching, Patna is the right place to prepare for all of them.",

    date: "2026-07-13",

    image: rail,

    link: "/blog/bank-ssc-railway-exams-2026-complete-guide",

    tags: [
      "SSC CGL 2026",
      "IBPS PO 2026",
      "RRB NTPC",
      "RRB Group D",
      "IBPS RRB",
      "Bank Exams",
      "Railway Exams",
      "BSC Coaching",
      "Patna",
    ],

    text1: `
      <p style="font-size: 1.125rem; line-height: 1.8; margin-bottom: 1.5rem; color: #374151;">
        If you are preparing for a government job in banking, SSC, or railways, 2026 has already turned out to be a big year. From the SSC CGL notification to the fresh IBPS PO 2026 announcement and Railway admit cards, several major updates have rolled out in the last few weeks.
      </p>
      <p style="font-size: 1.125rem; line-height: 1.8; margin-bottom: 1.5rem; color: #374151;">
        Here is everything you need to know — organized exam-wise — along with why BSC Coaching, Patna is the right place to prepare for all of them.
      </p>

      <h2 style="font-size: 1.5rem; font-weight: 600; margin-top: 2rem; margin-bottom: 1rem;">1. SSC CGL 2026 — Tier 1 Exam Coming Up</h2>
      <p>The Staff Selection Commission has released the SSC CGL 2026 notification for <strong>12,256 vacancies</strong> across Group B and Group C posts in central government departments.</p>
      <ul style="list-style-type: disc; padding-left: 1.5rem; margin: 1rem 0;">
        <li>Application process is over; more than <strong>28 lakh candidates</strong> have applied this year.</li>
        <li><strong>Tier 1 exam:</strong> Expected between August–September 2026</li>
        <li><strong>Tier 2 exam:</strong> Expected in December 2026</li>
        <li><strong>New change:</strong> Sectional timing introduced in Tier 1 — each section now has its own 15-minute limit, and candidates cannot switch between sections mid-way.</li>
        <li><strong>AAO/AAAO posts are back</strong> — pay scale of ₹47,600–₹1,51,100.</li>
        <li>A new <strong>Paper 3 (General Studies – Finance & Economics)</strong> added in Tier 2, exclusively for AAO/AAAO posts.</li>
      </ul>
      <div style="background: #eef2ff; padding: 1rem; border-radius: 0.75rem; margin: 1rem 0;"><strong>What to do now:</strong> Since sectional timing changes speed strategy, mock tests that simulate the new pattern are essential. Focus on time-boxed practice for each section rather than overall paper timing.</div>

      <h2 style="font-size: 1.5rem; font-weight: 600; margin-top: 2rem; margin-bottom: 1rem;">2. IBPS PO 2026 — Apply Online Closes Soon</h2>
      <p>The Institute of Banking Personnel Selection released the <strong>IBPS PO Notification 2026 (CRP PO/MT-XVI)</strong> on 1 July 2026.</p>
      <ul style="list-style-type: disc; padding-left: 1.5rem; margin: 1rem 0;">
        <li><strong>6,715 vacancies</strong> announced — nearly 29% higher than last year.</li>
        <li><strong>Apply online:</strong> 1 July to 21 July 2026</li>
        <li><strong>Prelims:</strong> 22–23 August 2026</li>
        <li><strong>Mains:</strong> 4 October 2026</li>
        <li><strong>Eligibility:</strong> Bachelor's degree, age 20–30 years</li>
      </ul>
      <p><strong>New changes this year:</strong> Personality Test before interview, Descriptive Paper now includes Essay and Comprehension, RBI Circulars added to General Awareness, live photograph capture, DigiLocker-based verification, and a 2-day edit window after applications close.</p>
      <div style="background: #eef2ff; padding: 1rem; border-radius: 0.75rem; margin: 1rem 0;"><strong>What to do now:</strong> With the application deadline approaching fast, complete registration immediately and shift focus to Quant, Reasoning, and English fundamentals for Prelims, which is barely a month away.</div>

      <h2 style="font-size: 1.5rem; font-weight: 600; margin-top: 2rem; margin-bottom: 1rem;">3. SSC Exam Calendar 2026-27 — Plan Your Full Year</h2>
      <p>SSC released its official <strong>Exam Calendar 2026-27</strong> on 10 July 2026, covering notification and exam dates for CGL, CHSL, MTS, GD Constable, CPO, Steno, and JHT.</p>
      <ul style="list-style-type: disc; padding-left: 1.5rem; margin: 1rem 0;">
        <li><strong>SSC CHSL Tier 1:</strong> Expected between July–September 2026</li>
        <li><strong>SSC GD Constable Exam 2027:</strong> Expected January–March 2027</li>
        <li>SSC Selection Post Phase 14, CGL, JHT and Steno notifications already out; CHSL, MTS, and JE expected soon</li>
      </ul>
      <div style="background: #eef2ff; padding: 1rem; border-radius: 0.75rem; margin: 1rem 0;"><strong>Why this matters:</strong> Knowing the full-year calendar in advance lets students plan subject-wise revision and avoid clashes between multiple exam preparations — especially useful for Bank + SSC + Railway combo aspirants.</div>

      <h2 style="font-size: 1.5rem; font-weight: 600; margin-top: 2rem; margin-bottom: 1rem;">4. Railway RRB NTPC & Group D — Admit Cards Out</h2>
      <ul style="list-style-type: disc; padding-left: 1.5rem; margin: 1rem 0;">
        <li><strong>RRB NTPC Graduate CBT 2 Admit Card 2026</strong> released — download from your regional RRB website using registration number and date of birth.</li>
        <li><strong>RRB Group D Exam Date 2026</strong> also announced.</li>
      </ul>
      <div style="background: #eef2ff; padding: 1rem; border-radius: 0.75rem; margin: 1rem 0;"><strong>What to do now:</strong> With CBT 2 approaching for NTPC candidates, focus should shift to previous-year cutoffs, sectional accuracy, and General Awareness revision.</div>

      <h2 style="font-size: 1.5rem; font-weight: 600; margin-top: 2rem; margin-bottom: 1rem;">5. IBPS RRB 2026 — Notification Expected Soon</h2>
      <p>The 15th edition of the IBPS RRB Exam (<strong>CRP RRB XV</strong>) will recruit for PO, Clerk, and Officer Scale II & III posts in Regional Rural Banks.</p>
      <ul style="list-style-type: disc; padding-left: 1.5rem; margin: 1rem 0;">
        <li><strong>Notification:</strong> Expected September–October 2026</li>
        <li><strong>Officer Scale I Prelims:</strong> 21–22 November 2026 (tentative)</li>
        <li><strong>Mains (all scales):</strong> 20 December 2026 (tentative)</li>
        <li>Officer Scale II and III appear for a single-level exam (no prelims) followed by an interview</li>
      </ul>
      <div style="background: #eef2ff; padding: 1rem; border-radius: 0.75rem; margin: 1rem 0;"><strong>What to do now:</strong> Even though the notification hasn't arrived yet, this is the right time to start foundational preparation, since the gap between notification and Prelims tends to be short.</div>
    `,

    crux: `
      <div style="background-color: #f3f4f6; padding: 1.5rem; border-left: 4px solid #2563eb; border-radius: 0.5rem;">
        <p style="font-size: 1.125rem; line-height: 1.8; margin: 0; color: #374151;">
          <strong>BSC Coaching, Patna</strong> tracks every SSC CGL, IBPS PO, RRB NTPC, Group D, and IBPS RRB update so you don't have to. With 25+ years of experience, expert faculty, and updated mock tests, we help you prepare for the exact exam pattern being used in 2026.
        </p>
      </div>
    `,

    hookTitle: "Why BSC Coaching is Perfect for This",
    hookText: `
      <p style="font-size: 1.125rem; line-height: 1.8; margin-bottom: 1rem;">With so many exams, changing patterns, and overlapping timelines, most aspirants don't need five different coaching institutes — they need one that tracks everything for them. That's exactly where BSC Coaching, Patna fits in.</p>
      <ul style="list-style-type: disc; padding-left: 1.5rem; margin: 1rem 0;">
        <li><strong>One coaching, every exam</strong> — SSC, Banking, Railway, Insurance, and MBA entrance prep all under one roof, so you don't waste time or money switching institutes as your target exam changes.</li>
        <li><strong>25+ years of experience</strong> — one of Patna's oldest classroom-based training institutes, with a proven track record across IBPS, SBI, RBI, SSC, Railway, and state government exams.</li>
        <li><strong>Faculty that tracks every pattern change</strong> — from SSC CGL's new sectional timing to IBPS PO's new Personality Test, our teams update the curriculum the moment a notification changes.</li>
        <li><strong>Regular mock tests & full-length tests</strong> built around the latest exam patterns, helping you convert practice into real exam-day speed and accuracy.</li>
        <li><strong>Personalized interview and GD training</strong> for banking posts, plus dedicated GS and current affairs classes for SSC and Railway aspirants.</li>
        <li><strong>3 branches across Patna</strong> — Rajendra Nagar, Boring Road, and Jagdeopath — so quality coaching, doubt-clearing sessions, and mock interviews are always close to home.</li>
      </ul>
      <p style="font-size: 1.125rem; line-height: 1.8;">Whether your target is SSC CGL, IBPS PO, RRB NTPC, or IBPS RRB, BSC Coaching's structured batches and updated study material mean you spend your time preparing — not figuring out what changed this year.</p>
    `,

    keyPoints: [
      "<span style='font-size: 1.125rem; line-height: 1.8;'><strong>SSC CGL 2026:</strong> New sectional timing in Tier 1 — practice with time-boxed mocks.</span>",
      "<span style='font-size: 1.125rem; line-height: 1.8;'><strong>IBPS PO 2026:</strong> Apply before 21 July; new Personality Test and RBI Circulars added.</span>",
      "<span style='font-size: 1.125rem; line-height: 1.8;'><strong>SSC Calendar 2026-27:</strong> Plan your full year across CGL, CHSL, MTS, GD & more.</span>",
      "<span style='font-size: 1.125rem; line-height: 1.8;'><strong>Railway:</strong> RRB NTPC CBT 2 admit card and RRB Group D exam date are out.</span>",
      "<span style='font-size: 1.125rem; line-height: 1.8;'><strong>IBPS RRB 2026:</strong> Notification expected Sep–Oct; start foundational prep now.</span>",
    ],

    faqs: [
      {
        question: "Which exam should I focus on first — SSC CGL, IBPS PO, or Railway?",
        answer:
          "It depends on your eligibility and exam dates. IBPS PO 2026 has the nearest deadline (21 July) and Prelims (22–23 August), so if you're eligible, prioritize that first while continuing SSC/Railway prep in parallel.",
      },
      {
        question: "Has the SSC CGL 2026 exam date been announced?",
        answer:
          "The Tier 1 exam is tentatively expected between August and September 2026, with Tier 2 in December 2026. Exact dates will be released via admit cards closer to the exam.",
      },
      {
        question: "When will the IBPS RRB 2026 notification be released?",
        answer:
          "The IBPS RRB 2026 (CRP RRB XV) notification is expected in September–October 2026, with Prelims tentatively scheduled for 21–22 November and Mains for 20 December 2026.",
      },
      {
        question: "Can I prepare for Bank, SSC, and Railway exams together?",
        answer:
          "Yes — these exams share a large common syllabus (Reasoning, Quant, English, General Awareness). BSC Coaching's Master Course is specifically designed to help you prepare for multiple exams simultaneously.",
      },
      {
        question: "Does BSC Coaching offer a free demo class?",
        answer:
          "Yes, all three branches — Rajendra Nagar, Boring Road, and Jagdeopath — offer free demo classes. Contact your nearest branch to book a slot.",
      },
    ],

    conclusion: `
      <div style="border-top: 2px solid #e5e7eb; padding-top: 1.5rem;">
        <h3 style="font-size: 1.25rem; font-weight: 700; margin-bottom: 1rem; color: #111827;">Contact Us — Visit Your Nearest Branch</h3>
        <p style="font-size: 1.125rem; line-height: 1.8; margin-bottom: 0.5rem; color: #374151;">
          📍 <strong>Rajendra Nagar:</strong> 208, Arya K. Road, Opp. Canara Bank ATM, Patna – 800016 | 📞 0612-2683671 / 9334832722
        </p>
        <p style="font-size: 1.125rem; line-height: 1.8; margin-bottom: 0.5rem; color: #374151;">
          📍 <strong>Boring Road:</strong> Maa Sharde Complex, East Boring Canal Road, Patna – 800001 | 📞 9835789252
        </p>
        <p style="font-size: 1.125rem; line-height: 1.8; margin-bottom: 1rem; color: #374151;">
          📍 <strong>Jagdeopath:</strong> Opp. Ara Garden, Ambedkar Path, Patna | 📞 9334843545 | 
        </p>
        <p style="font-size: 1.125rem; line-height: 1.8; margin-bottom: 1rem; color: #374151;">
          📷 Follow us: <a href="https://www.instagram.com/bscacademy.patna/" target="_blank" style="color: #2563eb;">@bsccoachingpatna</a>
        </p>
        <p style="font-size: 1.125rem; line-height: 1.8; color: #374151;">
          Book your <strong>free demo class</strong> today at your nearest branch and take the first step
           toward cracking your Bank, SSC, or Railway exam in 2026!
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