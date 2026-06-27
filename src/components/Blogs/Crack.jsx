import { useMemo } from "react";
import best from "../../assets/best.png";

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
            <img
              src={blogData?.image}
              alt={blogData?.title}
              className="w-full h-auto rounded-2xl"
            />
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

export default function BSCAcademyPatnaBlog() {
  const blogData = {
    title:
      "Why BSC Academy Patna Is the Best Choice to Crack Your Government Job in 2026",

    description:
      "Every year, lakhs of students in Bihar prepare for SSC, Banking, and Railways exams. BSC Academy Patna has been the trusted name for over 24 years, helping students crack government exams with expert faculty, mock tests, and a proven system.",

    date: "2026-06-27",

    image: best,

    link: "/blog/why-bsc-academy-patna-best-choice-for-government-job-2026",

    tags: [
      "BSC Academy Patna",
      "Government Jobs",
      "SSC Coaching",
      "Banking Exams",
      "Railway Exams",
      "Patna Coaching",
      "Bihar",
      "Competitive Exams",
    ],

    text1: `
      <p style="font-size: 1.125rem; line-height: 1.8; margin-bottom: 1.5rem; color: #374151;">
        Every year, lakhs of students in Bihar open their books with one dream – to get a government job. 
        A job in SSC, Banking, or Railways means respect, security, and a bright future. But the path is not easy. 
        The competition is tough. The syllabus is huge. And many students feel lost.
      </p>

      <p style="font-size: 1.125rem; line-height: 1.8; margin-bottom: 1.5rem; color: #374151;">
        That is where <strong>BSC Academy Patna</strong> comes in. For over 24 years, we have been helping students 
        turn their dreams into reality. But what makes us different? Why are we the best choice for you? Let me tell you.
      </p>

      <h2 style="font-size: 1.5rem; font-weight: 600; margin-top: 2rem; margin-bottom: 1rem; color: #1f2937;">
        1. 24+ Years of Trust – We Know What Works
      </h2>

      <p style="font-size: 1.125rem; line-height: 1.8; margin-bottom: 1.5rem; color: #374151;">
        We have been teaching students for more than two decades. That is not a small thing. In 24 years, 
        we have seen every type of exam, every pattern change, and every mistake students make. 
        We know exactly what works and what does not.
      </p>

      <p style="font-size: 1.125rem; line-height: 1.8; margin-bottom: 1.5rem; color: #374151;">
        When you join BSC Academy, you are not joining a new institute that is still learning. 
        You are joining a place that has already guided thousands of successful students to their government jobs. 
        We have done this again and again. And we can do it for you too.
      </p>

      <h2 style="font-size: 1.5rem; font-weight: 600; margin-top: 2rem; margin-bottom: 1rem; color: #1f2937;">
        2. Expert Faculty – Learn from the Best Teachers
      </h2>

      <p style="font-size: 1.125rem; line-height: 1.8; margin-bottom: 1.5rem; color: #374151;">
        Good teachers change everything. At BSC Academy, we have a team of expert faculty members who know their 
        subjects inside out. They do not just teach you formulas and facts. They teach you how to think, 
        how to solve questions fast, and how to avoid silly mistakes.
      </p>

      <p style="font-size: 1.125rem; line-height: 1.8; margin-bottom: 1.5rem; color: #374151;">
        Our teachers for Reasoning, Quantitative Aptitude, English, and Banking Awareness are all specialists. 
        They break down tough topics into simple lessons. They are always there to clear your doubts. 
        You never feel alone in your preparation.
      </p>

      <h2 style="font-size: 1.5rem; font-weight: 600; margin-top: 2rem; margin-bottom: 1rem; color: #1f2937;">
        3. Complete Courses for All Government Exams
      </h2>

      <p style="font-size: 1.125rem; line-height: 1.8; margin-bottom: 0.5rem; color: #374151;">
        We do not just teach one exam. We cover everything:
      </p>

      <ul style="list-style-type: disc; padding-left: 1.5rem; margin-bottom: 1.5rem; color: #374151; font-size: 1.125rem; line-height: 1.8;">
        <li><strong>SSC Coaching</strong> – Full preparation for CGL, CHSL, MTS, GD and other SSC exams</li>
        <li><strong>Banking Exams</strong> – Expert coaching for IBPS PO, Clerk, SBI, RBI and more</li>
        <li><strong>Railway Exams</strong> – Specialized training for RRB NTPC, Group D and railway recruitment</li>
        <li><strong>Other Exams</strong> – Preparation for Bihar Police, Teaching, State Level and other government job exams</li>
      </ul>

      <p style="font-size: 1.125rem; line-height: 1.8; margin-bottom: 1.5rem; color: #374151;">
        Whatever exam you are targeting, we have a course for you. You do not need to go anywhere else.
      </p>

      <h2 style="font-size: 1.5rem; font-weight: 600; margin-top: 2rem; margin-bottom: 1rem; color: #1f2937;">
        4. Real Practice with PYQs and Mock Tests
      </h2>

      <p style="font-size: 1.125rem; line-height: 1.8; margin-bottom: 1.5rem; color: #374151;">
        Theory is not enough. You need practice. Real practice. That is why we focus heavily on:
      </p>

      <ul style="list-style-type: disc; padding-left: 1.5rem; margin-bottom: 1.5rem; color: #374151; font-size: 1.125rem; line-height: 1.8;">
        <li><strong>Previous Year Questions (PYQ)</strong> – We make you solve real exam questions from past years</li>
        <li><strong>Mock Tests</strong> – We conduct regular mock tests that feel exactly like the real exam</li>
      </ul>

      <p style="font-size: 1.125rem; line-height: 1.8; margin-bottom: 1.5rem; color: #374151;">
        These tests do two things. First, they show you your weak areas. Second, they build your confidence. 
        When you sit in the real exam hall, you will not feel nervous. You will feel prepared. 
        Because you have already done it many times before.
      </p>

      <p style="font-size: 1.125rem; line-height: 1.8; margin-bottom: 1.5rem; color: #374151; font-style: italic;">
        As one of our students, Aman Raj, said: <em>"Reasoning and quantitative classes are very helpful. 
        Mock tests improved my confidence a lot."</em>
      </p>

      <h2 style="font-size: 1.5rem; font-weight: 600; margin-top: 2rem; margin-bottom: 1rem; color: #1f2937;">
        5. Discipline – The Secret to Success
      </h2>

      <p style="font-size: 1.125rem; line-height: 1.8; margin-bottom: 1.5rem; color: #374151;">
        Most students know what to study. But they do not know how to stay consistent. That is where we help the most.
      </p>

      <p style="font-size: 1.125rem; line-height: 1.8; margin-bottom: 1.5rem; color: #374151;">
        At BSC Academy, we build daily routines for our students. We teach you discipline. We teach you to show up 
        every day, even when you do not feel like it. Because that is what separates successful candidates from the rest.
      </p>

      <p style="font-size: 1.125rem; line-height: 1.8; margin-bottom: 1.5rem; color: #374151;">
        Every year, thousands of students prepare for government exams, but only a few succeed. 
        The difference is consistency. And we help you build that consistency.
      </p>

      <h2 style="font-size: 1.5rem; font-weight: 600; margin-top: 2rem; margin-bottom: 1rem; color: #1f2937;">
        6. A Supportive Environment
      </h2>

      <p style="font-size: 1.125rem; line-height: 1.8; margin-bottom: 1.5rem; color: #374151;">
        Preparing for government exams can be lonely. But at BSC Academy, you are never alone. 
        You are surrounded by other serious aspirants who share the same goal. You motivate each other. 
        You learn together. You grow together.
      </p>

      <p style="font-size: 1.125rem; line-height: 1.8; margin-bottom: 1.5rem; color: #374151; font-style: italic;">
        Our students love the study environment and the guidance they receive. Sneha Singh, one of our SSC students, said: 
        <em>"Best coaching institute in Patna for Banking and SSC preparation. Faculty support is excellent."</em>
      </p>

      <h2 style="font-size: 1.5rem; font-weight: 600; margin-top: 2rem; margin-bottom: 1rem; color: #1f2937;">
        How to Crack Your Government Job – Our Simple Formula
      </h2>

      <p style="font-size: 1.125rem; line-height: 1.8; margin-bottom: 1.5rem; color: #374151;">
        Now let me share the simple formula we use to help students crack their exams:
      </p>

      <ol style="list-style-type: decimal; padding-left: 1.5rem; margin-bottom: 1.5rem; color: #374151; font-size: 1.125rem; line-height: 1.8;">
        <li><strong>Step 1: Know the Syllabus</strong> – We give you a clear map of what to study. No confusion. No wasting time on unimportant topics.</li>
        <li><strong>Step 2: Learn from Experts</strong> – Our teachers explain every topic in simple language. No hard English. No complicated jargon. Just clear, easy-to-understand lessons.</li>
        <li><strong>Step 3: Practice Every Day</strong> – You solve questions daily. You take mock tests weekly. You review your mistakes and improve.</li>
        <li><strong>Step 4: Stay Consistent</strong> – We help you build a daily routine. You study a little every day. You do not take long breaks. You keep moving forward.</li>
        <li><strong>Step 5: Believe in Yourself</strong> – We motivate you. We remind you why you started. We help you stay positive even on tough days.</li>
      </ol>

      <p style="font-size: 1.125rem; line-height: 1.8; margin-bottom: 1.5rem; color: #374151;">
        Follow this formula, and success will come.
      </p>

      <h2 style="font-size: 1.5rem; font-weight: 600; margin-top: 2rem; margin-bottom: 1rem; color: #1f2937;">
        What Our Students Say
      </h2>

      <p style="font-size: 1.125rem; line-height: 1.8; margin-bottom: 1.5rem; color: #374151;">
        Do not just trust our words. Trust our students:
      </p>

      <blockquote style="border-left: 4px solid #2563eb; padding-left: 1.5rem; margin-bottom: 1.5rem; color: #374151; font-size: 1.125rem; line-height: 1.8; background: #f9fafb; padding: 1rem 1.5rem; border-radius: 0.5rem;">
        <em>"BSC Academy is one of the best institutes for SSC and Banking preparation. Classes are very disciplined and helpful."</em> – Rahul Kumar, Banking Aspirant
      </blockquote>

      <blockquote style="border-left: 4px solid #2563eb; padding-left: 1.5rem; margin-bottom: 1.5rem; color: #374151; font-size: 1.125rem; line-height: 1.8; background: #f9fafb; padding: 1rem 1.5rem; border-radius: 0.5rem;">
        <em>"Highly recommended for SSC, Banking and Railway exams. Great study environment and guidance."</em> – Priya Kumari, Government Exam Student
      </blockquote>

      <p style="font-size: 1.125rem; line-height: 1.8; margin-bottom: 1.5rem; color: #374151;">
        These are real students who walked the same path you are walking today. They trusted us. And they succeeded.
      </p>

      <h2 style="font-size: 1.5rem; font-weight: 600; margin-top: 2rem; margin-bottom: 1rem; color: #1f2937;">
        Your Turn Starts Now
      </h2>

      <p style="font-size: 1.125rem; line-height: 1.8; margin-bottom: 1.5rem; color: #374151;">
        You have the dream. You have the desire. Now you need the right guidance.
      </p>

      <p style="font-size: 1.125rem; line-height: 1.8; margin-bottom: 1.5rem; color: #374151;">
        BSC Academy Patna has been the trusted name in Patna for 24 years. We have the experience, the teachers, 
        the courses, and the proven system to help you crack your exam.
      </p>

      <p style="font-size: 1.125rem; line-height: 1.8; margin-bottom: 1.5rem; color: #374151;">
        Do not wait. Do not waste another day feeling lost. Join BSC Academy and take the first step toward your government job.
      </p>

      <p style="font-size: 1.125rem; line-height: 1.8; margin-bottom: 1.5rem; color: #374151; font-weight: 600;">
        Because your dream job is not far. It is just one right decision away.
      </p>

      <p style="font-size: 1.125rem; line-height: 1.8; margin-bottom: 1.5rem; color: #374151;">
        <strong>Ready to start?</strong> Visit us at 
        <a href="https://bscacademypatna.com/" target="_blank" style="color: #2563eb; text-decoration: underline;"> https://bscacademypatna.com/</a> 
        or fill the form on our website to get connected.
      </p>
    `,

    crux: `
      <p style="font-size: 1.125rem; line-height: 1.8; margin-bottom: 1.5rem; color: #374151; background-color: #f3f4f6; padding: 1.5rem; border-left: 4px solid #2563eb; border-radius: 0.5rem;">
        <strong>
          BSC Academy Patna has been the trusted name for government exam preparation for over 24 years. 
          With expert faculty, complete courses for SSC, Banking & Railways, real practice with PYQs & mock tests, 
          and a disciplined learning environment, we have helped thousands of students crack their dream government jobs.
        </strong>
      </p>
    `,

    hookTitle: "Why BSC Academy Patna Is the Best Choice for Government Job Preparation",

    hookText: `
      <p style="font-size: 1.125rem; line-height: 1.8; margin-bottom: 1.5rem; color: #374151;">
        From experienced faculty and complete course coverage to regular mock tests and a supportive environment, 
        BSC Academy Patna provides everything students need to crack SSC, Banking, Railways, and other government exams.
      </p>
    `,

    keyPoints: [
      "<span style='font-size: 1.125rem; line-height: 1.8;'>24+ years of experience in government exam preparation</span>",

      "<span style='font-size: 1.125rem; line-height: 1.8;'>Expert faculty for Reasoning, Quantitative Aptitude, English & Banking Awareness</span>",

      "<span style='font-size: 1.125rem; line-height: 1.8;'>Complete courses for SSC, Banking, Railways & other government exams</span>",

      "<span style='font-size: 1.125rem; line-height: 1.8;'>Real practice with Previous Year Questions (PYQ) and regular mock tests</span>",

      "<span style='font-size: 1.125rem; line-height: 1.8;'>Disciplined environment that builds consistency and daily routines</span>",

      "<span style='font-size: 1.125rem; line-height: 1.8;'>Supportive community of serious aspirants</span>",

      "<span style='font-size: 1.125rem; line-height: 1.8;'>Proven track record of successful students</span>",
    ],

    conclusion: `
      <p style="font-size: 1.125rem; line-height: 1.8; margin-bottom: 1.5rem; color: #374151;">
        Cracking a government job in 2026 is not just about hard work. It is about smart work, the right guidance, 
        and staying consistent. BSC Academy Patna gives you all of that.
      </p>

      <p style="font-size: 1.125rem; line-height: 1.8; margin-bottom: 1.5rem; color: #374151;">
        With 24 years of experience, expert teachers, complete courses, real practice, and a disciplined environment, 
        we are the partner you need on your journey to success.
      </p>

      <p style="font-size: 1.125rem; line-height: 1.8; margin-bottom: 1.5rem; color: #374151; font-weight: 600;">
        Your dream government job is waiting. Take the first step today with BSC Academy Patna.
      </p>

      <p style="font-size: 1.125rem; line-height: 1.8; margin-bottom: 1.5rem; color: #374151;">
        <strong>Visit:</strong> <a href="https://bscacademypatna.com/" target="_blank" style="color: #2563eb; text-decoration: underline;">https://bscacademypatna.com/</a>
      </p>

     
    `,

    faqs: [
      {
        question: "Which exams does BSC Academy Patna prepare students for?",
        answer:
          "BSC Academy Patna offers complete courses for SSC (CGL, CHSL, MTS, GD), Banking (IBPS PO, Clerk, SBI, RBI), Railways (RRB NTPC, Group D), and other government exams like Bihar Police, Teaching, and State Level exams.",
      },

      {
        question: "How long has BSC Academy Patna been in the coaching industry?",
        answer:
          "BSC Academy Patna has been helping students crack competitive exams for over 24 years, making it one of the most trusted coaching institutes in Patna.",
      },

      {
        question: "Does BSC Academy provide mock tests and practice material?",
        answer:
          "Yes, BSC Academy conducts regular online and offline mock tests and provides extensive practice material including Previous Year Questions (PYQ) to help students build confidence and improve their performance.",
      },

      {
        question: "What makes BSC Academy different from other coaching institutes in Patna?",
        answer:
          "BSC Academy stands out because of its 24+ years of experience, expert faculty, disciplined study environment, complete course coverage for multiple exams, and a proven track record of student success.",
      },

      {
        question: "Can I join BSC Academy if I am a beginner?",
        answer:
          "Absolutely. BSC Academy provides preparation from basic to advanced level. Our faculty breaks down tough topics into simple lessons, making it easy for beginners to understand and progress.",
      },

      {
        question: "Where is BSC Academy Patna located?",
        answer:
          "BSC Academy Patna is located opposite AN College Main Gate, Boring Road, Patna. You can also visit our website at https://bscacademypatna.com/ for more details.",
      },
    ],
  };

  return (
    <div>
      <BlogPage blogData={blogData} />
    </div>
  );
}