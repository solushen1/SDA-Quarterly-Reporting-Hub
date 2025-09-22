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
  },

  // Adventist Community Services / Dorcas Society
  'adventist-community-services': {
    'Report Header': {
      'Church Name': 'Grace Seventh-day Adventist Church',
      'Quarter': 'Q2',
      'Year': 2025
    },
    'Department Details': {
      'Leader': 'Sister Mary Thompson',
      'Assistant': 'Sister Ruth Johnson',
      'Secretary/Treasurer': 'Brother David Wilson',
      'Reports To': 'Pastor Michael Brown'
    },
    'Membership & Participation': {
      'Total Registered Members': 28,
      'Active Volunteers This Quarter': 22,
      'New Members Joined': 3,
      'Members Inactive/Excused': 2,
      'Notes/Comments': 'Two members on medical leave'
    },
    'Community Service Activities': {
      'Food Distribution Programs - Frequency': 'Weekly',
      'Food Distribution Programs - Families Served': 45,
      'Food Distribution Programs - Details': 'Food pantry every Saturday',
      'Clothing Drives/Distribution - Frequency': 'Monthly',
      'Clothing Drives/Distribution - People Served': 75,
      'Emergency Relief/Disaster Response - Cases': 3,
      'Health & Wellness Programs - Sessions': 2,
      'Health & Wellness Programs - Participants': 40
    },
    'Financial Accountability': {
      'Community Service Fund - Collected': 5500,
      'Community Service Fund - Used': 4800,
      'Special Donations - Collected': 2200,
      'Special Donations - Used': 2000,
      'Total Collected': 7700,
      'Total Used': 6800,
      'Balance': 900
    },
    'Challenges & Needs': {
      'Challenges & Needs': 'Need larger storage space for donated items. Transportation for elderly clients required. More volunteers needed for weekend programs.'
    },
    'Plans for Next Quarter': {
      'Plans': 'Expand food distribution to include fresh produce. Launch job training workshops. Partner with local health clinic for monthly screenings.'
    },
    'Approval': {
      'Prepared by': 'Sister Mary Thompson',
      'Date': '2025-07-10',
      'Assistant': 'Sister Ruth Johnson',
      'Assistant Date': '2025-07-10',
      'Received by': 'Pastor Michael Brown',
      'Received by Date': '2025-07-12'
    }
  },

  // Women's Ministries
  'womens-ministries': {
    'Report Header': {
      'Church Name': 'Grace Seventh-day Adventist Church',
      'Quarter': 'Q2',
      'Year': 2025
    },
    'Department Details': {
      'Women\'s Ministries Leader': 'Sister Jennifer Adams',
      'Assistant': 'Sister Patricia Lee',
      'Secretary/Treasurer': 'Sister Angela Davis',
      'Reports To': 'Pastor Michael Brown'
    },
    'Membership & Participation': {
      'Total Women Members in Church': 85,
      'Active in Women\'s Ministries': 52,
      'Regular Meeting Attendance': 35,
      'New Participants This Quarter': 8
    },
    'Spiritual Growth & Fellowship': {
      'Women\'s Bible Study Groups - Sessions': 12,
      'Women\'s Bible Study Groups - Average Attendance': 18,
      'Prayer Groups/Circles - Sessions': 24,
      'Prayer Groups/Circles - Participants': 25,
      'Retreats/Spiritual Emphasis - Events': 1,
      'Retreats/Spiritual Emphasis - Attendance': 42,
      'Special Sabbath Programs': 'International Women\'s Day of Prayer'
    },
    'Community Outreach & Service': {
      'Health & Wellness Programs - Sessions': 3,
      'Health & Wellness Programs - Participants': 65,
      'Community Service Projects - Projects': 2,
      'Community Service Projects - People Served': 30,
      'Evangelistic Activities - Activities': 'Door-to-door ministry',
      'Evangelistic Activities - Contacts': 85,
      'Support to Church Families - Families': 12
    },
    'Financial Accountability': {
      'Women\'s Ministries Offerings - Collected': 3200,
      'Women\'s Ministries Offerings - Used': 2800,
      'Special Projects - Collected': 1800,
      'Special Projects - Used': 1600,
      'Total Collected': 5000,
      'Total Used': 4400,
      'Balance': 600
    },
    'Challenges & Needs': {
      'Challenges & Needs': 'Scheduling conflicts with work schedules. Need better communication tools. Limited budget for larger projects.'
    },
    'Plans for Next Quarter': {
      'Plans': 'Mother-daughter banquet in August. Health fair for community. Launch mentoring program for young mothers.'
    },
    'Approval': {
      'Prepared by': 'Sister Jennifer Adams',
      'Date': '2025-07-08',
      'Assistant': 'Sister Patricia Lee',
      'Assistant Date': '2025-07-08',
      'Received by': 'Pastor Michael Brown',
      'Received by Date': '2025-07-10'
    }
  },

  // Sabbath School
  'sabbath-school': {
    'Report Header': {
      'Church Name': 'Grace Seventh-day Adventist Church',
      'Quarter': 'Q1 (Jan-Mar)',
      'Year': 2025
    },
    'General Information': {
      'Sabbath School Superintendent': 'Elder James Mitchell',
      'Assistant(s)': 'Sister Carol White, Brother Mark Davis',
      'Secretary': 'Sister Linda Johnson',
      'Teachers/Facilitators': 8,
      'Date Submitted': '2025-04-05'
    },
    'Classes & Enrollment': {
      'Adult Classes - Number': 4,
      'Adult Classes - Enrollment': 95,
      'Adult Classes - Average Attendance': 72,
      'Youth Classes - Number': 2,
      'Youth Classes - Enrollment': 22,
      'Youth Classes - Average Attendance': 18,
      'Children Classes - Number': 3,
      'Children Classes - Enrollment': 35,
      'Children Classes - Average Attendance': 28
    },
    'Programs & Activities': {
      'Special Programs': 'Children\'s Day, 13th Sabbath Program',
      'Guest Speakers/Special Presentations': 2,
      'Mission Study/Emphasis': 'Global Mission Focus on Asia',
      'Community Outreach Programs': 'Neighborhood Bible studies',
      'Teacher Training Sessions': 1
    },
    'Financial Report': {
      'Mission Offerings - Collected': 4200,
      'Birthday/Thank Offerings - Collected': 850,
      'Special Projects - Collected': 1200,
      'Total Offerings': 6250,
      'Lesson Quarterlies - Cost': 680,
      'Teaching Materials - Cost': 420,
      'Other Expenses': 180,
      'Total Expenses': 1280,
      'Balance': 4970
    },
    'Challenges & Needs': {
      'Challenges & Needs': 'Need more youth teachers. Limited classroom space for growing children\'s division. Some members prefer online participation.'
    },
    'Plans for Next Quarter': {
      'Plans': 'Teacher appreciation program. Upgrade children\'s classroom with new materials. Launch young adult Sabbath School class.'
    },
    'Approval': {
      'Prepared by': 'Elder James Mitchell',
      'Date': '2025-04-05',
      'Secretary': 'Sister Linda Johnson',
      'Secretary Date': '2025-04-05',
      'Received by': 'Pastor Michael Brown',
      'Received by Date': '2025-04-07'
    }
  },

  // Health Ministries
  'health-ministries': {
    'Report Header': {
      'Church Name': 'Grace Seventh-day Adventist Church',
      'Quarter': 'Q1 (Jan-Mar)',
      'Year': 2025
    },
    'General Information': {
      'Health Ministries Leader': 'Dr. Sarah Wilson',
      'Assistant(s) / Committee Members': 'Nurse Janet Smith, Nutritionist Paul Green',
      'Date Submitted': '2025-04-06'
    },
    'Health Programs & Activities': {
      'Health Screenings - Events': 2,
      'Health Screenings - Participants': 85,
      'Health Screenings - Details': 'Blood pressure, diabetes, BMI checks',
      'Cooking Classes/Nutrition - Sessions': 6,
      'Cooking Classes/Nutrition - Participants': 35,
      'Fitness/Exercise Programs - Sessions': 12,
      'Fitness/Exercise Programs - Participants': 28,
      'Stop Smoking/Addiction Recovery - Programs': 1,
      'Stop Smoking/Addiction Recovery - Participants': 12,
      'Mental Health Support - Sessions': 4,
      'Mental Health Support - Participants': 18
    },
    'Community Health Outreach': {
      'Public Health Fairs - Events': 1,
      'Public Health Fairs - Community Attendance': 120,
      'Health Education Seminars - Sessions': 3,
      'Health Education Seminars - Participants': 65,
      'Collaboration with Health Institutions': 'Partnership with City Health Department',
      'Health Literature Distribution': '300 pamphlets distributed'
    },
    'Training & Capacity Building': {
      'Health Ministry Training - Sessions': 2,
      'Health Ministry Training - Participants': 15,
      'First Aid/CPR Certification - Certified': 8,
      'Community Health Advocate Training': 'Completed by 5 members'
    },
    'Financial Accountability': {
      'Health Ministry Fund - Collected': 2800,
      'Health Ministry Fund - Used': 2400,
      'Equipment/Supplies - Cost': 800,
      'Program Materials - Cost': 600,
      'Training/Certification - Cost': 400,
      'Total Expenses': 1800,
      'Balance': 1000
    },
    'Challenges & Needs': {
      'Challenges & Needs': 'Need updated screening equipment. Limited space for exercise programs. More certified health professionals needed.'
    },
    'Plans for Next Quarter': {
      'Plans': 'Launch stress management workshop. Partner with local gym for fitness classes. Organize community 5K health walk.'
    },
    'Approval': {
      'Prepared by': 'Dr. Sarah Wilson',
      'Date': '2025-04-06',
      'Committee Member': 'Nurse Janet Smith',
      'Committee Member Date': '2025-04-06',
      'Received by Church Clerk': 'Sister Linda Adams',
      'Received by Date': '2025-04-08'
    }
  },

  // Music Department
  'music-department': {
    'Report Header': {
      'Church Name': 'Grace Seventh-day Adventist Church',
      'Quarter': 'Q1 (Jan-Mar)',
      'Year': 2025
    },
    'General Information': {
      'Music Director': 'Brother Robert Johnson',
      'Assistant(s)': 'Sister Michelle Davis, Brother Alex Thompson',
      'Choirs/Groups in Church': 'Adult Choir (25), Youth Choir (15), Children\'s Choir (12), Praise Team (8)',
      'Date Submitted': '2025-04-05'
    },
    'Musical Groups Performance & Participation': {
      'Adult Choir - Members': 25,
      'Adult Choir - Rehearsals': 12,
      'Adult Choir - Special Performances': 4,
      'Youth Choir - Members': 15,
      'Youth Choir - Rehearsals': 10,
      'Youth Choir - Special Performances': 3,
      'Children\'s Choir - Members': 12,
      'Children\'s Choir - Rehearsals': 8,
      'Children\'s Choir - Special Performances': 2,
      'Praise Team - Members': 8,
      'Praise Team - Regular Services': 13
    },
    'Special Musical Events': {
      'Concerts/Recitals - Events': 1,
      'Concerts/Recitals - Attendance': 150,
      'Musical Sabbaths - Events': 2,
      'Guest Artists/Groups - Performances': 1,
      'Community Performances - Events': 1,
      'Christmas/Easter Programs': 'Christmas Cantata performed'
    },
    'Training & Development': {
      'Music Training/Workshops - Sessions': 2,
      'Music Training/Workshops - Participants': 18,
      'New Musicians Recruited': 5,
      'Instrument Lessons Provided': 'Piano lessons for 6 children'
    },
    'Financial Accountability': {
      'Music Department Fund - Collected': 3500,
      'Music Department Fund - Used': 3100,
      'Sheet Music/Songbooks - Cost': 450,
      'Equipment/Instruments - Cost': 800,
      'Special Events - Cost': 600,
      'Training/Workshops - Cost': 250,
      'Total Expenses': 2100,
      'Balance': 1400
    },
    'Challenges & Needs': {
      'Challenges & Needs': 'Piano needs tuning. Need more microphones for larger choir. Scheduling conflicts with other church activities.'
    },
    'Plans for Next Quarter': {
      'Plans': 'Easter musical program. Youth choir exchange with neighboring church. Purchase new sound system components.'
    },
    'Approval': {
      'Prepared by': 'Brother Robert Johnson',
      'Date': '2025-04-05',
      'Assistant': 'Sister Michelle Davis',
      'Assistant Date': '2025-04-05',
      'Received by': 'Pastor Michael Brown',
      'Received by Date': '2025-04-07'
    }
  },

  // Pathfinder Club
  'pathfinder-club': {
    'Report Header': {
      'Church Name': 'Grace Seventh-day Adventist Church',
      'Quarter': 'Q2',
      'Year': 2025
    },
    'Section 1: General Information': {
      'Mission/Conference': 'Central Valley Conference',
      'Pathfinder Club Name': 'Grace Eagles Pathfinder Club',
      'Club Director': 'Elder Mark Stevens',
      'Deputy Directors': 'Sister Karen White, Brother Tom Davis',
      'Number of Pathfinders Enrolled': 28,
      'Number of Counsellors/Staff': 8,
      'Prepared By': 'Elder Mark Stevens',
      'Date Submitted': '2025-07-08'
    },
    'Section 2: Membership & Attendance': {
      'Friends (Age 5-6) - Enrolled': 0,
      'Friends (Age 5-6) - Average Attendance': 0,
      'Companions (Age 7-9) - Enrolled': 6,
      'Companions (Age 7-9) - Average Attendance': 5,
      'Explorers (Age 10-12) - Enrolled': 12,
      'Explorers (Age 10-12) - Average Attendance': 10,
      'Rangers (Age 13-15) - Enrolled': 8,
      'Rangers (Age 13-15) - Average Attendance': 7,
      'Voyagers (Age 16+) - Enrolled': 2,
      'Voyagers (Age 16+) - Average Attendance': 2,
      'Total Average Attendance': 24,
      'Meeting Frequency': 'Weekly on Saturdays'
    },
    'Section 3: Program Activities': {
      'Regular Club Meetings - Sessions': 12,
      'Regular Club Meetings - Average Attendance': 24,
      'Induction/Investiture Services - Events': 1,
      'Induction/Investiture Services - Participants': 15,
      'Camp/Camporee Participation - Events': 1,
      'Camp/Camporee Participation - Attendees': 20,
      'Community Service Projects - Projects': 3,
      'Community Service Projects - Hours': 45,
      'Field Trips/Educational Outings - Trips': 2,
      'Field Trips/Educational Outings - Participants': 22
    },
    'Section 4: Training & Achievement': {
      'Classes Taught - Number': 8,
      'Classes Taught - Completions': 25,
      'Honors Completed - Number': 15,
      'Honors Completed - Pathfinders': 18,
      'Leadership Training - Sessions': 2,
      'Leadership Training - Participants': 6,
      'Staff Training/Development': 'Area coordinator training attended'
    },
    'Section 5: Financial Report': {
      'Club Dues/Fees - Collected': 1400,
      'Club Dues/Fees - Used': 1200,
      'Fundraising Activities - Collected': 2200,
      'Fundraising Activities - Used': 2000,
      'Special Donations - Collected': 800,
      'Special Donations - Used': 600,
      'Total Income': 4400,
      'Total Expenses': 3800,
      'Balance': 600,
      'Major Expenses': 'Uniforms, camping equipment, class materials'
    },
    'Section 6: Challenges & Needs': {
      'Challenges & Needs': 'Need larger meeting space. Transportation for outdoor activities. More male counselors needed.'
    },
    'Section 7: Plans for Next Quarter': {
      'Plans': 'Fall camporee participation. Community clean-up project. Start advanced classes for older Pathfinders.'
    },
    'Approval': {
      'Prepared by': 'Elder Mark Stevens',
      'Date': '2025-07-08',
      'Deputy Director': 'Sister Karen White',
      'Deputy Director Date': '2025-07-08',
      'Received by': 'Youth Director Pastor James Lee',
      'Received by Date': '2025-07-10'
    }
  }
};