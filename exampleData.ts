// Auto-fill example data extracted from the PDF for each template type
// This data will be used to populate forms when users click the example button

interface ExampleData {
  [templateId: string]: {
    [sectionId: string]: {
      [fieldLabel: string]: string | number;
    };
  };
}

export const TEMPLATE_EXAMPLES: ExampleData = {
  // From PDF Practical Example 1 - Branch Church Quarterly Report
  'branch-cell-church': {
    'Report Header': {
      'Church Name': 'Grace Seventh-day Adventist Church',
      'Quarter': 'Q1 (Jan–Mar)',
      'Year': 2025
    },
    'General Information': {
      'Mother Church': 'UPNG SDA Church',
      'Church/Branch Name': 'Hope Branch SDA',
      'Mission/Conference': 'Central Valley Conference',
      'Pastor/Leader': 'Pr. Daniel K. Mensah',
      'Clerk/Reporter': 'Sarah Owusu',
      'Date Submitted': '2025-04-05'
    },
    'Membership Report': {
      'Membership at Beginning of Quarter': 123,
      'Baptisms': 4,
      'Professions of Faith': 2,
      'Transfers In': 1,
      'Transfers Out': 0,
      'Deaths': 1,
      'Removals (Discipline)': 0,
      'Membership at End of Quarter': 129
    },
    'Attendance': {
      'Sabbath School': 95,
      'Divine Service': 110,
      'Midweek Prayer Meeting': 40,
      'Youth Meetings': 35,
      'Other Meetings (Choir Practice)': 25
    },
    'Financial Report': {
      'Tithes Collected': 28750,
      'Offerings (Local Church Budget)': 9600,
      'Sabbath School Offerings': 2400,
      'Mission Offerings': 1750,
      'Special Funds/Projects (Building)': 6500,
      'Total Income': 49000,
      'Total Expenditure': 42300,
      'Balance Forward': 6700
    },
    'Departmental Reports (Summaries)': {
      'Sabbath School & Personal Ministries': 'Conducted 3 outreach programs in nearby communities. 22 Bible studies in progress. 300 tracts and 50 books distributed.',
      'Youth Ministries': 'AY meetings held weekly, average 30–40 in attendance. Pathfinder Club launched with 18 active members. Organized Youth Sabbath in March.',
      'Women\'s & Men\'s Ministries': 'Women\'s Ministries hosted International Women\'s Day of Prayer (March). Men\'s Ministries supported church roofing project.',
      'Community Services / Evangelism / Health Ministry': 'Community food distribution reached 45 families. Health Screening conducted on Feb 15 (80 participants). Evangelistic Campaign planned for May.'
    },
    'Challenges & Needs': {
      'Challenges & Needs': 'Limited space in children\'s classroom. Need for new microphones and PA system repair. Some members struggling with consistent midweek attendance.'
    },
    'Plans for Next Quarter': {
      'Plans': 'Evangelistic campaign in May targeting 2 nearby villages. Launch of midweek Bible Study groups in homes. Pathfinder Camporee scheduled for June. Begin fundraising for multipurpose hall construction.'
    },
    'Approval': {
      'Prepared by': 'Elder John Kena',
      'Date': '2005-03-12',
      'Clerk': 'Geno Kio',
      'Clerk Date': '2005-03-12',
      'Treasurer': 'Cathy Lumi',
      'Treasurer Date': '2005-03-12',
      'Received by': 'Pastor Hiru Gena',
      'Received by Date': '2005-03-16'
    }
  },

  // From PDF Practical Example 2 - Elders' Department Quarterly Report
  'elders-department': {
    'Report Header': {
      'Church Name': 'Grace Seventh-day Adventist Church',
      'Quarter': 'Q1 (Jan–Mar)',
      'Year': 2025
    },
    'General Information': {
      'Church Name': 'Grace SDA Church',
      'Mission/Conference': 'Central Valley Conference',
      'Head Elder': 'Elder Joseph Amankwah',
      'Number of Serving Elders': 5,
      'Date Submitted': '2025-04-06'
    },
    'Worship & Service Leadership': {
      'Sabbath Worship Services Led by Elders': 8,
      'Communion Services Assisted/Conducted': 1,
      'Midweek Prayer Meetings Led': 10,
      'Funerals, Weddings, Special Services': 3,
      'Notes': 'Covered when pastor traveled. Assisted pastor in March. Rotated among elders. 2 funerals, 1 wedding'
    },
    'Pastoral Care & Visitation': {
      'Home Visits': 22,
      'Hospital/Prison Visits': 7,
      'Member Counselling/Prayer Sessions': 6,
      'Bible Studies Conducted': 12,
      'Details': '22 families visited. 7 (hospital only). 6 sessions. 12 ongoing'
    },
    'Leadership & Support': {
      'Elders\' Meetings Held': 3,
      'Training/Workshops Attended': 'District Elders\' Seminar (Feb 15)',
      'Mentoring of Youth Leaders': 2,
      'Support to Other Church Departments': 'Helped Sabbath School Rally',
      'Details': '3 (monthly). 2 AY leaders being groomed'
    },
    'Financial Accountability (Budget Acquittal)': {
      'Elders\' Meetings & Retreats - Approved Budget': 2000,
      'Elders\' Meetings & Retreats - Actual Expenditure': 1650,
      'Elders\' Meetings & Retreats - Balance': 350,
      'Visitation & Pastoral Care - Approved Budget': 1500,
      'Visitation & Pastoral Care - Actual Expenditure': 1200,
      'Visitation & Pastoral Care - Balance': 300,
      'Training & Workshops - Approved Budget': 1000,
      'Training & Workshops - Actual Expenditure': 900,
      'Training & Workshops - Balance': 100,
      'Evangelism/Support Programs - Approved Budget': 2500,
      'Evangelism/Support Programs - Actual Expenditure': 2300,
      'Evangelism/Support Programs - Balance': 200,
      'Other (Emergency Support) - Approved Budget': 800,
      'Other (Emergency Support) - Actual Expenditure': 750,
      'Other (Emergency Support) - Balance': 50,
      'Total - Approved Budget': 7800,
      'Total - Actual Expenditure': 6800,
      'Total - Balance': 1000
    },
    'Challenges & Needs': {
      'Challenges & Needs': 'Transport challenges for rural visitation. Limited funds for welfare/visitation packages. Some elders balancing work with ministry duties.'
    },
    'Plans for Next Quarter': {
      'Plans': 'Organize a Family Week of Prayer (May). Joint visitations with Deacons/Deaconesses. Elders\' Spiritual Retreat (June).'
    },
    'Approval': {
      'Prepared by': 'Elder Joseph Amankwah',
      'Date': '2025-04-06',
      'Secretary': 'Elder Mary Kusi',
      'Secretary Date': '2025-04-06',
      'Received by': 'Clerk Kenny Jinki',
      'Received by Date': '2025-04-06'
    }
  },

  // From PDF Practical Example 3 - Personal Ministries Quarterly Report
  'personal-ministries': {
    'Report Header': {
      'Church Name': 'Grace Seventh-day Adventist Church',
      'Quarter': 'Q1',
      'Year': 2025
    },
    'General Information': {
      'Church Name': 'Grace SDA Church',
      'Mission/Conference': 'Central Valley Conference',
      'Personal Ministries Leader': 'Sis. Lydia Nkrumah',
      'Assistant/Secretary': 'Bro. Daniel Owusu',
      'Date Submitted': '2025-04-07'
    },
    'Core Evangelism & Outreach': {
      'Bible Studies Given': 35,
      'Bible Studies Given Details': '23 completed, 12 ongoing',
      'Missionary Contacts Made': 420,
      'Baptisms/Professions of Faith Resulting': 6,
      'Baptisms/Professions of Faith Details': '6 baptisms, 3 professions',
      'Tracts/Books Distributed': 1350,
      'Tracts/Books Distributed Details': '1,200 tracts, 150 books',
      'Evangelistic Meetings/Crusades Held': 1,
      'Evangelistic Meetings/Crusades Details': '1-week revival (March)',
      'Interest Coordinator Follow-ups': 38
    },
    'Departmental Subdivisions Activity Report': {
      'Bible Study Ministry / Lay Instructors': 'Active Instructors: 5. New Studies: 18. Completions: 23. Challenges: 2 instructors need transportation support.',
      'Small Groups / Cell Ministry': 'Active Groups: 4 (weekly). Avg Attendance: 8–12 per group. Discipleship Focus: "Steps to Christ" series. New Members Integrated: 4',
      'Literature Evangelism / Missionary Volunteers': 'Members Involved: 17. Tracts Distributed: 1,200. Books Shared: 150 ("The Great Controversy", "Hope Beyond Tomorrow"). Response: 19 people requested Bible studies',
      'Community Services / Dorcas': 'Projects: Clothing and food donation drive. Served: 35 families. Partnerships: Local clinic & 2 schools. Emergency Aid: Assisted 3 members in crisis',
      'Adventist Men': 'Projects: Assisted in widow home repair project. Evangelism: Led 1 men\'s prayer breakfast. Participants: 12 men actively involved',
      'Spirit of Prophecy Promotion': 'Books Shared: 40 SOP books. Reading Plan: Desire of Ages weekly discussion (in 2 groups). Engagement: 28 members joined the plan'
    },
    'Training & Member Involvement': {
      'Training Seminars Held': 'Lay Bible Instructor Training (Feb 15)',
      'Members Trained': 25,
      'Outreach Participation Rate': '~60% of active members',
      'Special Days Observed': 'Global Youth Day (Mar 16), Lay Evangelism Day'
    },
    'Financial Accountability': {
      'Personal Ministries Offerings - Collected': 3200,
      'Personal Ministries Offerings - Used': 2800,
      'Personal Ministries Offerings - Balance': 400,
      'Evangelism Fund - Collected': 5000,
      'Evangelism Fund - Used': 4700,
      'Evangelism Fund - Balance': 300,
      'Community Services Fund - Collected': 2500,
      'Community Services Fund - Used': 2200,
      'Community Services Fund - Balance': 300,
      'Special Donations - Collected': 1200,
      'Special Donations - Used': 1000,
      'Special Donations - Balance': 200,
      'Total - Collected': 11900,
      'Total - Used': 10700,
      'Total - Balance': 1200,
      'Notes': 'Tracts, Bibles, transport. Crusade in March. Food & clothing distribution. SOP & Great Controversy distribution'
    },
    'Challenges & Needs': {
      'Challenges & Needs': 'Limited supply of Bible study guides. Lack of transport support for visitation. Few trained male leaders in literature evangelism'
    },
    'Plans for Next Quarter': {
      'Plans': 'Evangelistic Crusade in June. Open 2 new small groups in the east district. Print/distribute 2,000 more tracts. Train 10 new literature evangelists'
    },
    'Approval': {
      'Prepared by': 'Lydia Nkrumah',
      'Date': '2025-04-07',
      'Secretary': 'Daniel Owusu',
      'Secretary Date': '2025-04-07',
      'Received by': 'Pastor Kingsford James',
      'Received by Date': '2025-04-07'
    }
  },

  // From PDF Practical Example 4 - Adventist Possibility Ministries Quarterly Report
  'adventist-possibility-ministries': {
    'Report Header': {
      'Church Name': 'Grace Seventh-day Adventist Church',
      'Quarter': 'Q1 (Jan-Mar)',
      'Year': 2025
    },
    'General Information': {
      'Mission/Conference': 'Morobe Mission',
      'APM Leader': 'Elder Sarah Kumawu',
      'Assistant/Secretary': 'Sister Grace Manu',
      'Committee Members': 7,
      'Date Submitted': '2025-04-08'
    },
    'Core Ministry Areas & Activities': {
      'Ministry to the Blind/Visually Impaired - Activities': 'Braille Bible distribution',
      'Ministry to the Blind/Visually Impaired - Number/Details': '5 Braille Bibles distributed, 12 people assisted',
      'Ministry to the Deaf/Hearing Impaired - Activities': 'Sign language interpretation',
      'Ministry to the Deaf/Hearing Impaired - Number/Details': '3 services interpreted, 8 deaf members supported',
      'Ministry to the Physically Challenged - Activities': 'Wheelchair provision',
      'Ministry to the Physically Challenged - Number/Details': '2 wheelchairs provided, ramp construction support',
      'Ministry to Orphans & Vulnerable Children - Activities': 'School support program',
      'Ministry to Orphans & Vulnerable Children - Number/Details': '15 children supported with school supplies',
      'Ministry to Widows/Widowers & Single Parents - Activities': 'Food and clothing assistance',
      'Ministry to Widows/Widowers & Single Parents - Number/Details': '25 families assisted',
      'Ministry to the Elderly - Activities': 'Home visits and medical support',
      'Ministry to the Elderly - Number/Details': '18 elderly visited, 5 received medical assistance',
      'Awareness/Sensitization Programs - Activities': 'Disability awareness Sabbath'
    },
    'Participation & Support': {
      'Volunteers Involved': 15,
      'Training Conducted': 'Disability sensitivity training for church members',
      'Families/Individuals Assisted': 63
    },
    'Financial Accountability': {
      'APM Offerings - Collected': 2800,
      'APM Offerings - Used': 2500,
      'Welfare/Support Funds - Collected': 4200,
      'Welfare/Support Funds - Used': 3800,
      'Donations (Special) - Collected': 1500,
      'Donations (Special) - Used': 1200,
      'Total Collected': 8500,
      'Total Used': 7500,
      'Balance': 1000,
      'Notes': 'Wheelchairs, Braille materials, food supplies'
    },
    'Challenges & Needs': {
      'Challenges & Needs': 'Limited funds for specialized equipment. Need for more trained volunteers in sign language. Transportation challenges for home visits.'
    },
    'Plans for Next Quarter': {
      'Plans': 'Expand sign language training program. Purchase additional mobility aids. Organize disability awareness workshop for community leaders.'
    },
    'Approval': {
      'Prepared by': 'Elder Sarah Kumawu',
      'Date': '2025-04-08',
      'Secretary': 'Sister Grace Manu',
      'Secretary Date': '2025-04-08',
      'Received by': 'Pastor Michael Temu',
      'Received by Date': '2025-04-10'
    }
  }
};