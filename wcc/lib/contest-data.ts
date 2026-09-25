export interface EditionData {
  badge: string;
  title: string;
  desc: string;
  stats: { label: string; value: string }[];
  points: string[];
}

export const EDITIONS_DATA: Record<number, EditionData> = {
  6: {
    badge: "Active National Edition • 2026",
    title: "Winter Coding Contest 6.0",
    desc: "Expanding further with official HackerRank proctored arena infrastructure and nationwide outreach on Unstop. Introducing rigorous problem categorization from linear DP to combinatorial game theory and algorithmic graph decomposition.",
    stats: [
      { label: "Expected Coders", value: "6,000+" },
      { label: "Reach & Impressions", value: "90,000+" },
      { label: "Prize Pool", value: "₹50,000+" },
    ],
    points: [
      "Round 1 entry is 100% free for all verified students nationwide.",
      "150+ Shortlisted coders invited for full-day on-campus marathon in Hyderabad.",
      "Automated anti-plagiarism verification run with customized structural ast-checkers.",
    ],
  },
  5: {
    badge: "Pan-India Milestone • 2025",
    title: "Winter Coding Contest 5.0",
    desc: "Crossed 4,791 registered participants representing 500+ colleges nationwide. Concluded with 133 on-campus finalists competing at the VNRVJIET advanced labs with 90,000+ digital impressions recorded.",
    stats: [
      { label: "Registered Coders", value: "4,791" },
      { label: "Colleges Represented", value: "500+" },
      { label: "Finalists Hosted", value: "133" },
    ],
    points: [
      "National participation with students from over 15 Indian states.",
      "₹50,000 verified cash prize pool disbursed to podium finishers.",
      "Felicitation led by Department of Information Technology faculty and leadership.",
    ],
  },
  4: {
    badge: "Exponential Surge • 2024",
    title: "Winter Coding Contest 4.0",
    desc: "Attracted 4,105 coders from 200+ universities. 131 finalists made it through rigorous proctored preliminary testing to battle in the Hyderabad on-site finals.",
    stats: [
      { label: "Registered Coders", value: "4,105" },
      { label: "Colleges Represented", value: "200+" },
      { label: "Finalists Hosted", value: "131" },
    ],
    points: [
      "69,000+ Verified views and impressions recorded on Unstop platform.",
      "Advanced problem curation across competitive programming tracks.",
      "₹50,000 prize distribution to champion squads.",
    ],
  },
  3: {
    badge: "National Expansion • 2023",
    title: "Winter Coding Contest 3.0",
    desc: "Marked WCC's formal elevation to the national calendar with 2,746 participants and 50 finalist teams battling in high-intensity problem rounds.",
    stats: [
      { label: "Participants", value: "2,746" },
      { label: "Finalist Teams", value: "50" },
      { label: "Prize Pool", value: "₹50,000" },
    ],
    points: [
      "Over 54,000 impressions on discovery platforms.",
      "Established the hallmark two-round format: Online Qualifier into Campus Finale.",
      "Industry sponsorship backed by regional technology accelerators.",
    ],
  },
  2: {
    badge: "First Inter-Collegiate Edition • 2022",
    title: "Winter Coding Contest 2.0",
    desc: "Expanded outside VNRVJIET to engage 3,100+ coders across 130+ engineering institutions. 132 finalists competed on campus for a ₹42,000 prize pool.",
    stats: [
      { label: "Registrations", value: "3,100+" },
      { label: "Institutes", value: "130+" },
      { label: "Prize Pool", value: "₹42,000" },
    ],
    points: [
      "First edition opening doors to external colleges across Telangana and AP.",
      "Conducted on HackerRank with custom problem setters from ACM VNRVJIET.",
      "Established the physical coding marathon tradition in Hyderabad.",
    ],
  },
  1: {
    badge: "Inaugural Foundation • 2021",
    title: "Winter Coding Contest 1.0",
    desc: "The genesis edition launched strictly as an internal challenge for second-year IT and CS students at VNRVJIET to foster competitive coding culture and algorithmic readiness.",
    stats: [
      { label: "Scope", value: "Institutional" },
      { label: "Target", value: "2nd Year IT" },
      { label: "Participation", value: "100% Dept" },
    ],
    points: [
      "Founded by ACM VNRVJIET Student Chapter core committee.",
      "Created the foundation for intra-collegiate algorithmic challenges.",
      "Seed for what grew into one of Telangana's premier coding arenas.",
    ],
  },
};

export const FAQ_ITEMS = [
  {
    q: "Is Round 1 really 100% free of charge?",
    a: "Yes. Registration and participation in Round 1 (Online Qualifier) is completely free of cost for all student participants across India. There are no hidden charges or fees.",
  },
  {
    q: "What is the permissible team composition?",
    a: "Teams can consist of either a single individual (Solo) or a pair of two coders (Duo). Both team members must be enrolled students in an accredited degree program (B.Tech, BE, BCA, MCA, M.Tech, etc.).",
  },
  {
    q: "Which programming languages are supported on HackerRank?",
    a: "Standard modern languages supported by HackerRank are permitted, including C++ (GCC 17/20), Java (Java 17/21), Python (Python 3.x), and C. Standard Template Library (STL) and equivalent standard data structure libraries are fully permitted.",
  },
  {
    q: "Where and when will Round 2 be held?",
    a: "Round 2 will be held physically on Sunday, October 11, 2026, at the state-of-the-art Computer Science & IT Laboratories at the VNRVJIET campus in Bachupally, Hyderabad. Complete reporting guidelines and campus transit instructions will be shared with the 150+ shortlisted qualifiers.",
  },
];

export const GALLERY_SLIDES = [
  {
    title: "National Winners Felicitation & On-Stage Honors",
    tag: "WCC 5.0 Grand Finale",
    desc: "Distinguished faculty, HOD Information Technology, and industry leaders awarding certificates and prizes to national top coders.",
    location: "Archival Record • KS Auditorium",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuARG1v3sO1ErE1idjJM9ugt4WSEjSZB15WoPj2k_m7d088iiFaIJl4GU45IW_QAEeJOHZSX-a_wiiXIsgKlt_ML7Ewd6JxfrazuiOJxbd4PAOYjgZfPRZ7Fy_ESq_CH3qB1rOSLOU1kESo1Gq98R3T3ZCKIpOHHHV5yTJT6_T20P3kRzOFF7EXajlShBdF3RUn81JrysxuY-IOU7Gjhc0eqZSMTE8c_8x0Er6ARWYXvKKQBtWPW7xRIyrC-if_KeMRaeA4",
  },
  {
    title: "In-Person Finalist Coding Arena & Core Committee",
    tag: "WCC 4.0 & 3.0 Arena",
    desc: "Shortlisted teams across premier Indian engineering colleges tackling dynamic algorithms in Hyderabad.",
    location: "VNRVJIET High Performance Computing",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCaMzDOTiUQ7t48ZyIEqLFd_16WW-eMOHpnNVoXMAoAM-O1IN8E0n3rDL-RpUpNpcUaIRyLhQaXmULZQ694DyhVcufBmG4o1RsJC11GoipYtkbK3hnbKDtHt9IsJXCrSM5JxISglBzqrqhxN6F9AyVOnug6WrqVYHag01zig9Wy6YC45MkJVHruN4RLSqAeLa45hGY_DJHHJaHUSLrYKw_CgaIHPqxuOGRmkiW7vVx5HRXUL-3tQdbWBXqME_EXD-qvBFQ",
  },
];
