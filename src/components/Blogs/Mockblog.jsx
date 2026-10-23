import { useMemo } from "react";
import mockblog from "../../assets/mockblog.png";

/* ---------- tiny inline icons (no external deps) ---------- */
const PhoneIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
);
const MailIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="m22 6-10 7L2 6" />
    </svg>
);
const PinIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
        <circle cx="12" cy="10" r="3" />
    </svg>
);

/* ---------- small helpers to keep the rich-text content short ---------- */
const TH = "border:1px solid #d1d5db;padding:0.75rem;text-align:left;";
const TD = "border:1px solid #d1d5db;padding:0.75rem;";
const table = (head, rows) =>
    `<table style="width:100%;border-collapse:collapse;margin:1.5rem 0;background:#f9fafb;"><thead><tr>${head
        .map((h) => `<th style="${TH}">${h}</th>`)
        .join("")}</tr></thead><tbody>${rows
            .map((r) => `<tr>${r.map((c) => `<td style="${TD}">${c}</td>`).join("")}</tr>`)
            .join("")}</tbody></table>`;
const h2 = (t) =>
    `<h2 style="font-size:1.5rem;font-weight:600;margin-top:2rem;margin-bottom:1rem;">${t}</h2>`;
const p = (t) =>
    `<p style="font-size:1.125rem;line-height:1.8;margin-bottom:1.5rem;color:#374151;">${t}</p>`;
