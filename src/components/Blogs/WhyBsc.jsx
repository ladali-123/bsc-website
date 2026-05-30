import { useMemo } from "react";
import whybsc from "../../assets/whybsc.png";

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
          {/* Title */}
          <div>
            <div className="text-sm text-red-600 font-semibold">{blogData?.date}</div>
            <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-2 leading-tight">
              {blogData?.title}
            </h1>
          </div>

          {/* Image */}
          <div className="w-full">
            <img
              src={blogData?.image}
              alt={blogData?.title}
              className="w-full h-auto rounded-2xl"
            />
          </div>

          {/* Description */}
          <div>
            <p className="text-gray-600 text-lg mt-4 leading-relaxed">{blogData?.description}</p>
            {Array.isArray(blogData?.tags) && blogData.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-5">
                {blogData.tags.map((t) => (
                  <span key={t} className="bg-[#f3f4f6] text-gray-800 px-3 py-1 rounded-full text-sm">
                    {t}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Main Content */}
        {html.text1 && (
          <div className="mt-8 text-gray-800 text-base leading-8" dangerouslySetInnerHTML={{ __html: html.text1 }} />
        )}

        {/* Crux */}
        {html.crux && <div className="mt-8" dangerouslySetInnerHTML={{ __html: html.crux }} />}

        {/* Hook */}
        {blogData?.hookTitle && (
          <div className="mt-10">
            <h2 className="text-2xl font-bold text-gray-900">{blogData.hookTitle}</h2>
            {html.hookText && <div className="mt-4 text-gray-800" dangerouslySetInnerHTML={{ __html: html.hookText }} />}
          </div>
        )}

        {/* Key Points */}
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

        {/* FAQs */}
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

        {/* Conclusion */}
        {html.conclusion && <div className="mt-10" dangerouslySetInnerHTML={{ __html: html.conclusion }} />}
      </div>
    </div>
  );
}

export default function BSCAcademyBlog() {
  const blogData = {
    title: "From Preparation to Selection: How BSC Academy Supports Banking Aspirants",
    description:
      "Every year, millions of young Indians sit for competitive banking exams like IBPS PO, SBI Clerk, RBI Grade B, NABARD, and RRB. The goal is clear: a prestigious, secure, and well-paying government job in the banking sector. But behind this dream lies a harsh reality – less than 1% of aspirants finally make it to the final selection list. Discover how BSC Academy transforms lives with expert guidance and a proven path from preparation to selection.",
    date: "2026-05-30",
    image: whybsc,
    link: "/blog/from-preparation-to-selection-bsc-academy",
    tags: [
      "BSC Academy",
      "Banking Exams",
      "IBPS PO",
      "SBI Clerk",
      "RBI Grade B",
      "NABARD",
      "RRB",
      "Patna",
      "Banking Preparation",
    ],
    text1: `
      <p style="font-size: 1.125rem; line-height: 1.8; margin-bottom: 1.5rem; color: #374151;">
        Every year, millions of young Indians sit for competitive banking exams like IBPS PO, SBI Clerk, RBI Grade B, NABARD, and RRB. The goal is clear: a prestigious, secure, and well-paying government job in the banking sector. But behind this dream lies a harsh reality – less than 1% of aspirants finally make it to the final selection list.
      </p>
      <p style="font-size: 1.125rem; line-height: 1.8; margin-bottom: 1.5rem; color: #374151;">
        Why do so many fail? Because cracking a banking exam is not just about hard work. It demands smart strategy, conceptual clarity, speed, accuracy, and most importantly – expert guidance. Without the right mentor, even the most sincere student can wander lost for years.
      </p>
      <p style="font-size: 1.125rem; line-height: 1.8; margin-bottom: 1.5rem; color: #374151;">
        This is where BSC Academy transforms lives. For over 24 years, BSC Academy has been the trusted launchpad for banking aspirants in Patna and across Bihar. From building your foundation to polishing your interview skills, the academy walks with you every single step – from preparation to selection.
      </p>

      <h2 style="font-size: 1.5rem; font-weight: 700; margin-top: 2rem; margin-bottom: 1rem;">Part 1: Understanding the Battlefield – Banking Exams in India</h2>
      <p style="line-height: 1.9;">Before you start preparing, you must know the exam you are targeting. Banking exams in India generally follow a multi-stage selection process:</p>
      <ul style="padding-left: 1.2rem; line-height: 2;">
        <li><strong>Preliminary Exam (Prelims)</strong> – An objective test consisting of English Language, Quantitative Aptitude, and Reasoning Ability. It's a qualifying round meant to filter candidates.</li>
        <li><strong>Mains Exam (Mains)</strong> – A more advanced objective test that includes General Awareness (with special focus on Banking Awareness), Computer Knowledge, and often a Descriptive Paper (letter/essay writing).</li>
        <li><strong>Interview Round</strong> – A personality test where your communication skills, banking knowledge, and confidence are evaluated.</li>
      </ul>
      <p style="line-height: 1.9;">Different exams have slight variations. For example, RBI Grade B has a separate Phase 2 with Economic & Social Issues. SBI PO Mains has a Data Analysis & Interpretation section. Without a clear roadmap, aspirants often waste months studying the wrong topics or neglecting high-weightage areas.</p>
      <p style="line-height: 1.9;"><strong>How BSC Academy solves this:</strong> From day one, BSC Academy provides a detailed, exam-wise blueprint. Whether you are preparing for IBPS PO 2026, SBI Clerk 2026, or RBI Assistant, the faculty gives you a customised plan. You will know exactly which topics to prioritise, how much time to allocate, and when to switch from learning to practising.</p>

      <h2 style="font-size: 1.5rem; font-weight: 700; margin-top: 2rem; margin-bottom: 1rem;">Part 2: The Right Foundation – Why Most Aspirants Fail at the Start</h2>
      <p style="line-height: 1.9;">One of the biggest mistakes beginners make is jumping directly to advanced level questions. They watch a few YouTube videos, solve a few puzzles, and think they are ready. But when they take a mock test, they score single digits. Why? Because their basics are weak.</p>
      <h3 style="font-size: 1.25rem; font-weight: 600; margin-top: 1.5rem; margin-bottom: 0.75rem;">2.1 Subject-Wise Foundation at BSC Academy</h3>
      <p style="line-height: 1.9;"><strong>Quantitative Aptitude:</strong> This section scares most aspirants. Topics like Data Interpretation (DI), Simplification, Number Series, and Arithmetic require clear concepts. BSC Academy’s expert faculty breaks down every formula with real-life examples. They teach Vedic maths tricks, shortcut methods, and mental calculation techniques that dramatically improve speed.</p>
      <p style="line-height: 1.9;"><strong>Reasoning Ability:</strong> Puzzles, seating arrangements, syllogisms, inequalities, blood relations – these can be extremely time-consuming if not practised correctly. At BSC Academy, students learn pattern recognition and step-by-step solving strategies. The result? What used to take 10 minutes now takes only 3-4 minutes.</p>
      <p style="line-height: 1.9;"><strong>English Language:</strong> For many Hindi-medium students, English is the biggest hurdle. BSC Academy runs special English improvement modules that include daily vocabulary drills, grammar workshops, and newspaper reading sessions. Even students who failed English in school have gone on to score 25+ in banking exams.</p>
      <p style="line-height: 1.9;"><strong>General Awareness & Banking Awareness:</strong> This is the easiest section to score high – if you stay updated. BSC Academy provides monthly current affairs booklets, weekly banking news summaries, and static GK materials. Topics like RBI monetary policy, Basel norms, NPAs, financial inclusion, payment banks, and recent bank mergers are covered in depth.</p>
      <p style="line-height: 1.9;"><strong>Computer Knowledge:</strong> Exams include basic computer questions – hardware, software, MS Office, internet, networking, cybersecurity. BSC Academy’s crisp, exam-focused notes make this section a scoring opportunity.</p>
      <h3 style="font-size: 1.25rem; font-weight: 600; margin-top: 1.5rem; margin-bottom: 0.75rem;">2.2 How BSC Academy Builds Discipline Without Rigid Timetables</h3>
      <p style="line-height: 1.9;">While many institutes force a one-size-fits-all timetable, BSC Academy focuses on milestone-based learning. You are given weekly targets – complete these chapters, solve these practice sets, take these tests. The faculty monitors your progress and adjusts the pace accordingly. This flexible yet disciplined approach prevents burnout and keeps motivation high.</p>

      <h2 style="font-size: 1.5rem; font-weight: 700; margin-top: 2rem; margin-bottom: 1rem;">Part 3: The Power of Mock Tests – Where Selection Is Forged</h2>
      <p style="line-height: 1.9;">Studying without testing is like practicing for a cricket match without ever facing a bowler. Mock tests are not just practice tools – they are the mirror of your preparation.</p>
      <h3 style="font-size: 1.25rem; font-weight: 600; margin-top: 1.5rem; margin-bottom: 0.75rem;">3.1 BSC Academy’s Four-Stage Mock Test System</h3>
      <ul style="padding-left: 1.2rem; line-height: 2;">
        <li><strong>Topic-wise Tests:</strong> After completing each chapter, you take a small test to confirm you’ve understood the concept.</li>
        <li><strong>Sectional Tests:</strong> These focus on entire sections like Reasoning or Quant. They help you identify which subject is pulling your score down.</li>
        <li><strong>Full-Length Prelims & Mains Mocks:</strong> Exactly as per the latest exam pattern, with similar difficulty levels and time limits.</li>
        <li><strong>All-India Ranking:</strong> You get to see where you stand among thousands of aspirants across the country. This builds healthy competition and urgency.</li>
      </ul>
      <h3 style="font-size: 1.25rem; font-weight: 600; margin-top: 1.5rem; margin-bottom: 0.75rem;">3.2 Why Analysis Matters More Than the Test Itself</h3>
      <p style="line-height: 1.9;">Many students take a mock test, see their score, and move on. That is a disaster. At BSC Academy, after every mock test, you sit with a faculty member for detailed performance analysis: which questions took too much time? Which topics had accuracy below 50%? What is the ideal attempt strategy for the next test? This personalised feedback loop turns average students into toppers.</p>
      <h3 style="font-size: 1.25rem; font-weight: 600; margin-top: 1.5rem; margin-bottom: 0.75rem;">3.3 Time Management Strategies Taught at BSC Academy</h3>
      <ul style="padding-left: 1.2rem; line-height: 2;">
        <li>Sectional cut-offs: Never spend more than 20-22 minutes on a single section.</li>
        <li>Easy-first approach: Scan the paper, solve all easy and moderate questions first.</li>
        <li>Negative marking discipline: If you are not 80% sure, skip.</li>
        <li>Breathing & calmness techniques: BSC Academy trains you to stay calm under pressure through timed practice sessions.</li>
      </ul>

      <h2 style="font-size: 1.5rem; font-weight: 700; margin-top: 2rem; margin-bottom: 1rem;">Part 4: From Mains to Interview – The Final Leap</h2>
      <p style="line-height: 1.9;">Clearing the Mains exam is a huge achievement, but the interview round can make or break your final selection. Every year, candidates with high mains scores get rejected because they freeze in front of the panel, fumble on basic banking questions, or fail to express their thoughts clearly.</p>
      <h3 style="font-size: 1.25rem; font-weight: 600; margin-top: 1.5rem; margin-bottom: 0.75rem;">4.1 BSC Academy’s Interview Guidance Programme</h3>
      <ul style="padding-left: 1.2rem; line-height: 2;">
        <li>Mock interview panels comprising former bankers, RBI officers, and experienced HR professionals.</li>
        <li>Personal profile analysis – your strengths, weaknesses, hobbies, academic background, and work experience.</li>
        <li>Current banking awareness drill – likely questions on recent RBI circulars, Union Budget, digital banking, cryptocurrency, NPA management, etc.</li>
        <li>Communication & body language workshops – how to sit, how to speak, how to handle tricky questions, and how to say “I don’t know” confidently.</li>
      </ul>
      <h3 style="font-size: 1.25rem; font-weight: 600; margin-top: 1.5rem; margin-bottom: 0.75rem;">4.2 Sample Interview Questions Practised</h3>
      <ul style="padding-left: 1.2rem; line-height: 2;">
        <li>Why do you want to join the banking sector?</li>
        <li>What is the difference between repo rate and reverse repo rate?</li>
        <li>Explain the concept of Digital India in banking.</li>
        <li>What are the functions of RBI?</li>
        <li>How would you handle an angry senior citizen customer?</li>
      </ul>
      <p style="line-height: 1.9;">Every student who clears Mains is mandatorily enrolled in this interview programme. They go through at least 3-4 mock interviews before facing the real panel. The result? Confidence replaces fear, and selection becomes inevitable.</p>

      <h2 style="font-size: 1.5rem; font-weight: 700; margin-top: 2rem; margin-bottom: 1rem;">Part 5: Why BSC Academy Stands Out – The Real Difference</h2>
      <ul style="padding-left: 1.2rem; line-height: 2;">
        <li><strong>Legacy of 24+ Years:</strong> BSC Academy has been coaching banking aspirants since before online education became trendy. This deep experience allows them to predict trends – which topics will carry more weight this year, which types of puzzles are likely to appear, etc.</li>
        <li><strong>Small Batches, Personal Attention:</strong> Unlike crowded coaching centres with 200 students, BSC Academy limits batch sizes to 50-60 students. This ensures every student’s doubts are heard and solved. A family-like environment where you feel comfortable asking even the most basic questions.</li>
        <li><strong>High-Quality, Updated Study Material:</strong> BSC Academy provides its own printed study material, updated every year. Features include chapter-wise theory with solved examples, 2500+ practice questions per subject, previous year papers (last 10 years) with detailed solutions, 10 full-length mock test booklets for home practice, and monthly current affairs supplements.</li>
        <li><strong>Digital Support for Modern Learners:</strong> In addition to classroom coaching, you get online doubt forums (post a question anytime, get an answer within 24 hours), recorded video lectures, and mobile app access for study notes, quizzes, and current affairs.</li>
        <li><strong>Testimonials from Selected Students:</strong> “I failed twice on my own. After joining BSC Academy, I understood where I was going wrong – poor time management and weak GA. Their mock tests and banking awareness notes changed everything. I cleared IBPS PO in my third attempt.” – Vikash R., IBPS PO 2025. “English was my nightmare. The faculty at BSC Academy gave me special exercises and daily reading targets. In the exam, I scored 28 in English. That was the difference.” – Priya S., SBI Clerk 2025. “The interview preparation at BSC Academy was tougher than the real interview. They grilled me so hard that the actual panel felt easy.” – Ankit K., RRB Officer Scale 1.</li>
      </ul>

      <h2 style="font-size: 1.5rem; font-weight: 700; margin-top: 2rem; margin-bottom: 1rem;">Part 6: Common Mistakes That Kill Selection (And How BSC Academy Fixes Them)</h2>
      <div style="overflow-x:auto;">
        <table style="width:100%; border-collapse:collapse; margin-top:1rem; background:#f9fafb; min-width:700px;">
          <thead>
            <tr style="background:#e5e7eb;">
              <th style="border:1px solid #d1d5db; padding:14px; text-align:left;">Mistake</th>
              <th style="border:1px solid #d1d5db; padding:14px; text-align:left;">Why It's Dangerous</th>
              <th style="border:1px solid #d1d5db; padding:14px; text-align:left;">How BSC Academy Corrects It</th>
            </tr>
          </thead>
          <tbody>
            <tr><td style="border:1px solid #d1d5db; padding:14px;">Ignoring negative marking</td><td style="border:1px solid #d1d5db; padding:14px;">20 correct + 10 wrong = very low score</td><td style="border:1px solid #d1d5db; padding:14px;">Every test includes penalty-based marking</td></tr>
            <tr><td style="border:1px solid #d1d5db; padding:14px;">Skipping mock test analysis</td><td style="border:1px solid #d1d5db; padding:14px;">Same mistakes repeat in the real exam</td><td style="border:1px solid #d1d5db; padding:14px;">Mandatory analysis sheets and faculty review</td></tr>
            <tr><td style="border:1px solid #d1d5db; padding:14px;">Not reading newspapers</td><td style="border:1px solid #d1d5db; padding:14px;">GA section becomes a guessing game</td><td style="border:1px solid #d1d5db; padding:14px;">Daily newspaper summaries and quiz in class</td></tr>
            <tr><td style="border:1px solid #d1d5db; padding:14px;">Overconfidence in strong areas</td><td style="border:1px solid #d1d5db; padding:14px;">Neglect leads to silly mistakes</td><td style="border:1px solid #d1d5db; padding:14px;">Subject-wise performance tracking</td></tr>
            <tr><td style="border:1px solid #d1d5db; padding:14px;">No interview practice</td><td style="border:1px solid #d1d5db; padding:14px;">Mains score gets wasted</td><td style="border:1px solid #d1d5db; padding:14px;">Mandatory mock interviews for all qualifiers</td></tr>
            <tr><td style="border:1px solid #d1d5db; padding:14px;">Hoarding too many books</td><td style="border:1px solid #d1d5db; padding:14px;">Confusion and incomplete syllabus</td><td style="border:1px solid #d1d5db; padding:14px;">Single, focused study material provided</td></tr>
            <tr><td style="border:1px solid #d1d5db; padding:14px;">Watching too many YouTube videos</td><td style="border:1px solid #d1d5db; padding:14px;">Information overload, no structure</td><td style="border:1px solid #d1d5db; padding:14px;">Classroom clarity and fixed curriculum</td></tr>
          </tbody>
        </table>
      </div>

      <h2 style="font-size: 1.5rem; font-weight: 700; margin-top: 2rem; margin-bottom: 1rem;">Part 7: Who Should Join BSC Academy?</h2>
      <p style="line-height: 1.9;">You are an ideal candidate for BSC Academy if:</p>
      <ul style="padding-left: 1.2rem; line-height: 2;">
        <li>✅ You are a beginner with no clue how to start banking preparation.</li>
        <li>✅ You have failed 1-2 attempts and don’t understand why.</li>
        <li>✅ You need a disciplined, competitive environment to stay motivated.</li>
        <li>✅ You want personalised mentorship, not just recorded videos.</li>
        <li>✅ You are serious about getting selected in 2026 or 2027.</li>
      </ul>
      <p style="line-height: 1.9;">Even if you are a working professional or a college student, BSC Academy offers weekend batches and evening batches to suit your schedule.</p>

      <h2 style="font-size: 1.5rem; font-weight: 700; margin-top: 2rem; margin-bottom: 1rem;">Part 9: Final Words – Your Banking Career Starts Now</h2>
      <p style="line-height: 1.9;">Banking exams are not impossible. They are tough – but so are you. Every year, thousands of students from small towns, non-English medium backgrounds, and average academic records crack these exams. They are not superhumans. They simply follow the right strategy, stay consistent, and get the right guidance.</p>
      <p style="line-height: 1.9;">BSC Academy has been that guiding light for over two decades. From teaching you the difference between savings and current account to preparing you for the final interview panel – the academy stands with you at every bend of the road.</p>
      <p style="line-height: 1.9;">So stop waiting. Stop scrolling through endless free PDFs that you never open. Stop watching motivational videos without taking action. The competition is not waiting for you. But with BSC Academy, you can catch up, overtake, and win.</p>
     
      <p style="line-height: 1.9;"><em>Remember: Preparation is common. Selection is special. And with BSC Academy, you don’t just prepare – you get selected.</em></p>
    `,
    crux: `
      <div style="background:#f3f4f6; padding:1.5rem; border-left:4px solid #2563eb; border-radius:12px;">
        <p style="font-size:1.1rem; line-height:1.8; color:#374151;">
          BSC Academy has been the trusted launchpad for banking aspirants in Patna and across Bihar for over 24 years. From building your foundation to polishing your interview skills, the academy walks with you every single step – from preparation to selection. With small batches, four-stage mock tests, interview guidance, and a legacy of success, BSC Academy turns average students into banking officers.
        </p>
      </div>
    `,
    hookTitle: "Why BSC Academy Stands Out – The Real Difference",
    hookText: `
      <p style="font-size:1.1rem; line-height:1.9; color:#374151;">
        BSC Academy combines classroom discipline, expert guidance, regular mock tests, and practical exam strategies to help students crack competitive banking exams efficiently. With 24+ years of experience, small batch sizes for personal attention, high-quality updated study material, and digital support (recorded lectures, doubt forums, mobile app), the academy ensures every aspirant gets the mentorship they need to succeed.
      </p>
    `,
    keyPoints: [
      "<strong>24+ years</strong> of coaching excellence in banking exams",
      "<strong>Small batches</strong> (50-60 students) for personalised attention",
      "<strong>Four-stage mock test system</strong> with all-India ranking and detailed analysis",
      "<strong>Interview guidance programme</strong> with mock panels of former bankers",
      "<strong>High-quality, updated study material</strong> including 2500+ practice questions per subject",
      "<strong>Digital support</strong> – recorded lectures, doubt forums, mobile app access",
    ],
    conclusion: `
      <div style="background:#f8fafc; padding:1.5rem; border-radius:16px;">
        <p style="font-size:1.1rem; line-height:1.9; color:#374151;">
          Banking exams are tough – but with the right strategy, consistency, and expert guidance, selection is absolutely achievable. BSC Academy has proven this for over two decades, helping thousands of students from Patna and across Bihar secure prestigious banking jobs. Your journey from preparation to selection starts here. Don’t wait – take the first step today.
        </p>
        <p style="margin-top:1rem; font-weight:600;">👉 Visit <a href="https://bscacademypatna.com/" style="color:#2563eb;">https://bscacademypatna.com/</a> to begin your banking career.</p>
      </div>
    `,
    faqs: [
      {
        question: "Does BSC Academy provide coaching for all banking exams?",
        answer: "Yes – IBPS PO, IBPS Clerk, SBI PO, SBI Clerk, RBI Assistant, RBI Grade B, NABARD, RRB Officer, and RRB Office Assistant.",
      },
      {
        question: "Is there a hostel facility for outstation students?",
        answer: "Yes. The academy has tie-ups with safe, affordable hostels and paying guest accommodations for boys and girls near the centre.",
      },
      {
        question: "What is the fee structure?",
        answer: "The fee is reasonable and affordable compared to other Patna-based coaching institutes. Visit the official website or call the admission helpline for the latest details.",
      },
      {
        question: "Are classes recorded for revision?",
        answer: "Yes. All important classroom sessions are recorded and shared with students through the BSC Academy app.",
      },
      {
        question: "How many students got selected in the last year?",
        answer: "More than 300 students from BSC Academy cleared various banking exams in 2024-25. Detailed selection lists are displayed at the centre and shared on their website.",
      },
      {
        question: "Does the academy help with exam form filling and centre selection?",
        answer: "Absolutely. Faculty guides you on how to fill forms correctly, avoid common technical errors, and choose exam centres strategically.",
      },
    ],
  };

  return (
    <div>
      <BlogPage blogData={blogData} />
    </div>
  );
}