const ul = (items) =>
    `<ul style="list-style-type:disc;padding-left:1.5rem;">${items.map((i) => `<li>${i}</li>`).join("")}</ul>`;

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
            <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-[0_10px_40px_-12px_rgba(122,15,22,0.15)] p-6 md:p-12">
                <div className="flex flex-col gap-6">
                    {/* Badge + Date + Title */}
                    <div>
                        <div className="flex items-center gap-3">
                            {blogData?.badge && (
                                <span className="text-[11px] font-semibold tracking-wide uppercase bg-[#7A0F16]/10 text-[#7A0F16] px-3 py-1 rounded-full">
                                    {blogData.badge}
                                </span>
                            )}
                            <span className="text-sm text-gray-500 font-medium">{blogData?.date}</span>
                        </div>
                        <h1 className="text-3xl md:text-[2.5rem] font-extrabold text-gray-900 mt-4 leading-[1.15] tracking-tight">
                            {blogData?.title}
                        </h1>
                    </div>

                    {/* Full image below */}
                    <div className="w-full">
                        {blogData?.image && (
                            <img
                                src={blogData?.image}
                                alt={blogData?.title}
                                className="w-full h-auto rounded-2xl border border-gray-100"
                            />
                        )}
                    </div>

                    {/* Description + Tags below image */}
                    <div>
                        <p className="text-gray-600 text-lg mt-2 leading-relaxed border-l-2 border-[#7A0F16]/30 pl-4">
                            {blogData?.description}
                        </p>

                        {Array.isArray(blogData?.tags) && blogData.tags.length > 0 && (
                            <div className="flex flex-wrap gap-2 mt-6">
                                {blogData.tags.map((t) => (
                                    <span
                                        key={t}
                                        className="bg-[#f3f4f6] text-gray-700 px-3 py-1 rounded-full text-sm border border-gray-200"
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
                        className="mt-10 text-gray-800 text-base leading-8 chsl-rich-content"
                        dangerouslySetInnerHTML={{ __html: html.text1 }}
                    />
                )}

                {html.crux && (
                    <div className="mt-10" dangerouslySetInnerHTML={{ __html: html.crux }} />
                )}

                {blogData?.hookTitle && (
                    <div className="mt-12">
                        <h2 className="text-2xl font-bold text-gray-900 pb-3 border-b border-gray-100">
                            {blogData.hookTitle}
                        </h2>
                        {html.hookText && (
                            <div
                                className="mt-5 text-gray-800 chsl-rich-content"
                                dangerouslySetInnerHTML={{ __html: html.hookText }}
                            />
                        )}
                    </div>
                )}

                {Array.isArray(blogData?.keyPoints) && blogData.keyPoints.length > 0 && (
                    <div className="mt-12">
                        <h3 className="text-xl font-bold text-gray-900">Key Points</h3>
                        <ul className="mt-5 space-y-3">
                            {blogData.keyPoints.map((pt, idx) => (
                                <li
                                    key={idx}
                                    className="flex items-start gap-3 bg-[#faf7f5] border border-[#7A0F16]/10 rounded-2xl p-4 text-gray-800"
                                >
                                    <span className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-[#7A0F16] text-white text-xs flex items-center justify-center font-bold">
                                        ✓
                                    </span>
                                    <span dangerouslySetInnerHTML={{ __html: pt }} />
                                </li>
                            ))}
                        </ul>
                    </div>
                )}

                {Array.isArray(blogData?.faqs) && blogData.faqs.length > 0 && (
                    <div className="mt-12">
                        <h3 className="text-xl font-bold text-gray-900">FAQs</h3>
                        <div className="mt-5 space-y-3">
                            {blogData.faqs.map((f, idx) => (
                                <div key={idx} className="border border-gray-200 rounded-2xl p-5 hover:border-[#7A0F16]/30 transition-colors">
                                    <div className="font-semibold text-gray-900 flex gap-2">
                                        <span className="text-[#7A0F16]">Q.</span>
                                        {f.question}
                                    </div>
                                    <div className="mt-2 text-gray-600 pl-5">{f.answer}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {html.conclusion && (
                    <div className="mt-12" dangerouslySetInnerHTML={{ __html: html.conclusion }} />
                )}

                {/* Contact / Admission CTA Card */}
                {blogData?.contact && (
                    <div className="mt-12 relative overflow-hidden rounded-[1.75rem] bg-[#7A0F16]">
                        <div className="absolute left-0 top-0 h-full w-1.5 bg-[#F4C542]" />

                        <div className="relative px-7 py-9 md:px-12 md:py-12">
                            <span className="inline-block text-[#F4C542] text-xs font-semibold tracking-wide">
                                {blogData.contact.eyebrow}
                            </span>

                            <h3 className="mt-3 text-white text-2xl md:text-[2rem] font-bold leading-snug max-w-xl">
                                {blogData.contact.headline}
                            </h3>

                            <p className="mt-4 text-[#F3D9DA] text-base md:text-lg leading-relaxed max-w-xl">
                                {blogData.contact.message}
                            </p>

                            <div className="mt-8 flex flex-col sm:flex-row sm:items-center gap-4">
                                <a
                                    href={blogData.contact.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center justify-center bg-white text-[#7A0F16] font-semibold px-7 py-3 rounded-full hover:bg-[#F4C542] transition-colors duration-200 w-fit"
                                >
                                    {blogData.contact.buttonText}
                                </a>
                            </div>

                            <p className="mt-8 text-[#F3D9DA]/80 text-sm italic max-w-xl border-t border-white/15 pt-5">
                                {blogData.contact.closingLine}
                            </p>
                        </div>
                    </div>
                )}

                {/* Our Branches */}
                {Array.isArray(blogData?.branches) && blogData.branches.length > 0 && (
                    <div className="mt-6 rounded-[1.75rem] bg-[#1a1a2e] px-7 py-9 md:px-12 md:py-10">
                        <h3 className="text-white text-xl font-bold mb-7">Visit Us at Any of Our Branches</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {blogData.branches.map((b, idx) => (
                                <div key={idx} className={idx !== 0 ? "md:pl-8 md:border-l md:border-white/10" : ""}>
                                    <h4 className="text-white font-semibold text-base mb-4">{b.name}</h4>
                                    <div className="space-y-3 text-sm text-white/80">
                                        <a href={`tel:${b.phone.replace(/\s+/g, "")}`} className="flex items-center gap-2.5 hover:text-white transition-colors">
                                            <span className="text-[#F4C542]"><PhoneIcon /></span>
                                            {b.phone}
                                        </a>
                                        <a href={`mailto:${b.email}`} className="flex items-center gap-2.5 hover:text-white transition-colors break-all">
                                            <span className="text-[#F4C542] flex-shrink-0"><MailIcon /></span>
                                            {b.email}
                                        </a>
                                        <div className="flex items-start gap-2.5">
                                            <span className="text-[#F4C542] flex-shrink-0 mt-0.5"><PinIcon /></span>
                                            <span>{b.address}</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>

            {/* scoped styling for the CMS-style rich text blocks (tables, headings) */}
            <style>{`
        .chsl-rich-content h2 { color: #1f2937; }
        .chsl-rich-content h3 { color: #1f2937; }
        .chsl-rich-content p { text-align: justify; line-height: 1.9; }
        .chsl-rich-content ul li, .chsl-rich-content ol li { text-align: justify; line-height: 1.9; margin-bottom: 0.9rem; }
        .chsl-rich-content ul li:last-child, .chsl-rich-content ol li:last-child { margin-bottom: 0; }
        .chsl-rich-content ul, .chsl-rich-content ol { margin-bottom: 1.75rem; }
        .chsl-rich-content table { border-radius: 0.75rem; overflow: hidden; }
        .chsl-rich-content thead tr { background: #7A0F16 !important; }
        .chsl-rich-content thead th { color: #ffffff !important; border-color: #7A0F16 !important; font-weight: 600; }
        .chsl-rich-content tbody tr:nth-child(even) { background: #faf7f5; }
      `}</style>
        </div>
    );
}

export default function MockBlog() {
    const blogData = {
        badge: "Study Tips",

        title:
            "Studying Alone Won't Crack SSC or Bank Exams: The Revise, Mock Test and Analyse Method That Actually Works",

        description:
            "Reading the syllabus is only the first half of preparation. This guide explains the study, revise, mock test and analysis cycle that helps SSC and bank aspirants turn long study hours into real marks, week after week.",

        date: "23 October 2026",

        image: mockblog,

        link: "/blog/how-to-prepare-revision-mock-test-analysis",

        tags: [
            "Mock Test Analysis",
            "Revision Strategy",
            "SSC Preparation",
            "Bank Exam Preparation",
            "BSC Academy",
            "Patna",
        ],

        text1: `
      ${p("Let's begin with a story you may recognise. A student studies eight or nine hours every day, finishes chapter after chapter, and highlights his books in four different colours. By the end of the month he feels ready, and so does his family. Then comes the first mock test, and the score is nowhere near what he expected.")}
      ${p("\"But I studied everything,\" he says, looking at the result. And he is right, he did. That is exactly the problem, because studying a topic and solving questions on it under a ticking clock are two very different skills.")}
      ${p("Most aspirants spend almost all their time on the first skill and almost none on the second. If this sounds familiar, don't feel discouraged. It is fixable, and this blog explains how: study, revise, test and analyse, repeated in a steady cycle.")}

      ${h2("1. Think of It Like Cricket")}
      <p>Imagine a young cricketer who watches hours of videos on batting technique and can explain a perfect cover drive to anyone. But he never goes to the nets and never faces a real bowler. Will he score runs on match day? Exam preparation works the same way:</p>
      ${ul([
            "<strong>Studying</strong> is watching the technique.",
            "<strong>Revision</strong> is remembering it.",
            "<strong>Mock tests</strong> are the nets, where you face real pressure.",
            "<strong>Analysis</strong> is the coach showing you why you got out.",
        ])}
      <p>If even one of these is missing, your progress slows down, no matter how many hours you put in.</p>

      ${h2("2. Why \"Only Studying\" Stops Working")}
      <p>In the beginning, studying alone does work. When you learn a topic for the first time, reading and understanding is the right thing to do. The trouble starts after the first round, when your scores stop rising and you respond by doing more of the same, one more book or one more video.</p>
      <p>The reason is simple. Our memory is not a hard disk, and anything learnt once fades unless we return to it. A chapter you read two months ago may feel completely new in a test. There is also a trap: a solved example always feels easy because the answer is right in front of you. In the exam hall, nobody shows you the first step.</p>
      ${table(
            ["What Happens", "Why It Hurts You"],
            [
                ["You read a chapter once and move on", "Much of it fades within days"],
                ["You understand the solution when you see it", "You still cannot start the question alone"],
                ["You never practise with a timer", "Your speed collapses in the real exam"],
                ["You avoid your weak topics", "The same marks leak out of every test"],
            ]
        )}

      ${h2("3. The 4-Step Cycle That Actually Works")}
      <p>The fix does not need more study hours. It needs you to spend your hours differently. Think of preparation as a loop with four stages, and keep running it until exam day.</p>
      ${ul([
            "<strong>Step 1: Study a topic properly.</strong> Learn the concept instead of memorising the formula. Solve a few examples, then try questions without looking at the solution. Make short notes in your own words. Finishing three topics well is better than touching ten and retaining none.",
            "<strong>Step 2: Revise on a schedule.</strong> Revision feels less exciting than learning something new, but it is what moves a topic into long-term memory. Look at a topic again the next day, then after three days, a week, and three weeks. Each session can be just twenty or thirty minutes.",
            "<strong>Step 3: Take mock tests regularly.</strong> A mock is not an exam to fear. It is a tool that shows where you stand. Start with topic-wise tests, move to sectional tests, and finally attempt full-length mocks that match the real pattern.",
            "<strong>Step 4: Analyse every test.</strong> Most students skip this step, yet it is the one that actually improves your score. A mock tells you what happened, and the analysis tells you why.",
        ])}

      ${h2("4. How Often Should You Take Mock Tests?")}
      <p>The type of test should follow the stage of your preparation. Early on, short topic-wise quizzes tell you immediately whether you have understood what you just studied. Later, sectional tests build speed, and in the final phase, full-length mocks become the centre of your routine.</p>
      ${table(
            ["Preparation Phase", "What to Do"],
            [
                ["Early phase", "Topic-wise quizzes after each topic"],
                ["Middle phase", "Sectional tests two to three times a week"],
                ["Final phase", "Full-length mocks every week, then more often near the exam"],
            ]
        )}
      <p>Always take tests in exam-like conditions: a fixed time, a quiet place, no phone, no pausing and no peeking at notes. A casual mock gives you a score that looks like data but tells you nothing true.</p>

      ${h2("5. Mock Test Analysis: The Part That Changes Your Score")}
      <p>Attempting a full mock takes about two hours, and a proper analysis should take nearly the same. If you spend ten minutes glancing at the score, you have used only a small part of the test's value. The real learning lives in the mistakes.</p>
      <p>Start by sorting your lost marks. A mark lost because you did not know the concept needs a different fix from one lost because you misread the question. When students lump everything together, they end up studying everything again, which is slow and tiring.</p>
      ${table(
            ["Type of Mistake", "What It Means", "How to Fix It"],
            [
                ["Concept gap", "You did not know the topic", "Relearn it and practise 15 to 20 questions"],
                ["Silly mistake", "You knew it but misread or miscalculated", "Read slowly, underline key words, check options"],
                ["Time problem", "You knew it but took too long", "Practise that question type with a timer"],
                ["Wrong guess", "You guessed and lost marks", "Learn which questions to skip"],
            ]
        )}
      <p>Next, look beyond the wrong answers. Two more groups hide useful information: questions you got right but took too long on, which show where your speed is weak, and questions you skipped, which often point to topics you are quietly avoiding.</p>
      <p>Finally, keep an error log. A notebook or spreadsheet with four columns is enough: topic, question type, reason for the mistake, and the fix. Read it from the top once a week. After a month, patterns appear. Maybe most losses are in percentage questions, or you always run out of time in reading comprehension. A pattern is something you can fix.</p>

      ${h2("6. A Sample Weekly Routine")}
      <p>The routine below is only an example, so adjust it to your schedule. What matters is the rhythm of learning, revising, testing and analysing.</p>
      ${table(
            ["Day", "Focus"],
            [
                ["Monday to Thursday", "New topics, plus short revision of older ones"],
                ["Friday", "Sectional tests on the week's topics"],
                ["Saturday", "One full-length mock in exam conditions"],
                ["Sunday", "Detailed analysis, error log update, revision of weak areas"],
            ]
        )}
      <p>Sunday is not a rest day from studying but a different kind of work. It is the day your week's effort gets converted into learning. Students who protect this slot usually see steady progress.</p>

      ${h2("7. Common Mistakes to Avoid")}
      <p>Over the years we have seen the same habits slow down capable students again and again:</p>
      <ol style="list-style-type:decimal;padding-left:1.5rem;margin:1rem 0;">
        <li><strong>Taking mocks but never analysing them,</strong> like visiting a doctor and never reading the report.</li>
        <li><strong>Chasing a high score</strong> instead of understanding mistakes.</li>
        <li><strong>Changing study material every week,</strong> so no book ever gets finished.</li>
        <li><strong>Looking at the solution too early,</strong> before giving the question a real attempt.</li>
        <li><strong>Comparing your score with friends,</strong> when the only fair comparison is with your own last test.</li>
        <li><strong>Leaving mocks for the last month,</strong> when there is no time left to fix problems.</li>
      </ol>

      ${h2("8. Do Not Get Discouraged by Low Scores")}
      <p>A low score in your first few mocks is completely normal. It does not mean you are not capable or that you chose the wrong exam. It means the mock is doing its job, showing you the gaps while there is still time to fill them.</p>
      <p>What matters is the trend over four to six weeks. If your accuracy is rising, your speed is improving and the same mistakes appear less often in your error log, you are on the right track, even if the total score has not jumped yet.</p>

      <div style="background:#faf7f5;padding:1.1rem 1.25rem;border-radius:0.75rem;margin:1.5rem 0;border-left:3px solid #7A0F16;"><strong style="color:#7A0F16;">Try This Today:</strong> Take your last mock test, ignore the score, and sort every lost mark into the four mistake types above. It takes about an hour and will tell you more than a week of extra reading.</div>
    `,

        crux: `
      <div style="background-color:#faf7f5;padding:1.5rem;border-left:4px solid #7A0F16;border-radius:0.5rem;">
        <p style="font-size:1.125rem;line-height:1.8;margin:0;color:#374151;">
          <strong>Study, revise, test, analyse.</strong> Studying builds knowledge, revision keeps it, mock tests train it under pressure, and analysis turns every mistake into marks. Skip any one step and your score stops moving.
        </p>
      </div>
    `,

        hookTitle: "How BSC Academy Supports This Method",
        hookText: `
      <p style="font-size:1.125rem;line-height:1.9;text-align:justify;margin-bottom:1.75rem;color:#374151;">At BSC Academy, we built our teaching around this exact cycle, because we saw too many hardworking students stall after finishing the syllabus. Our focus is not only on completing topics but on making sure you can apply them under exam conditions.</p>
      <ul style="list-style-type:disc;padding-left:1.5rem;margin:0 0 1.75rem 0;">
        <li style="margin-bottom:1.1rem;line-height:1.9;text-align:justify;color:#374151;"><strong>Structured Classroom Teaching</strong> — Topic-wise classes with a clear plan, so concepts become lasting and not just familiar.</li>
        <li style="margin-bottom:1.1rem;line-height:1.9;text-align:justify;color:#374151;"><strong>Regular Tests and Mock Tests</strong> — Practice that follows real exam patterns, so test day feels familiar.</li>
        <li style="margin-bottom:1.1rem;line-height:1.9;text-align:justify;color:#374151;"><strong>Performance Review</strong> — Help in understanding your mistakes after tests, so your next study session has a purpose.</li>
        <li style="margin-bottom:1.1rem;line-height:1.9;text-align:justify;color:#374151;"><strong>Doubt Support</strong> — Questions get answered quickly, so a small confusion never becomes a lost week.</li>
        <li style="line-height:1.9;text-align:justify;color:#374151;"><strong>Mentorship</strong> — Honest guidance on how to improve your score week after week.</li>
      </ul>
      <p style="font-size:1.125rem;line-height:1.9;text-align:justify;color:#374151;">Want to know why students choose guided preparation over studying alone? Read our blog on why self-study alone often stops working, available in our blog section.</p>
    `,

        keyPoints: [
            "<span style='font-size:1.125rem;line-height:1.8;'><strong>Study is only step one:</strong> revision, mock tests and analysis turn knowledge into marks.</span>",
            "<span style='font-size:1.125rem;line-height:1.8;'><strong>Revise on a schedule:</strong> next day, 3 days, 1 week and 3 weeks.</span>",
            "<span style='font-size:1.125rem;line-height:1.8;'><strong>Analyse every mock:</strong> spend about as long on analysis as on the test itself.</span>",
            "<span style='font-size:1.125rem;line-height:1.8;'><strong>Sort mistakes:</strong> concept gap, silly mistake, time problem or wrong guess, and fix each differently.</span>",
            "<span style='font-size:1.125rem;line-height:1.8;'><strong>Keep an error log:</strong> patterns are fixable, and you only see them when you write them down.</span>",
        ],

        faqs: [
            {
                question: "When should I start giving mock tests?",
                answer:
                    "Begin with topic-wise tests as soon as you finish a topic. There is no need to wait for the whole syllabus to be complete.",
            },
            {
                question: "How many mock tests are enough?",
                answer:
                    "There is no magic number. Five well-analysed tests help more than twenty that you attempted and forgot.",
            },
            {
                question: "How long should I spend analysing a mock test?",
                answer:
                    "About as long as you took to attempt it. The quality of your analysis matters more than the number of tests you take.",
            },
            {
                question: "How often should I revise a topic?",
                answer:
                    "Within a day of learning it, then after a few days, a week and a few weeks. Keep each session short but regular.",
            },
            {
                question: "My mock scores are not improving. What should I do?",
                answer:
                    "Open your error log and look for repeating patterns. If you cannot spot them alone, a mentor can usually find them in two or three of your tests.",
            },
            {
                question: "Is coaching necessary to follow this method?",
                answer:
                    "Not for everyone. But regular testing, honest feedback and doubt solving are hard to arrange alone, which is where many students find coaching helpful.",
            },
        ],

        conclusion: `
      <div style="border-top:2px solid #e5e7eb;padding-top:1.5rem;">
        <p style="font-size:1.125rem;line-height:1.8;margin-bottom:1rem;color:#374151;">
          Somewhere in Patna tonight, two students are sitting with the same book. One will close it and call the day done. The other will pick up yesterday's mock test, find the mistake, and fix it. In a month, they will not be the same student, even though they studied the same hours.
        </p>
        <p style="font-size:1.125rem;line-height:1.8;margin-bottom:1.5rem;color:#374151;">
          Success in a government exam is rarely about being the smartest person in the room. It is about being the one who keeps correcting, keeps improving and keeps showing up when the score is low and the motivation is lower.
        </p>
      </div>
      <div style="background:#7A0F16;border-radius:1rem;padding:1.75rem 1.5rem;margin-top:1rem;border-left:6px solid #F4C542;">
        <p style="font-size:1.35rem;line-height:1.6;margin:0 0 0.75rem 0;color:#ffffff;font-weight:700;">Your next mock test is not a judgement. It is a map.</p>
        <p style="font-size:1.05rem;line-height:1.8;margin:0;color:#F3D9DA;">Every mistake you find today is one mark you will not lose on exam day. Pick up the test, start the analysis, and take the first step. The uniform, the posting and the pride of that selection letter begin with this one honest hour.</p>
      </div>
    `,

        contact: {
            eyebrow: "Admissions Open at BSC Academy Patna",
            headline: "Ready to turn your hard work into marks? Let's build your plan together.",
            message:
                "Talk to our mentors, understand where your marks are leaking, and start a study, revise and mock test routine that fits your exam and your schedule.",
            buttonText: "Contact Us Now",
            link: "https://bscacademypatna.com/contact",
            closingLine: "The best time to fix your preparation is today.",
        },

        branches: [
            {
                name: "Rajendra Nagar - Branch",
                phone: "97984 22292",
                email: "bscacademypatna4@gmail.com",
                address:
                    "Grand Arya Complex, Ground Floor, Behind Kotak Mahindra Bank, Arya Kumar Road, Rajendra Nagar, Patna - 800016",
            },
            {
                name: "Boring Road - Branch",
                phone: "97984 22293",
                email: "bscacademypatna4@gmail.com",
                address:
                    "Shakti Commercial Complex, A 3, West Boring Canal Road, Nearby Bharat Petrol Pump, Patna, Bihar 800001",
            },
            {
                name: "Jagdeo Path - Branch",
                phone: "97984 22296",
                email: "bscacademypatna4@gmail.com",
                address:
                    "Ambedkar Path, opp. Ara Garden, Jagdeo Path, Rukanpura, Patna, Bihar 800014",
            },
        ],
    };

    return (
        <div>
            <BlogPage blogData={blogData} />
        </div>
    );
}