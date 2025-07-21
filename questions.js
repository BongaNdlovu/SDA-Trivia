/**
 * SDA Trivia Challenge - Questions Database
 * =========================================
 *
 * This file contains the database of questions for the SDA Trivia Challenge game.
 * It includes questions across multiple categories including Bible People, Prophecy,
 * General SDA, Diet & Health, Last Day Events, Music, and The Great Controversy.
 *
 * Each question includes:
 * - id: Unique identifier with category prefix (e.g., BP001, GS001)
 * - question: The actual question text
 * - options: Array of possible answers (4 options)
 * - answer: The correct answer (must match one of the options exactly)
 * - category: The question category
 * - difficulty: Difficulty level (easy, medium, hard)
 * - explanation: Brief explanation of the correct answer
 *
 * The file also includes a validateQuestion function that ensures each question
 * has all required properties and that the correct answer is included in the options.
 *
 * FUTURE IMPROVEMENTS:
 * -------------------
 * 1. Consider organizing questions into separate arrays by category for easier management
 * 2. Add more metadata like question author, source reference, or date added
 * 3. Implement a more robust ID system with auto-incrementing numbers
 * 4. Add tags for more specific filtering (e.g., "Old Testament", "New Testament", "Health")
 * 5. Consider moving to a JSON format or database for larger question sets
 * 6. Add difficulty distribution tracking to ensure balanced question sets
 * 7. Implement question versioning to track changes over time
 * 8. Add a function to verify unique IDs across the entire question set
 * 9. Consider adding image or audio references for multimedia questions
 * 10. Add a function to export questions in different formats (CSV, JSON, etc.)
 */

// questions.js // SDA Trivia Challenge Questions

/**
 * Validates that a question object has all required properties and that the correct answer
 * is included in the options array.
 * @param {Object} question - The question object to validate
 * @returns {boolean} - True if valid, false otherwise
 */
function validateQuestion(question) {
    // Check required properties
    if (!question.id || !question.question || !question.options || !question.answer ||
        !question.category || !question.difficulty) {
        console.error('Question missing required properties:', question);
        return false;
    }
    
    // Check that correct answer is in options
    if (!question.options.includes(question.answer)) {
        console.error('Correct answer not in options:', question);
        return false;
    }
    
    return true;
}

// Initialize the game questions array
const gameQuestions = [
    {
        id: "DH001",
        question: "According to 'Counsels on Diet and Foods', what was man's original diet in Eden?",
        options: ["Fruits, grains, nuts, and vegetables", "Fish and bread", "Meat and dairy", "Honey and locusts"],
        answer: "Fruits, grains, nuts, and vegetables",
        category: "Diet & Health",
        difficulty: "easy",
        explanation: "Eden's original diet, as described in Genesis, consisted of fruits, grains, nuts, and later vegetables—no animal products."
    },
    {
        id: "PR001",
        question: "In 'The Great Controversy', what event marked the beginning of the 1260 years of papal supremacy?",
        options: ["The fall of Rome", "The Edict of Milan", "The decree of Emperor Justinian in A.D. 538", "The Council of Nicaea"],
        answer: "The decree of Emperor Justinian in A.D. 538",
        category: "Prophecy",
        difficulty: "medium",
        explanation: "The decree of Justinian in 538 A.D. gave the Bishop of Rome civil power, marking the start of the prophetic 1260 years."
    },
    {
        id: "LDE001",
        question: "From 'Last Day Events', what is the 'mark of the beast'?",
        options: ["A computer chip", "A secret society symbol", "Sunday observance enforced by law", "A tattoo on the hand"],
        answer: "Sunday observance enforced by law",
        category: "Last Day Events",
        difficulty: "medium",
        explanation: "The 'mark of the beast' is understood as enforced Sunday worship, in contrast to the biblical Sabbath."
    },
    {
        id: "BP001",
        question: "In the KJV Bible, who was thrown into a den of lions but was protected by God?",
        options: ["Joseph", "Daniel", "David", "Jeremiah"],
        answer: "Daniel",
        category: "Bible People",
        difficulty: "easy",
        explanation: "Daniel was thrown into the lions' den for praying to God, but God sent an angel to shut the lions' mouths."
    },
    {
        id: "DH002",
        question: "'Counsels on Diet and Foods' states that a close sympathy exists between the physical and what other nature?",
        options: ["The emotional nature", "The social nature", "The moral nature", "The intellectual nature"],
        answer: "The moral nature",
        category: "Diet & Health",
        difficulty: "medium",
        explanation: "Physical health is closely linked to moral and spiritual well-being, according to Ellen White's writings."
    },
    {
        id: "GS001",
        question: "According to 'The Great Controversy', who was the 'morning star of the Reformation'?",
        options: ["Martin Luther", "John Calvin", "John Wycliffe", "John Huss"],
        answer: "John Wycliffe",
        category: "General SDA",
        difficulty: "medium",
        explanation: "John Wycliffe is often called the 'morning star of the Reformation' because his teachings and Bible translation work preceded and influenced later reformers."
    },
    {
        id: "LDE002",
        question: "In 'Last Day Events', what are the two great errors Satan will use to deceive the world?",
        options: ["The Trinity and the state of the dead", "The immortality of the soul and Sunday sacredness", "A secret rapture and a temporal millennium", "Speaking in tongues and false healing"],
        answer: "The immortality of the soul and Sunday sacredness",
        category: "Last Day Events",
        difficulty: "medium",
        explanation: "These two doctrines are identified as key deceptions that will lead many astray in the end times."
    },
    {
        id: "BP002",
        question: "In the KJV Bible, what did Jesus say are the two greatest commandments?",
        options: ["Honor your father and mother, and do not steal", "Love God with all your heart, and love your neighbor as yourself", "Keep the Sabbath, and pay tithe", "Be baptized, and preach the gospel"],
        answer: "Love God with all your heart, and love your neighbor as yourself",
        category: "Bible People",
        difficulty: "easy",
        explanation: "Jesus stated these as the greatest commandments when questioned by a lawyer in Matthew 22:36-40."
    },
    {
        id: "DH003",
        question: "What does 'Counsels on Diet and Foods' say about the use of tea and coffee?",
        options: ["They are harmless in moderation", "They are beneficial for health", "They are stimulating and contain poisons", "They should be replaced with sugary drinks"],
        answer: "They are stimulating and contain poisons",
        category: "Diet & Health",
        difficulty: "medium",
        explanation: "Ellen White consistently warned against stimulants like tea and coffee, describing them as harmful to physical and spiritual health."
    },
    {
        id: "MU001",
        question: "According to 'Music: Its Role, Qualities, and Influence', what is song a weapon against?",
        options: ["Temptation", "Discouragement", "Pride", "Ignorance"],
        answer: "Discouragement",
        category: "Music",
        difficulty: "easy",
        explanation: "Ellen White taught that sacred music can lift the spirits and combat feelings of discouragement and depression."
    },
    {
        id: "MU002",
        question: "In 'Music: Its Role, Qualities, and Influence', singing as a part of religious service is as much an act of worship as what?",
        options: ["Tithing", "Fasting", "Preaching", "Prayer"],
        answer: "Prayer",
        category: "Music",
        difficulty: "medium",
        explanation: "Ellen White emphasized that singing is not merely entertainment but a sacred act of worship equivalent to prayer."
    },
    {
        id: "MU003",
        question: "What did Jesus often do to welcome the morning light, according to 'Music: Its Role, Qualities, and Influence'?",
        options: ["He went for a walk", "He welcomed it with the voice of singing", "He read the Scriptures", "He gathered with his disciples"],
        answer: "He welcomed it with the voice of singing",
        category: "Music",
        difficulty: "medium",
        explanation: "Ellen White describes Jesus as beginning His day with songs of praise, setting an example for believers."
    },
    {
        id: "MU004",
        question: "According to 'Music: Its Role, Qualities, and Influence', what is one of the most effective means of impressing spiritual truth upon the heart?",
        options: ["Listening to sermons", "Song", "Studying history", "Debating theology"],
        answer: "Song",
        category: "Music",
        difficulty: "easy",
        explanation: "Ellen White taught that music can reach hearts in ways that mere words often cannot, making spiritual truths more memorable and impactful."
    },
    {
        id: "MU005",
        question: "What should accompany singing in our services whenever possible, according to 'Music: Its Role, Qualities, and Influence'?",
        options: ["Dramatic readings", "Congregational responses", "Instrumental music", "Periods of silence"],
        answer: "Instrumental music",
        category: "Music",
        difficulty: "easy",
        explanation: "Ellen White encouraged the use of appropriate instrumental accompaniment to enhance the worship experience."
    },
    {
        id: "BP003",
        question: "In the KJV Bible, which disciple denied Jesus three times?",
        options: ["Judas", "John", "Peter", "Thomas"],
        answer: "Peter",
        category: "Bible People",
        difficulty: "easy",
        explanation: "Peter denied knowing Jesus three times before the rooster crowed, as Jesus had predicted."
    },
    
    // Difficult Questions
    {
        id: "PR002",
        question: "In 'The Great Controversy', what year marked the end of the 1260 years of papal supremacy?",
        options: ["A.D. 1798", "A.D. 1844", "A.D. 538", "A.D. 1260"],
        answer: "A.D. 1798",
        category: "Prophecy",
        difficulty: "hard",
        explanation: "The 1260-year period that began in 538 A.D. ended in 1798 when the pope was taken captive by Napoleon's general Berthier."
    },
    // Additional Diet & Health questions
    {
        id: "DH004",
        question: "Which of the following was permitted for consumption under Mosaic law but is generally discouraged by modern health principles for its high fat content?",
        options: ["Locusts", "Quail", "The fat of an ox", "Wild honey"],
        answer: "The fat of an ox",
        category: "Diet & Health",
        difficulty: "medium",
        explanation: "While the fat of an ox was permitted under Mosaic dietary laws, modern health principles discourage high-fat animal products due to their association with cardiovascular disease."
    },
    {
        id: "DH005",
        question: "Daniel's diet in Babylon consisted of 'pulse and water.' What is 'pulse' most accurately described as?",
        options: ["A variety of grains and seeds.", "A specific type of lentil soup.", "Edible seeds of various leguminous plants (e.g., peas, beans).", "A general term for all vegetables."],
        answer: "Edible seeds of various leguminous plants (e.g., peas, beans).",
        category: "Diet & Health",
        difficulty: "medium",
        explanation: "Pulse refers specifically to the edible seeds of legumes, which Daniel and his companions requested instead of the king's rich food."
    },
    {
        id: "DH006",
        question: "What was the primary health reason for the biblical prohibition against eating pork?",
        options: ["Pigs were considered sacred to pagan gods.", "The risk of trichinosis from undercooked meat.", "Their digestive system was considered unclean because they were scavengers.", "Their high saturated fat content."],
        answer: "Their digestive system was considered unclean because they were scavengers.",
        category: "Diet & Health",
        difficulty: "medium",
        explanation: "In Leviticus, animals that did not both chew the cud and have split hooves were considered unclean. Pigs have split hooves but don't chew the cud, and their scavenging nature was considered unclean."
    },
    {
        id: "DH007",
        question: "John the Baptist's diet was locusts and wild honey. What nutritional benefit do locusts provide?",
        options: ["High in fiber", "High in carbohydrates", "High in protein", "High in vitamin C"],
        answer: "High in fiber",
        category: "Diet & Health",
        difficulty: "easy",
        explanation: "John ate the plant locusts not the actual insect, as he was vegan. These plant locusts were high in fiber, providing a healthy dietary component in the desert environment where John lived."
    },
    {
        id: "DH008",
        question: "What is the 'more excellent way' of health that Paul refers to, contrasting with dietary laws?",
        options: ["Love and consideration for a weaker brother's conscience.", "A completely vegetarian diet.", "Fasting and prayer.", "Adherence to the eight laws of health."],
        answer: "Love and consideration for a weaker brother's conscience.",
        category: "Diet & Health",
        difficulty: "medium",
        explanation: "In Romans 14 and 1 Corinthians 8, Paul emphasizes that while dietary choices matter, showing love and consideration for others' consciences is more important than rigid adherence to rules."
    },
    {
        id: "DH009",
        question: "Which of these is NOT one of the eight universally recognized 'laws of health' in SDA tradition?",
        options: ["Temperance", "Trust in God", "Proper Diet", "Financial Prudence"],
        answer: "Financial Prudence",
        category: "Diet & Health",
        difficulty: "easy",
        explanation: "The eight laws of health (sometimes remembered by the acronym NEWSTART) include Nutrition, Exercise, Water, Sunlight, Temperance, Air, Rest, and Trust in God. Financial prudence, while important, is not among them."
    },
    {
        id: "DH010",
        question: "In the vision of Peter in Acts 10, the sheet of unclean animals was meant to teach a primary lesson about:",
        options: ["The abrogation of all dietary laws.", "The acceptance of Gentiles into the church.", "The importance of not calling any food common or unclean.", "A new health message for the early church."],
        answer: "The acceptance of Gentiles into the church.",
        category: "Diet & Health",
        difficulty: "medium",
        explanation: "The vision's interpretation is given in Acts 10:28, where Peter states that God has shown him not to call any person common or unclean, referring to the acceptance of Gentiles rather than changing dietary laws."
    },
    {
        id: "DH011",
        question: "What leavening agent was typically avoided during the Feast of Unleavened Bread?",
        options: ["Baking soda", "Yeast (seor)", "Baking powder", "Potash"],
        answer: "Yeast (seor)",
        category: "Diet & Health",
        difficulty: "medium",
        explanation: "Yeast (seor in Hebrew) was the primary leavening agent avoided during Passover and the Feast of Unleavened Bread, symbolizing the haste with which the Israelites left Egypt."
    },
    {
        id: "DH012",
        question: "The 'water of life' in Revelation is symbolic of what?",
        options: ["The importance of hydration.", "The Holy Spirit and eternal salvation.", "The river flowing from the sanctuary.", "Baptism and cleansing."],
        answer: "The Holy Spirit and eternal salvation.",
        category: "Diet & Health",
        difficulty: "medium",
        explanation: "In Revelation 21:6 and 22:17, the 'water of life' represents the gift of salvation and eternal life freely offered by Christ, often associated with the work of the Holy Spirit."
    },
    {
        id: "DH013",
        question: "What was the manna in the wilderness a type of?",
        options: ["A complete protein.", "Angel's food.", "Christ, the Bread of Life.", "A lesson in divine providence."],
        answer: "Christ, the Bread of Life.",
        category: "Diet & Health",
        difficulty: "medium",
        explanation: "Jesus explicitly made this connection in John 6:48-51, identifying Himself as the true bread from heaven that gives eternal life, in contrast to the manna that temporarily sustained physical life."
    },
    {
        id: "DH014",
        question: "Why were the Israelites forbidden from eating blood?",
        options: ["It was considered the primary carrier of disease.", "The life of the flesh is in the blood, and it was reserved for atonement.", "It was a pagan practice to drink blood.", "It was difficult to digest."],
        answer: "The life of the flesh is in the blood, and it was reserved for atonement.",
        category: "Diet & Health",
        difficulty: "medium",
        explanation: "Leviticus 17:11 states, 'For the life of the flesh is in the blood, and I have given it to you upon the altar to make atonement for your souls.' This sacred purpose made blood consumption forbidden."
    },
    {
        id: "DH015",
        question: "The Rechabites were commended by God for their obedience to their ancestor in abstaining from what?",
        options: ["Meat", "Leavened bread", "Strong drink and wine", "Unclean foods"],
        answer: "Strong drink and wine",
        category: "Diet & Health",
        difficulty: "medium",
        explanation: "In Jeremiah 35, the Rechabites were praised for their faithfulness to their ancestor Jonadab's command to abstain from wine, demonstrating the value of temperance and family loyalty."
    },
    {
        id: "DH016",
        question: "Which of these fish is considered 'unclean' according to Leviticus 11?",
        options: ["Tuna", "Salmon", "Catfish", "Trout"],
        answer: "Catfish",
        category: "Diet & Health",
        difficulty: "easy",
        explanation: "According to Leviticus 11:9-12, clean fish must have both fins and scales. Catfish, while having fins, lack the traditional scales required by the Mosaic law."
    },
    {
        id: "DH017",
        question: "Temperance, as a fruit of the Spirit, is best defined as:",
        options: ["Total abstinence from all harmful substances.", "Moderation in all good things.", "Self-control, especially over appetites and passions.", "A balanced lifestyle."],
        answer: "Self-control, especially over appetites and passions.",
        category: "Diet & Health",
        difficulty: "medium",
        explanation: "In Galatians 5:22-23, temperance (or self-control) is listed as a fruit of the Spirit, referring to mastery over one's desires and impulses rather than merely abstinence or moderation."
    },
    {
        id: "DH018",
        question: "What was the first temptation of Christ in the wilderness directly related to?",
        options: ["Pride", "Appetite", "Presumption", "Power"],
        answer: "Appetite",
        category: "Diet & Health",
        difficulty: "easy",
        explanation: "In Matthew 4:3, Satan's first temptation was for Jesus to turn stones into bread after fasting for 40 days, directly targeting His physical hunger and appetite."
    },
    {
        id: "DH019",
        question: "The 'new wine' in the New Testament is often argued by temperance advocates to be:",
        options: ["Fermented wine with low alcohol content.", "Unfermented grape juice.", "A symbol of the Holy Spirit's outpouring.", "A diluted wine mixture."],
        answer: "Unfermented grape juice.",
        category: "Diet & Health",
        difficulty: "medium",
        explanation: "Temperance advocates point to passages like Matthew 9:17 about new wine in new wineskins to argue that the Greek word 'oinos' could refer to either fermented or unfermented grape juice, depending on context."
    },
    {
        id: "DH020",
        question: "What is the primary principle behind the health message?",
        options: ["To ensure a long life.", "To avoid sickness and disease.", "To glorify God in our bodies.", "To set an example for the world."],
        answer: "To glorify God in our bodies.",
        category: "Diet & Health",
        difficulty: "easy",
        explanation: "Based on 1 Corinthians 6:19-20, which states that our bodies are temples of the Holy Spirit and we should glorify God in our bodies, the health message emphasizes stewardship of the body for God's glory."
    },
    {
        id: "DH021",
        question: "The Nazarite vow included abstinence from:",
        options: ["All meat and dairy.", "Any product of the grapevine.", "All leavened products.", "Any food prepared by a Gentile."],
        answer: "Any product of the grapevine.",
        category: "Diet & Health",
        difficulty: "medium",
        explanation: "Numbers 6:3-4 specifies that Nazarites were to abstain from wine, strong drink, vinegar, grape juice, fresh grapes, and raisins—anything from the grapevine—along with not cutting their hair and avoiding contact with dead bodies."
    },
    {
        id: "DH022",
        question: "What does the 'balm in Gilead' metaphorically refer to?",
        options: ["A natural remedy for skin diseases.", "The healing power of the gospel.", "A specific herbal poultice.", "The medical knowledge of the priests."],
        answer: "The healing power of the gospel.",
        category: "Diet & Health",
        difficulty: "medium",
        explanation: "While Jeremiah 8:22 literally refers to a medicinal resin from Gilead, it has been metaphorically interpreted to represent the healing power of Christ and the gospel, as reflected in the spiritual 'There Is a Balm in Gilead.'"
    },
    {
        id: "DH023",
        question: "Which of these was a key component of the original, Edenic diet?",
        options: ["Grains, nuts, and dairy", "Fruits, vegetables, and honey", "Seeds, nuts, and fruits", "Legumes, grains, and herbs"],
        answer: "Seeds, nuts, and fruits",
        category: "Diet & Health",
        difficulty: "easy",
        explanation: "Genesis 1:29 states that God gave humans 'every seed-bearing plant' and 'every tree that has fruit with seed in it' for food, establishing the original plant-based diet in Eden."
    },
    {
        id: "DH024",
        question: "Paul told Timothy to 'use a little wine' for what reason?",
        options: ["For his 'stomach's sake and his frequent infirmities.'", "To purify the local water supply.", "As a ceremonial act.", "To be sociable with unbelievers."],
        answer: "For his 'stomach's sake and his frequent infirmities.'",
        category: "Diet & Health",
        difficulty: "medium",
        explanation: "In 1 Timothy 5:23, Paul advises Timothy to use a little wine medicinally for his stomach problems and frequent illnesses, showing a practical health application rather than recreational use."
    },
    {
        id: "DH025",
        question: "What does the Bible say is 'a mocker' and 'raging'?",
        options: ["Strong pride", "An uncontrolled tongue", "Wine and strong drink", "A foolish companion"],
        answer: "Wine and strong drink",
        category: "Diet & Health",
        difficulty: "easy",
        explanation: "Proverbs 20:1 states, 'Wine is a mocker, strong drink is raging: and whosoever is deceived thereby is not wise,' warning about the deceptive and destructive nature of alcohol."
    },
    {
        id: "DH026",
        question: "The concept of 'rest' in the eight laws of health primarily emphasizes:",
        options: ["Getting eight hours of sleep per night.", "The importance of the Sabbath rest.", "Both daily and weekly rest for physical and spiritual rejuvenation.", "Taking regular vacations."],
        answer: "Both daily and weekly rest for physical and spiritual rejuvenation.",
        category: "Diet & Health",
        difficulty: "medium",
        explanation: "The health principle of rest encompasses both daily sleep and weekly Sabbath rest, providing physical restoration and spiritual renewal essential for holistic health."
    },
    {
        id: "DH027",
        question: "Which prophet was given a scroll to eat, which was sweet in his mouth but bitter in his stomach?",
        options: ["Isaiah", "Jeremiah", "Ezekiel", "John in Revelation"],
        answer: "John in Revelation",
        category: "Diet & Health",
        difficulty: "medium",
        explanation: "In Revelation 10:9-10, John was told to eat a little scroll that would be sweet in his mouth but bitter in his stomach, symbolizing the initially joyful but ultimately difficult message he would deliver."
    },
    {
        id: "DH028",
        question: "The 'tree of life' in Eden and in the New Jerusalem provides:",
        options: ["Knowledge of good and evil.", "Twelve manner of fruits and leaves for the healing of the nations.", "A symbol of God's eternal law.", "Shade and rest for the redeemed."],
        answer: "Twelve manner of fruits and leaves for the healing of the nations.",
        category: "Diet & Health",
        difficulty: "medium",
        explanation: "Revelation 22:2 describes the tree of life in the New Jerusalem as bearing twelve kinds of fruit and having leaves for the healing of the nations, symbolizing God's provision for eternal life and wholeness."
    },
    {
        id: "DH029",
        question: "What is the health principle taught by the story of the Israelites and the fiery serpents?",
        options: ["The danger of complaining about diet.", "The importance of looking to the divine remedy for healing.", "The need for a varied diet.", "The effectiveness of bronze as an antiseptic."],
        answer: "The importance of looking to the divine remedy for healing.",
        category: "Diet & Health",
        difficulty: "medium",
        explanation: "In Numbers 21:4-9, the Israelites were instructed to look at a bronze serpent on a pole to be healed from snake bites. Jesus referenced this story in John 3:14-15 as a symbol of looking to Him for spiritual healing and salvation."
    },
    {
        id: "DH030",
        question: "Gluttony is a sin against which principle?",
        options: ["Stewardship", "Temperance", "Love for neighbor", "Faith"],
        answer: "Temperance",
        category: "Diet & Health",
        difficulty: "easy",
        explanation: "Gluttony, or excessive eating, directly violates the principle of temperance (self-control), which calls for moderation and mastery over appetites and passions."
    },
    {
        id: "DH031",
        question: "What was the 'bitter water' ordeal of Numbers 5 intended to test for?",
        options: ["Dehydration", "A lie", "Infidelity", "Disease"],
        answer: "Infidelity",
        category: "Diet & Health",
        difficulty: "hard",
        explanation: "Numbers 5:11-31 describes a ritual where a woman suspected of adultery would drink bitter water. If she was guilty, the water would cause physical symptoms, but if innocent, she would be unharmed."
    },
    {
        id: "DH032",
        question: "What does the 'salt of the earth' metaphor imply about Christian influence?",
        options: ["It should be sharp and sometimes irritating.", "It should be a preservative and flavoring agent in society.", "It should be pure and distinct from the world.", "It should create thirst for the water of life."],
        answer: "It should be a preservative and flavoring agent in society.",
        category: "Diet & Health",
        difficulty: "medium",
        explanation: "In Matthew 5:13, Jesus uses salt as a metaphor for Christians' positive influence in preserving moral values and adding spiritual flavor to society, preventing moral decay."
    },
    {
        id: "DH033",
        question: "When Jesus turned water into wine at Cana, what does this miracle primarily show about His ministry?",
        options: ["His approval of social drinking.", "His power over the elements of nature.", "His concern for social customs and preventing shame.", "His desire to bring joy and abundance."],
        answer: "His power over the elements of nature.",
        category: "Diet & Health",
        difficulty: "medium",
        explanation: "John 2:1-11 records Jesus' first miracle, demonstrating His divine power over natural elements by transforming water into wine, establishing His authority as the Son of God at the beginning of His ministry."
    },
    // Additional Prophecy questions
    {
        id: "PR003",
        question: "In Daniel 2, what part of the statue represents the kingdom of Greece?",
        options: ["The head of gold", "The chest and arms of silver", "The belly and thighs of brass", "The legs of iron"],
        answer: "The belly and thighs of brass",
        category: "Prophecy",
        difficulty: "medium",
        explanation: "In Nebuchadnezzar's dream interpreted by Daniel, the belly and thighs of brass represented the Greek Empire under Alexander the Great, which followed the Medo-Persian Empire (silver) and preceded the Roman Empire (iron)."
    },
    {
        id: "PR004",
        question: "The '2300 days' of Daniel 8:14 are prophetically interpreted to mean:",
        options: ["2300 literal days", "2300 literal years", "A symbolic period of judgment", "The time from Babylon to the first coming of Christ"],
        answer: "2300 literal years",
        category: "Prophecy",
        difficulty: "hard",
        explanation: "Using the day-year principle of prophetic interpretation (Numbers 14:34, Ezekiel 4:6), Adventists understand the 2300 days to represent 2300 years, extending from 457 BC to 1844 AD."
    },
    {
        id: "PR005",
        question: "The 'Little Horn' of Daniel 7 and the 'Little Horn' of Daniel 8 are:",
        options: ["The exact same power in all aspects.", "Two different symbolic entities.", "The same power, but described with different characteristics and phases of its work.", "Antiochus Epiphanes in both chapters."],
        answer: "The same power, but described with different characteristics and phases of its work.",
        category: "Prophecy",
        difficulty: "hard",
        explanation: "Adventist interpretation sees both little horns as representing papal Rome, but from different perspectives: Daniel 7 emphasizes its political power and persecution, while Daniel 8 focuses on its religious activities against God's sanctuary and truth."
    },
    {
        id: "PR006",
        question: "What event marks the beginning of the 2300-day/year prophecy?",
        options: ["The decree of Cyrus to rebuild the temple.", "The decree of Darius to beautify the temple.", "The decree of Artaxerxes to restore and rebuild Jerusalem.", "The birth of Jesus Christ."],
        answer: "The decree of Artaxerxes to restore and rebuild Jerusalem.",
        category: "Prophecy",
        difficulty: "hard",
        explanation: "The 2300-day prophecy of Daniel 8:14 is understood to begin with Artaxerxes' decree in 457 BC (Ezra 7), which is also the starting point for the 70-week prophecy of Daniel 9."
    },
    {
        id: "PR007",
        question: "The 'Abomination of Desolation' mentioned by Jesus in Matthew 24 referred historically and primarily to:",
        options: ["The pagan standards of the Roman armies surrounding Jerusalem.", "The desecration of the temple by Antiochus Epiphanes.", "The papal power in the Middle Ages.", "A future desecration of a rebuilt temple."],
        answer: "The pagan standards of the Roman armies surrounding Jerusalem.",
        category: "Prophecy",
        difficulty: "medium",
        explanation: "Jesus' warning in Matthew 24:15-16 about the 'abomination of desolation' was fulfilled when Roman armies with their pagan standards surrounded Jerusalem in 70 AD, signaling Christians to flee the city before its destruction."
    },
    {
        id: "PR008",
        question: "In Revelation's prophecy, who is the 'woman clothed with the sun'?",
        options: ["The Virgin Mary", "The nation of literal Israel", "God's true church or people throughout history", "The New Jerusalem"],
        answer: "God's true church or people throughout history",
        category: "Prophecy",
        difficulty: "medium",
        explanation: "In Revelation 12:1, the woman clothed with the sun, with the moon under her feet and a crown of twelve stars, symbolizes God's faithful people throughout history, both in the Old and New Testament eras."
    },
    {
        id: "PR009",
        question: "The 'Mark of the Beast' is contrasted in Revelation with what?",
        options: ["The Seal of God", "The Name of the Father", "The Sign of the Son of Man", "The Token of the Covenant"],
        answer: "The Seal of God",
        category: "Prophecy",
        difficulty: "medium",
        explanation: "Revelation 7:3 and 14:1 describe God's people as being sealed in their foreheads with the Father's name, in direct contrast to those who receive the mark of the beast in Revelation 13:16-17."
    },
    {
        id: "PR010",
        question: "The '70 weeks' of Daniel 9 are 'determined' or 'cut off' from what longer prophecy?",
        options: ["The 1260 days", "The 1290 days", "The 2300 days", "The 1335 days"],
        answer: "The 2300 days",
        category: "Prophecy",
        difficulty: "hard",
        explanation: "The Hebrew word 'chathak' in Daniel 9:24, translated as 'determined,' literally means 'cut off.' The 70 weeks (490 years) are understood to be cut off from the beginning of the longer 2300-day prophecy of Daniel 8:14."
    },
    {
        id: "PR011",
        question: "The first beast of Revelation 13 (the sea beast) is best identified as:",
        options: ["The Roman Empire in its pagan phase.", "A composite of the beasts from Daniel 7, representing the Papal power.", "A future global political leader.", "The United States of America in prophecy."],
        answer: "A composite of the beasts from Daniel 7, representing the Papal power.",
        category: "Prophecy",
        difficulty: "medium",
        explanation: "The sea beast of Revelation 13:1-10 combines features of all four beasts from Daniel 7, symbolizing the Papal power that received its authority from pagan Rome and exercised dominion for 1260 years."
    },
    {
        id: "PR012",
        question: "The second beast of Revelation 13 (the land beast) is identified by what key characteristic?",
        options: ["It has seven heads and ten horns.", "It comes up out of the sea.", "It has two horns like a lamb and speaks like a dragon.", "It makes war with the saints."],
        answer: "It has two horns like a lamb and speaks like a dragon.",
        category: "Prophecy",
        difficulty: "medium",
        explanation: "Revelation 13:11 describes this beast as having lamb-like horns (symbolizing a gentle, Christ-like appearance) but speaking like a dragon (revealing its true satanic character), representing a power that appears peaceful but becomes persecuting."
    },
    {
        id: "PR013",
        question: "What does 'Babylon' in the book of Revelation symbolize?",
        options: ["The literal, rebuilt city of Babylon.", "The apostate religious systems of the world united against God.", "The corrupt political powers of the world.", "The city of Rome."],
        answer: "The apostate religious systems of the world united against God.",
        category: "Prophecy",
        difficulty: "medium",
        explanation: "In Revelation 17-18, Babylon the Great represents false religious systems that have departed from biblical truth, forming a worldwide confederation of apostasy in opposition to God's people in the last days."
    },
    {
        id: "PR014",
        question: "The 'Time of Trouble' in Daniel 12:1 is unique because:",
        options: ["It is a time of intense persecution.", "Michael stands up to deliver His people.", "It is a time such as never was since there was a nation.", "It occurs just before the second coming."],
        answer: "It is a time such as never was since there was a nation.",
        category: "Prophecy",
        difficulty: "medium",
        explanation: "Daniel 12:1 describes this period as 'a time of trouble, such as never was since there was a nation,' indicating its unprecedented severity and global impact just before Christ's return."
    },
    {
        id: "PR015",
        question: "The prophetic term 'a time, times, and half a time' corresponds to what other prophetic period?",
        options: ["2300 days", "490 years", "1260 days/years", "3 ½ years"],
        answer: "1260 days/years",
        category: "Prophecy",
        difficulty: "medium",
        explanation: "In prophetic symbolism, 'a time' (1 year), 'times' (2 years), and 'half a time' (half a year) equals 3.5 prophetic years or 1260 prophetic days, which using the day-year principle equals 1260 literal years."
    },
    {
        id: "PR016",
        question: "In the cleansing of the sanctuary prophecy, what does the 'sanctuary' refer to after the cross?",
        options: ["The temple in Jerusalem.", "The earth.", "The heart of the believer.", "The heavenly sanctuary where Christ ministers."],
        answer: "The heavenly sanctuary where Christ ministers.",
        category: "Prophecy",
        difficulty: "medium",
        explanation: "Hebrews 8:1-2 identifies Christ as a minister of 'the true tabernacle, which the Lord pitched, and not man,' referring to the heavenly sanctuary where Christ performs His high priestly ministry after His ascension."
    },
    {
        id: "PR017",
        question: "The three angels' messages of Revelation 14 are primarily a call to:",
        options: ["Prepare for the seven last plagues.", "Worship the Creator and come out of Babylon before the final judgment.", "Understand the prophecies of Daniel.", "Identify the antichrist power."],
        answer: "Worship the Creator and come out of Babylon before the final judgment.",
        category: "Prophecy",
        difficulty: "medium",
        explanation: "Revelation 14:6-12 contains three messages: proclaiming the everlasting gospel and calling people to worship the Creator, announcing Babylon's fall, and warning against receiving the mark of the beast—collectively a call to true worship before the final judgment."
    },
    {
        id: "PR018",
        question: "What is the main theme of the book of Revelation?",
        options: ["The identification of the Antichrist.", "A timeline of last-day events.", "The ultimate victory of Christ and His people over evil.", "The history of the Christian church."],
        answer: "The ultimate victory of Christ and His people over evil.",
        category: "Prophecy",
        difficulty: "easy",
        explanation: "While Revelation contains many prophetic elements, its overarching theme is the triumph of Christ and His followers over Satan and evil powers, culminating in the establishment of God's eternal kingdom."
    },
    {
        id: "PR019",
        question: "The 'Daily' (tamid) that was 'taken away' by the Little Horn in Daniel 8 refers to:",
        options: ["The daily sacrifice in the Jewish temple.", "The continual pagan worship that was supplanted by papal worship.", "Christ's continual priestly ministry in heaven, which was obscured by an earthly priesthood.", "The daily reading of scripture."],
        answer: "Christ's continual priestly ministry in heaven, which was obscured by an earthly priesthood.",
        category: "Prophecy",
        difficulty: "hard",
        explanation: "In Adventist interpretation, the 'daily' or 'continual' (tamid) in Daniel 8:11-13 represents Christ's ongoing intercessory ministry in the heavenly sanctuary, which was obscured when the papal system established an earthly priesthood claiming to mediate between God and humans."
    },
    {
        id: "PR020",
        question: "The seven trumpets of Revelation primarily depict:",
        options: ["The final seven plagues.", "Judgments on the Roman Empire and apostate Christianity throughout history.", "The preaching of the gospel to the world.", "The rewards of the righteous."],
        answer: "Judgments on the Roman Empire and apostate Christianity throughout history.",
        category: "Prophecy",
        difficulty: "hard",
        explanation: "In Adventist historicist interpretation, the seven trumpets of Revelation 8-11 symbolize a series of judgments throughout history, particularly on the Roman Empire in both its pagan and papal phases, as well as on apostate Christianity."
    },
    {
        id: "PR021",
        question: "The 'two witnesses' of Revelation 11 are best understood as:",
        options: ["Enoch and Elijah.", "The law and the prophets.", "The Old and New Testaments.", "The church and the state."],
        answer: "The Old and New Testaments.",
        category: "Prophecy",
        difficulty: "medium",
        explanation: "Revelation 11:3-12 describes two witnesses who prophesy, are killed, and then resurrected. Adventist interpretation identifies these as the Old and New Testaments, particularly during their suppression and subsequent revival during the French Revolution period."
    },
    {
        id: "PR022",
        question: "What is the key difference between the seven seals and the seven trumpets?",
        options: ["The seals are about the church's internal history; the trumpets are external political events.", "The seals are in heaven; the trumpets are on earth.", "The seals are warnings; the trumpets are final judgments.", "There is no significant difference; they are parallel prophecies."],
        answer: "The seals are about the church's internal history; the trumpets are external political events.",
        category: "Prophecy",
        difficulty: "hard",
        explanation: "In traditional Adventist interpretation, the seven seals (Revelation 6-8:1) primarily relate to the spiritual condition and experiences of God's church throughout history, while the seven trumpets (Revelation 8-11) focus on political and military judgments affecting the enemies of God's people."
    },
    {
        id: "PR023",
        question: "The 'King of the North' and 'King of the South' in Daniel 11, in their final application, represent:",
        options: ["Russia and Egypt.", "The Papacy and Atheism/Secularism.", "The United States and China.", "Protestantism and Catholicism."],
        answer: "The Papacy and Atheism/Secularism.",
        category: "Prophecy",
        difficulty: "hard",
        explanation: "In Adventist eschatology, particularly as developed by Uriah Smith and others, the King of the North in the final portions of Daniel 11 represents the Papacy, while the King of the South represents atheistic or secular powers that opposed religious authority, as exemplified by France during the Revolution."
    },
    {
        id: "PR024",
        question: "The 1,000 years (millennium) of Revelation 20 is a period when:",
        options: ["The righteous reign on a purified earth.", "Satan is bound on a desolate, uninhabited earth while the saints are in heaven.", "Sinners are given a second chance for salvation.", "Christ reigns politically from Jerusalem."],
        answer: "Satan is bound on a desolate, uninhabited earth while the saints are in heaven.",
        category: "Prophecy",
        difficulty: "medium",
        explanation: "Adventist eschatology teaches that during the millennium described in Revelation 20:1-6, the righteous are in heaven with Christ while Satan is confined to the desolate earth, effectively 'bound' by circumstances since there are no humans left to tempt."
    },
    {
        id: "PR025",
        question: "The 'Investigative Judgment' is a doctrine based on the cleansing of the sanctuary in Daniel 8:14. It is best described as:",
        options: ["A judgment to determine who is worthy of salvation.", "A process of reviewing the records of all professed believers to vindicate God's character.", "The final punishment of the wicked.", "Christ's work of forgiving sins."],
        answer: "A process of reviewing the records of all professed believers to vindicate God's character.",
        category: "Prophecy",
        difficulty: "hard",
        explanation: "The Investigative Judgment, beginning in 1844, involves Christ reviewing the records of professed believers before His return. It's not about determining worthiness but vindicating God's justice and mercy."
    },
    {
        id: "PR026",
        question: "The 'deadly wound' of the first beast of Revelation 13, which was later healed, is historically identified as:",
        options: ["The Protestant Reformation.", "The capture of the Pope by Napoleon's general in 1798.", "The fall of the Western Roman Empire.", "The Great Schism of 1054."],
        answer: "The capture of the Pope by Napoleon's general in 1798.",
        category: "Prophecy",
        difficulty: "medium",
        explanation: "In 1798, General Berthier, under Napoleon's orders, entered Rome and took Pope Pius VI captive, temporarily ending papal political power. This event is seen as fulfilling the prophecy of the beast receiving a deadly wound that would later heal."
    },
    {
        id: "PR027",
        question: "The 'marriage supper of the Lamb' takes place:",
        options: ["On earth at the beginning of the millennium.", "In heaven after the close of probation and before the second coming.", "In the New Jerusalem after the millennium.", "Metaphorically in the heart of every believer."],
        answer: "In the New Jerusalem after the millennium.",
        category: "Prophecy",
        difficulty: "medium",
        explanation: "Revelation 19:7-9 describes the marriage supper of the Lamb. In Adventist eschatology, this celebration occurs after the millennium when the New Jerusalem descends to earth and all the redeemed are gathered together."
    },
    {
        id: "PR028",
        question: "The seven heads of the dragon in Revelation 12 and the sea beast in Revelation 13 represent:",
        options: ["The seven hills of Rome.", "Seven specific kings or emperors.", "The major world powers or kingdoms through which Satan has worked to persecute God's people.", "The seven deadly sins."],
        answer: "The major world powers or kingdoms through which Satan has worked to persecute God's people.",
        category: "Prophecy",
        difficulty: "hard",
        explanation: "In Adventist prophetic interpretation, these seven heads symbolize the succession of major world powers through history that Satan has used to oppose God's people: Egypt, Assyria, Babylon, Medo-Persia, Greece, pagan Rome, and papal Rome."
    },
    {
        id: "PR029",
        question: "What is the primary sin of end-time Babylon?",
        options: ["Idolatry and sun worship.", "Making all nations drink the wine of her false doctrines.", "Persecuting the saints.", "Political corruption."],
        answer: "Making all nations drink the wine of her false teachings. While Babylon is also characterized by persecution and idolatry, her primary offense is spreading false doctrines that lead people away from biblical truth."
    },
    {
        id: "PR030",
        question: "The 'great earthquake' in the sixth seal and the seventh plague are:",
        options: ["The same literal, final earthquake.", "A symbolic shaking of nations and a final literal earthquake.", "Two different literal earthquakes at different times.", "The Lisbon earthquake of 1755 and a future earthquake."],
        answer: "A symbolic shaking of nations and a final literal earthquake.",
        category: "Prophecy",
        difficulty: "medium",
        explanation: "In Adventist interpretation, the earthquake in the sixth seal (Revelation 6:12) is often associated with political and social upheaval, while the earthquake in the seventh plague (Revelation 16:18) is understood as a literal, unprecedented earthquake that occurs at Christ's return."
    },
    {
        id: "PR031",
        question: "The 'silence in heaven for about half an hour' in Revelation 8:1 is interpreted to be:",
        options: ["A moment of awe before the trumpets sound.", "The time when all the angelic host accompanies Jesus to earth for the Second Coming.", "A pause in the heavenly ministry.", "A period of peace on earth."],
        answer: "The time when all the angelic host accompanies Jesus to earth for the Second Coming.",
        category: "Prophecy",
        difficulty: "hard",
        explanation: "Using the day-year principle where a prophetic day equals a literal year, half an hour would be about a week. This is understood as the period when heaven is empty because all angels are accompanying Christ at His return (Matthew 25:31)."
    },
    {
        id: "PR032",
        question: "The ultimate purpose of prophecy is to:",
        options: ["Satisfy our curiosity about the future.", "Allow us to set dates for Christ's return.", "Give hope and produce a people prepared to meet Jesus.", "Prove the Bible is true."],
        answer: "Give hope and produce a people prepared to meet Jesus.",
        category: "Prophecy",
        difficulty: "easy",
        explanation: "While prophecy does demonstrate the Bible's divine inspiration, its primary purpose is not intellectual satisfaction but spiritual preparation. As 2 Peter 1:19 suggests, prophecy is a light shining in darkness, guiding believers until Christ's return."
    },
    // Additional Last Day Events questions
    {
        id: "LDE003",
        question: "According to 'Last Day Events,' the primary cause of the 'shaking' is:",
        options: [
            "The enforcement of the universal Sunday law.",
            "The reception of the latter rain by the faithful.",
            "The introduction of false theories and heresies within the church.",
            "The straight testimony called forth by the counsel of the True Witness to the Laodiceans."
        ],
        answer: "The straight testimony called forth by the counsel of the True Witness to the Laodiceans.",
        category: "Last Day Events",
        difficulty: "medium",
        explanation: "Ellen White identifies the 'straight testimony' of Revelation 3:14-22 (the Laodicean message) as the primary catalyst for the shaking, as it calls for repentance and reformation that some will accept and others will reject."
    },
    {
        id: "LDE004",
        question: "The Latter Rain is given for what specific purpose?",
        options: [
            "To perfect the characters of the saints.",
            "To give power for the proclamation of the Loud Cry.",
            "To heal all the physical infirmities of God's people.",
            "To seal the 144,000."
        ],
        answer: "To give power for the proclamation of the Loud Cry.",
        category: "Last Day Events",
        difficulty: "medium",
        explanation: "The Latter Rain (outpouring of the Holy Spirit) is primarily given to empower God's people to proclaim the final warning message (the Loud Cry) with great power, similar to how the Early Rain at Pentecost empowered the apostles."
    },
    {
        id: "LDE005",
        question: "What is the one great obstacle that, above all others, hinders the reception of the Latter Rain?",
        options: [
            "Failure to pay a faithful tithe.",
            "The presence of unconfessed sin.",
            "Constant strife and disunity among believers.",
            "A lack of knowledge of prophetic truth."
        ],
        answer: "Constant strife and disunity among believers.",
        category: "Last Day Events",
        difficulty: "medium",
        explanation: "Ellen White emphasized that disunity and strife among believers is the greatest hindrance to receiving the Holy Spirit's power, as it directly contradicts Christ's prayer for unity in John 17 and the unity experienced at Pentecost."
    },
    {
        id: "LDE006",
        question: "The 'seal of God' is described as:",
        options: [
            "A physical mark on the forehead.",
            "The indwelling of the Holy Spirit.",
            "An intellectual and spiritual settling into the truth so one cannot be moved.",
            "The keeping of the seventh-day Sabbath."
        ],
        answer: "An intellectual and spiritual settling into the truth so one cannot be moved.",
        category: "Last Day Events",
        difficulty: "medium",
        explanation: "While the Sabbath is the sign of God's authority and the Holy Spirit is involved in the sealing process, the seal itself is described as a complete settling into the truth, both intellectually and spiritually, that cannot be shaken by trial or temptation."
    },
    {
        id: "LDE007",
        question: "When the national Sunday law is passed, what is the signal for God's people to do?",
        options: [
            "To launch a massive public protest campaign.",
            "To openly defy the law and continue working as a witness.",
            "To leave the large cities and move to more retired places.",
            "To petition the government for religious exemptions."
        ],
        answer: "To leave the large cities and move to more retired places.",
        category: "Last Day Events",
        difficulty: "medium",
        explanation: "Ellen White indicated that the passing of Sunday laws would be the signal for God's people to leave urban areas for more rural locations where they could continue to worship according to conscience and be better prepared for the coming crisis."
    },
    {
        id: "LDE008",
        question: "During the 'Time of Jacob's Trouble,' what is the source of the saints' deepest anguish?",
        options: [
            "The fear of death by the universal decree.",
            "The intense physical suffering from the plagues.",
            "The fear that they have some unconfessed sin and are cut off from God.",
            "The taunts of the wicked who seem to be prospering."
        ],
        answer: "The fear that they have some unconfessed sin and are cut off from God.",
        category: "Last Day Events",
        difficulty: "hard",
        explanation: "Like Jacob wrestling with the angel, the saints during this time will experience intense spiritual anguish, fearing they might have unconfessed sins that separate them from God, rather than primarily fearing physical harm or death."
    },
    {
        id: "LDE009",
        question: "Satan's 'crowning act' in the drama of deception will be:",
        options: [
            "Making fire come down from heaven in the sight of men.",
            "The union of Protestantism, Catholicism, and Spiritualism.",
            "His personal impersonation of Jesus Christ, appearing as a majestic being of dazzling brightness.",
            "Gaining control of the world's political leaders."
        ],
        answer: "His personal impersonation of Jesus Christ, appearing as a majestic being of dazzling brightness.",
        category: "Last Day Events",
        difficulty: "medium",
        explanation: "Ellen White describes this as Satan's most convincing deception, where he will appear as Christ in glory, blessing Sunday-keeping and claiming to have changed the Sabbath, deceiving all except those thoroughly grounded in Scripture."
    },
    {
        id: "LDE010",
        question: "Probation closes for the world when:",
        options: [
            "The first of the seven last plagues begins to fall.",
            "The national Sunday law is enforced.",
            "Christ throws down the censer and ceases His intercession in the sanctuary.",
            "The Loud Cry message has reached every person."
        ],
        answer: "Christ throws down the censer and ceases His intercession in the sanctuary.",
        category: "Last Day Events",
        difficulty: "medium",
        explanation: "Based on the imagery in Revelation 15:8, when Christ completes His mediatorial work in the heavenly sanctuary and declares 'It is done,' probation closes for humanity, after which the plagues begin to fall."
    },
    {
        id: "LDE011",
        question: "The 'little time of trouble' is the period:",
        options: [
            "After the close of probation.",
            "During the first four plagues.",
            "Just before the close of probation, while the decrees are being passed.",
            "Immediately after the Second Coming."
        ],
        answer: "Just before the close of probation, while the decrees are being passed.",
        category: "Last Day Events",
        difficulty: "medium",
        explanation: "This period is distinguished from the 'great time of trouble' (which follows the close of probation) and is characterized by increasing persecution, Sunday laws, and economic restrictions against God's people while probation is still open."
    },
    {
        id: "LDE012",
        question: "What will be the primary characteristic of the final movements before the close of probation?",
        options: [
            "They will be slow and gradual.",
            "They will be rapid ones.",
            "They will be primarily political.",
            "They will be centered in the Middle East."
        ],
        answer: "They will be rapid ones.",
        category: "Last Day Events",
        difficulty: "easy",
        explanation: "Ellen White repeatedly emphasized that the final events would unfold with surprising rapidity, contrary to expectations of gradual change, as Satan makes his final desperate efforts and God's work concludes with power."
    },
    {
        id: "LDE013",
        question: "During the seven last plagues, God's people are protected, but they will still suffer from:",
        options: [
            "The boils from the first plague.",
            "Mental anguish and perplexity.",
            "The darkness of the fifth plague.",
            "The hailstones of the seventh plague."
        ],
        answer: "Mental anguish and perplexity.",
        category: "Last Day Events",
        difficulty: "medium",
        explanation: "While God's people are protected from the physical effects of the plagues (which fall only on those with the mark of the beast), they will still experience mental and spiritual anguish as they witness the suffering around them and await deliverance."
    },
    {
        id: "LDE014",
        question: "The 'Image to the Beast' is formed when:",
        options: [
            "The Papacy regains its lost power.",
            "The United States passes a national Sunday law.",
            "The leading churches in the U.S. influence the state to enforce their dogmas.",
            "A world council of churches is formed."
        ],
        answer: "The leading churches in the U.S. influence the state to enforce their dogmas.",
        category: "Last Day Events",
        difficulty: "hard",
        explanation: "The 'image' is formed when Protestant churches in America follow the pattern of the medieval church by using civil power to enforce religious decrees, particularly Sunday observance, thus 'imaging' or copying the papal system."
    },
    {
        id: "LDE015",
        question: "What happens to the 144,000 that is unique to them?",
        options: [
            "They are the only ones saved in the last generation.",
            "They live through the Time of Jacob's Trouble without seeing death.",
            "They are the first to be resurrected.",
            "They are taken to heaven before the plagues."
        ],
        answer: "They live through the Time of Jacob's Trouble without seeing death.",
        category: "Last Day Events",
        difficulty: "medium",
        explanation: "The 144,000 are described as a special group who remain alive through the final crisis, are translated without seeing death, and have a unique experience and testimony among the redeemed in heaven."
    },
    {
        id: "LDE016",
        question: "The 'Loud Cry' is essentially:",
        options: [
            "A new message not previously preached.",
            "The repetition of the second angel's message with added power.",
            "A call for God's people to leave the cities.",
            "The announcement of the exact time of Christ's coming."
        ],
        answer: "The repetition of the second angel's message with added power.",
        category: "Last Day Events",
        difficulty: "medium",
        explanation: "The Loud Cry is the final proclamation of the second angel's message ('Babylon is fallen') from Revelation 14:8 and 18:1-4, calling God's people to come out of Babylon, but with greater power and clarity as the final crisis develops."
    },
    {
        id: "LDE017",
        question: "In the final crisis, what will be the great test for the people of God?",
        options: [
            "The willingness to suffer martyrdom.",
            "Loyalty to the Sabbath truth.",
            "The ability to perform miracles.",
            "Having enough food and water stored."
        ],
        answer: "Loyalty to the Sabbath truth.",
        category: "Last Day Events",
        difficulty: "medium",
        explanation: "Ellen White consistently emphasized that the Sabbath will be the final test of loyalty in the end-time crisis, as it represents obedience to God's authority versus human authority, particularly when Sunday observance is enforced by law."
    },
    {
        id: "LDE018",
        question: "What will God's people be doing during the millennium in heaven?",
        options: [
            "Resting from their earthly labors.",
            "Participating in the judgment of the wicked and fallen angels.",
            "Building their mansions in the New Jerusalem.",
            "Continually singing praises around the throne."
        ],
        answer: "Participating in the judgment of the wicked and fallen angels.",
        category: "Last Day Events",
        difficulty: "medium",
        explanation: "Revelation 20:4 indicates the redeemed will sit on thrones and participate in judgment. Ellen White elaborates that during the millennium, the saints will review the records of the wicked to understand God's justice before their final destruction."
    },
    {
        id: "LDE019",
        question: "The 'death decree' against the saints will be nullified by what event?",
        options: [
            "A change of heart by the world's leaders.",
            "The secret rapture of the church.",
            "The voice of God announcing the day and hour of Jesus' coming.",
            "The intervention of heavenly angels."
        ],
        answer: "The voice of God announcing the day and hour of Jesus' coming.",
        category: "Last Day Events",
        difficulty: "hard",
        explanation: "Ellen White describes that just as the death decree is about to be executed, God's voice will be heard declaring the day and hour of Jesus' return, delivering His people and causing confusion among their enemies."
    },
    {
        id: "LDE020",
        question: "The primary reason EGW gives for country living is:",
        options: [
            "To be able to grow your own food during the time of trouble.",
            "To escape the destruction of the cities by the plagues.",
            "To find a place of refuge from persecution.",
            "To escape the corrupting moral influences of the cities, especially for the children."
        ],
        answer: "To escape the corrupting moral influences of the cities, especially for the children.",
        category: "Last Day Events",
        difficulty: "medium",
        explanation: "While Ellen White mentions practical benefits of rural living and eventual physical dangers in cities, her primary emphasis was on the moral and spiritual advantages of country environments, particularly for raising children away from corrupting urban influences."
    },
    {
        id: "LDE021",
        question: "Spiritualism will play what role in the final deception?",
        options: [
            "It will be the third partner in the threefold union with Protestantism and Catholicism.",
            "It will be a minor deception for the gullible.",
            "It will impersonate dead apostles and pioneers to deceive Adventists.",
            "It will be confined to non-Christian nations."
        ],
        answer: "It will be the third partner in the threefold union with Protestantism and Catholicism.",
        category: "Last Day Events",
        difficulty: "medium",
        explanation: "Ellen White describes a threefold union of apostate Protestantism, Roman Catholicism, and spiritualism that will work together in the final crisis. Spiritualism provides the supernatural element that gives power to this coalition against God's people."
    },
    {
        id: "LDE022",
        question: "When will it be too late to get our characters ready for translation?",
        options: [
            "When the Sunday law is passed.",
            "When the latter rain begins to fall.",
            "When the plagues begin to fall.",
            "When the death decree is issued."
        ],
        answer: "When the latter rain begins to fall.",
        category: "Last Day Events",
        difficulty: "hard",
        explanation: "Ellen White teaches that character development must be completed before the latter rain falls, as this special outpouring of the Holy Spirit is not to perfect character but to empower for witnessing. Those who delay preparation will not receive this blessing."
    },
    {
        id: "LDE023",
        question: "The 'time of trouble, such as never was' begins:",
        options: [
            "At the moment the national Sunday law is passed.",
            "At the moment probation closes.",
            "When the death decree is issued.",
            "When Satan impersonates Christ."
        ],
        answer: "At the moment probation closes.",
        category: "Last Day Events",
        difficulty: "medium",
        explanation: "Based on Daniel 12:1, Ellen White identifies the close of probation (when Christ ceases His mediatorial work in the heavenly sanctuary) as the beginning of the 'time of trouble such as never was,' distinguished from the 'little time of trouble' that precedes it."
    },
    {
        id: "LDE024",
        question: "What is the 'strange act' of God?",
        options: [
            "The Second Coming of Christ.",
            "The translation of the saints.",
            "The destruction of the wicked by fire.",
            "The binding of Satan."
        ],
        answer: "The destruction of the wicked by fire.",
        category: "Last Day Events",
        difficulty: "medium",
        explanation: "Based on Isaiah 28:21, Ellen White describes the final destruction of the wicked as God's 'strange act' because it is contrary to His loving nature. God takes no pleasure in the death of the wicked, making this act of judgment 'strange' or foreign to His character of mercy."
    },
    {
        id: "LDE025",
        question: "In the end, God's people will gain the victory through:",
        options: [
            "Their own strength and willpower.",
            "The help of powerful, sympathetic governments.",
            "Clever arguments and debates.",
            "Clinging to the promises of God by faith."
        ],
        answer: "Clinging to the promises of God by faith.",
        category: "Last Day Events",
        difficulty: "easy",
        explanation: "Ellen White emphasizes that in the final crisis, when all earthly support is cut off, God's people will triumph not through human strength or reasoning but through simple faith in God's promises, just as Jesus overcame Satan's temptations with 'It is written.'"
    },
    {
        id: "LDE026",
        question: "The health message is described as:",
        options: [
            "A good suggestion for a better life.",
            "The right arm of the third angel's message.",
            "A new and improved gospel.",
            "A means to avoid all sickness."
        ],
        answer: "The right arm of the third angel's message.",
        category: "Last Day Events",
        difficulty: "easy",
        explanation: "Ellen White consistently used this metaphor to illustrate how the health message opens doors for the gospel, serves others practically, and prepares people physically and mentally to receive spiritual truth and withstand the final crisis."
    },
    {
        id: "LDE027",
        question: "Before the final visitation of God's judgments, there will be among God's people:",
        options: [
            "A period of unprecedented growth and prosperity.",
            "A time of perfect unity and peace.",
            "A revival of primitive godliness not seen since apostolic times.",
            "A great falling away from the truth."
        ],
        answer: "A revival of primitive godliness not seen since apostolic times.",
        category: "Last Day Events",
        difficulty: "medium",
        explanation: "Ellen White predicted that before the end, there would be a powerful revival of authentic, apostolic Christianity among God's remnant, characterized by deep spirituality, biblical faithfulness, and the power of the Holy Spirit similar to Pentecost."
    },
    {
        id: "LDE028",
        question: "What will happen to many of the saints just before the time of trouble?",
        options: [
            "They will be laid to rest (die) to be spared the severest trials.",
            "They will be taken to heaven in a secret rapture.",
            "They will be given supernatural strength.",
            "They will all move to the country."
        ],
        answer: "They will be laid to rest (die) to be spared the severest trials.",
        category: "Last Day Events",
        difficulty: "medium",
        explanation: "Ellen White indicates that many faithful believers, particularly the elderly and infirm, will be mercifully laid to rest before the final crisis, sparing them from experiencing the time of trouble while still being saved at the resurrection."
    },
    {
        id: "LDE029",
        question: "The final message of warning to the world will be accompanied by:",
        options: [
            "Great financial contributions.",
            "The power of human persuasion and logic.",
            "The working of miracles, healing the sick, and other wonders.",
            "Political endorsements."
        ],
        answer: "The working of miracles, healing the sick, and other wonders.",
        category: "Last Day Events",
        difficulty: "medium",
        explanation: "Ellen White describes the latter rain outpouring of the Holy Spirit as including supernatural manifestations similar to Pentecost, with miracles, healings, and other signs accompanying the final proclamation of truth during the Loud Cry."
    },
    {
        id: "LDE030",
        question: "The great final test will come over the issue of:",
        options: [
            "The deity of Christ.",
            "The nature of man in death.",
            "The authority of the church versus the authority of God's word.",
            "The mark of the beast."
        ],
        answer: "The mark of the beast.",
        category: "Last Day Events",
        difficulty: "medium",
        explanation: "Ellen White teaches that the final test will center on the mark of the beast issue, which fundamentally represents a choice between human authority (represented by Sunday observance) and divine authority (represented by Sabbath observance)."
    },
    {
        id: "LDE031",
        question: "When Satan impersonates Christ, what one thing will he NOT be able to counterfeit?",
        options: [
            "The love and compassion in Christ's voice.",
            "The manner of His coming in the clouds with all the angels.",
            "The healing of the sick.",
            "The quoting of Scripture."
        ],
        answer: "The manner of His coming in the clouds with all the angels.",
        category: "Last Day Events",
        difficulty: "medium",
        explanation: "Ellen White explains that while Satan can appear as a majestic being of dazzling brightness and perform miracles, he cannot duplicate Christ's glorious return as described in Scripture—coming in the clouds with all the holy angels, visible to everyone simultaneously around the world."
    },
    {
        id: "LDE032",
        question: "What is the 'special resurrection'?",
        options: [
            "The resurrection of all the righteous at the Second Coming.",
            "The resurrection of Moses.",
            "A resurrection of those who died in faith in the third angel's message, plus those who pierced Christ.",
            "The resurrection of the wicked at the end of the 1000 years."
        ],
        answer: "A resurrection of those who died in faith in the third angel's message, plus those who pierced Christ.",
        category: "Last Day Events",
        difficulty: "hard",
        explanation: "Ellen White describes a special, limited resurrection that occurs just before Christ's return. This includes both faithful believers who died under the third angel's message and those who participated in Christ's crucifixion, allowing both groups to witness His second coming."
    },
    // Bible People questions (user provided)
    {
        id: "BP004",
        question: "Which individual was a king and a priest, receiving tithes from Abraham?",
        options: ["David", "Aaron", "Melchizedek", "Jethro"],
        answer: "Melchizedek",
        category: "Bible People",
        difficulty: "medium",
        explanation: "Genesis 14:18. He was king of Salem and priest of the Most High God. While David performed some priestly actions and Aaron was the first High Priest, only Melchizedek held both offices in this context."
    },
    {
        id: "BP005",
        question: "Who was the first person in the Bible explicitly recorded as becoming drunk?",
        options: ["Lot", "Noah", "Samson", "Nabal"],
        answer: "Noah",
        category: "Bible People",
        difficulty: "easy",
        explanation: "Genesis 9:21. After the flood, he planted a vineyard, drank the wine, and became drunk. Lot's drunkenness came later."
    },
    {
        id: "BP006",
        question: "Which prophet was commanded by God to marry a prostitute as a sign to Israel?",
        options: ["Jeremiah", "Ezekiel", "Hosea", "Amos"],
        answer: "Hosea",
        category: "Bible People",
        difficulty: "medium",
        explanation: "Hosea 1:2. God commanded him to marry Gomer, a woman of harlotry, to symbolize Israel's unfaithfulness to God."
    },
    {
        id: "BP007",
        question: "Which king was struck with leprosy for presumptuously entering the temple to burn incense?",
        options: ["Saul", "Jeroboam", "Uzziah", "Ahaz"],
        answer: "Uzziah",
        category: "Bible People",
        difficulty: "medium",
        explanation: "2 Chronicles 26:16-21. He usurped the role of the priests and was struck with leprosy on his forehead."
    },
    {
        id: "BP008",
        question: "Who was the tax collector that Jesus called to be one of His twelve disciples?",
        options: ["Zacchaeus", "Matthew (Levi)", "Simon the Zealot", "Joseph of Arimathea"],
        answer: "Matthew (Levi)",
        category: "Bible People",
        difficulty: "easy",
        explanation: "Matthew 9:9. While Zacchaeus was a chief tax collector who had a profound encounter with Jesus, he was not called to be one of the twelve."
    },
    {
        id: "BP009",
        question: "Who was struck dead for lying to the Holy Spirit about the proceeds from selling a piece of property?",
        options: ["Simon Magus", "Sapphira", "Ananias", "Elymas the sorcerer"],
        answer: "Ananias",
        category: "Bible People",
        difficulty: "medium",
        explanation: "Acts 5:1-5. His wife, Sapphira, was also struck dead for the same lie, but Ananias was first."
    },
    {
        id: "BP010",
        question: "Which of Jacob's sons intervened to save Joseph from being killed by his brothers?",
        options: ["Judah", "Reuben", "Simeon", "Levi"],
        answer: "Reuben",
        category: "Bible People",
        difficulty: "medium",
        explanation: "Genesis 37:21-22. He suggested throwing Joseph into a pit, intending to rescue him later. Judah later suggested selling him to the Ishmaelites."
    },
    {
        id: "BP011",
        question: "Who was Timothy's mother, known for her sincere faith?",
        options: ["Lois", "Priscilla", "Lydia", "Eunice"],
        answer: "Eunice",
        category: "Bible People",
        difficulty: "medium",
        explanation: "2 Timothy 1:5. Paul mentions the faith that dwelt first in his grandmother Lois, and then in his mother Eunice."
    },
    {
        id: "BP012",
        question: "Which leader's hands were held up during a battle to ensure Israel's victory?",
        options: ["Joshua", "Gideon", "Moses", "David"],
        answer: "Moses",
        category: "Bible People",
        difficulty: "easy",
        explanation: "Exodus 17:11-12. Aaron and Hur held up Moses' hands during the battle against the Amalekites."
    },
    {
        id: "BP013",
        question: "Who was the first king of the Northern Kingdom of Israel after the nation divided?",
        options: ["Saul", "Rehoboam", "Jeroboam", "Omri"],
        answer: "Jeroboam",
        category: "Bible People",
        difficulty: "medium",
        explanation: "1 Kings 12:20. Rehoboam, Solomon's son, was king over Judah (the Southern Kingdom), but the ten northern tribes made Jeroboam their king."
    },
    {
        id: "BP014",
        question: "Which couple did Paul work with as a tentmaker in Corinth?",
        options: ["Ananias and Sapphira", "Philemon and Apphia", "Aquila and Priscilla", "Andronicus and Junia"],
        answer: "Aquila and Priscilla",
        category: "Bible People",
        difficulty: "medium",
        explanation: "Acts 18:1-3. They shared the same trade, and Paul stayed and worked with them."
    },
    {
        id: "BP015",
        question: "Who was the high priest who presided over the trial that condemned Jesus to death?",
        options: ["Annas", "Caiaphas", "Eli", "Zacharias"],
        answer: "Caiaphas",
        category: "Bible People",
        difficulty: "medium",
        explanation: "Matthew 26:57. Although Jesus was first taken to Annas, Caiaphas's father-in-law, Caiaphas was the official high priest that year and conducted the formal trial."
    },
    {
        id: "BP016",
        question: "Which woman is listed in the genealogy of Jesus in Matthew and was the mother of Boaz?",
        options: ["Ruth", "Tamar", "Rahab", "Bathsheba"],
        answer: "Rahab",
        category: "Bible People",
        difficulty: "hard",
        explanation: "Matthew 1:5. She was the mother of Boaz. Ruth was Boaz's wife and mother of Obed."
    },
    {
        id: "BP017",
        question: "Who was chosen to replace Judas Iscariot among the twelve apostles?",
        options: ["Barnabas", "Stephen", "Matthias", "Joseph called Barsabas"],
        answer: "Matthias",
        category: "Bible People",
        difficulty: "medium",
        explanation: "Acts 1:26. He was chosen by lot over Joseph called Barsabas."
    },
    {
        id: "BP018",
        question: "Which prophet was fed by ravens at the brook Cherith?",
        options: ["Elisha", "Elijah", "Isaiah", "John the Baptist"],
        answer: "Elijah",
        category: "Bible People",
        difficulty: "easy",
        explanation: "1 Kings 17:4-6. God commanded the ravens to bring him bread and meat there."
    },
    {
        id: "BP019",
        question: "Who was the silversmith in Ephesus who started a riot because Paul's preaching was hurting his idol-making business?",
        options: ["Alexander the coppersmith", "Demetrius", "Philetus", "Diotrephes"],
        answer: "Demetrius",
        category: "Bible People",
        difficulty: "medium",
        explanation: "Acts 19:24-29. Alexander the coppersmith is mentioned by Paul as having done him much harm, but Demetrius led the riot in Ephesus."
    },
    {
        id: "BP020",
        question: "What was the name of Abraham's nephew who traveled with him from Ur?",
        options: ["Eliezer", "Lot", "Ishmael", "Isaac"],
        answer: "Lot",
        category: "Bible People",
        difficulty: "easy",
        explanation: "Genesis 12:5. Lot was the son of Abraham's brother Haran."
    },
    {
        id: "BP021",
        question: "Who was the first of the twelve apostles to be martyred?",
        options: ["Stephen", "Peter", "James, the son of Zebedee", "Andrew"],
        answer: "James, the son of Zebedee",
        category: "Bible People",
        difficulty: "medium",
        explanation: "Acts 12:2. King Herod had him killed with the sword. Stephen was the first Christian martyr, but not one of the twelve apostles."
    },
    {
        id: "BP022",
        question: "Which of Saul's daughters was given to David as a wife first?",
        options: ["Merab", "Michal", "Ahinoam", "Abigail"],
        answer: "Merab",
        category: "Bible People",
        difficulty: "hard",
        explanation: "1 Samuel 18:17-19. Saul promised Merab to David but then gave her to another man. He later gave David his other daughter, Michal."
    },
    {
        id: "BP023",
        question: "Who is called 'the beloved physician' in the New Testament?",
        options: ["Paul", "Timothy", "Luke", "Apollos"],
        answer: "Luke",
        category: "Bible People",
        difficulty: "medium",
        explanation: "Colossians 4:14. Paul refers to him with this affectionate title."
    },
    {
        id: "BP030",
        question: "Who was the father of John the Baptist?",
        options: ["Zechariah", "Zacharias", "Zebedee", "Zedekiah"],
        answer: "Zacharias",
        category: "Bible People",
        difficulty: "easy",
        explanation: "Luke 1. This is the Greek form used in the New Testament. Zechariah is the Hebrew form, the name of an Old Testament prophet, creating potential confusion."
    },
    {
        id: "BP031",
        question: "Which judge of Israel made a rash vow that resulted in the sacrifice of his daughter?",
        options: ["Samson", "Gideon", "Jephthah", "Ehud"],
        answer: "Jephthah",
        category: "Bible People",
        difficulty: "medium",
        explanation: "Judges 11:30-40. He vowed to sacrifice whatever came out of his house to greet him if he was victorious, and it was his only child."
    },
    {
        id: "BP032",
        question: "Who was the Persian king who issued the decree to rebuild the Temple in Jerusalem?",
        options: ["Darius", "Cyrus", "Artaxerxes", "Xerxes (Ahasuerus)"],
        answer: "Cyrus",
        category: "Bible People",
        difficulty: "medium",
        explanation: "Ezra 1:1-2. He made the initial decree. Darius and Artaxerxes issued later, confirming decrees."
    },
    {
        id: "BP033",
        question: "Who was the first person recorded as seeing the resurrected Jesus?",
        options: ["Peter", "John", "Mary, the mother of Jesus", "Mary Magdalene"],
        answer: "Mary Magdalene",
        category: "Bible People",
        difficulty: "easy",
        explanation: "John 20:14-16; Mark 16:9. While other women were with her at the tomb, the Gospels specify she was the first to whom Jesus appeared."
    },
    {
        id: "BP024",
        question: "Which man was carried by angels to 'Abraham's bosom' after he died?",
        options: ["The repentant thief", "Lazarus of Bethany", "Lazarus the beggar", "Stephen"],
        answer: "Lazarus the beggar",
        category: "Bible People",
        difficulty: "medium",
        explanation: "Luke 16:22. This is from the parable of the rich man and Lazarus. Lazarus of Bethany was a real person whom Jesus raised from the dead."
    },
    {
        id: "BP025",
        question: "Who was the sorcerer on the island of Paphos who was struck blind for opposing Paul?",
        options: ["Simon Magus", "Elymas (Bar-Jesus)", "Sceva's sons", "Hymenaeus"],
        answer: "Elymas (Bar-Jesus)",
        category: "Bible People",
        difficulty: "medium",
        explanation: "Acts 13:6-11. Simon Magus tried to buy the power of the Holy Spirit, but it was Elymas who was blinded."
    },
    {
        id: "BP026",
        question: "Who was the godly king of Judah who was shown his storerooms by the prophet Isaiah and then told all his wealth would be carried to Babylon?",
        options: ["Josiah", "Hezekiah", "Uzziah", "Jehoshaphat"],
        answer: "Hezekiah",
        category: "Bible People",
        difficulty: "medium",
        explanation: "2 Kings 20:12-18. After proudly showing his treasures to Babylonian envoys, Isaiah delivered this prophecy."
    },
    {
        id: "BP027",
        question: "Who was the runaway slave on whose behalf Paul wrote a letter to his master?",
        options: ["Tychicus", "Epaphras", "Onesimus", "Archippus"],
        answer: "Onesimus",
        category: "Bible People",
        difficulty: "medium",
        explanation: "The entire book of Philemon. Paul appealed to Philemon to receive his slave Onesimus back as a brother in Christ."
    },
    {
        id: "BP028",
        question: "Which prophet is most known for his vision of a valley of dry bones?",
        options: ["Isaiah", "Daniel", "Ezekiel", "Zechariah"],
        answer: "Ezekiel",
        category: "Bible People",
        difficulty: "medium",
        explanation: "Ezekiel 37. This famous vision symbolized God's promise to restore the nation of Israel."
    },
    {
        id: "BP029",
        question: "Who was the Roman centurion in Caesarea, noted as a devout man, who was converted after Peter had a vision?",
        options: ["Cornelius", "The centurion at the cross", "Julius", "The centurion whose servant Jesus healed"],
        answer: "Cornelius",
        category: "Bible People",
        difficulty: "medium",
        explanation: "Acts 10. His conversion marked a pivotal moment in the acceptance of Gentiles into the early church."
    },
    // General SDA questions (user provided)
    {
        id: "GS002",
        question: "The Seventh-day Adventist Church was officially organized in what year?",
        options: ["1844", "1860", "1863", "1888"],
        answer: "1863",
        category: "General SDA",
        difficulty: "medium",
        explanation: "The name 'Seventh-day Adventist' was chosen in 1860, but the General Conference, officially organizing the church as a denomination, was established in 1863."
    },
    {
        id: "GS003",
        question: "The 'Sabbath and Sanctuary Conferences' held between 1848 and 1850 were primarily for what purpose?",
        options: ["To organize the church structure.", "To establish the foundational doctrines of the church.", "To elect the first General Conference president.", "To plan missionary outreach."],
        answer: "To establish the foundational doctrines of the church.",
        category: "General SDA",
        difficulty: "medium",
        explanation: "These were study conferences where early Adventists came to a common understanding of key truths like the Sabbath, the sanctuary, and the state of the dead."
    },
    {
        id: "GS004",
        question: "Who was the first official General Conference president of the Seventh-day Adventist Church?",
        options: ["James White", "Joseph Bates", "John Byington", "J. N. Andrews"],
        answer: "John Byington",
        category: "General SDA",
        difficulty: "medium",
        explanation: "While James White was the most prominent leader and repeatedly held the office later, he initially resisted the idea. John Byington was elected as the first president in 1863."
    },
    {
        id: "GS005",
        question: "The 1888 General Conference in Minneapolis is famous for a message emphasizing what?",
        options: ["The importance of the health message.", "The doctrine of the heavenly sanctuary.", "Righteousness by faith in Jesus Christ.", "The need for worldwide mission."],
        answer: "Righteousness by faith in Jesus Christ.",
        category: "General SDA",
        difficulty: "medium",
        explanation: "Presented by Elders A. T. Jones and E. J. Waggoner, this message was a pivotal moment in Adventist theology."
    },
    {
        id: "GS006",
        question: "What does the doctrine of the 'Investigative Judgment' primarily teach?",
        options: ["That God investigates our lives to see if we are worthy of salvation.", "That a work of judgment began in heaven in 1844 to review the lives of professed believers before the Second Coming.", "That believers are judged at the moment of their death.", "That the final judgment of the wicked occurs during the millennium."],
        answer: "That a work of judgment began in heaven in 1844 to review the lives of professed believers before the Second Coming.",
        category: "General SDA",
        difficulty: "hard",
        explanation: "It is a judgment of records to vindicate God's character, not to inform Him."
    },
    {
        id: "GS007",
        question: "The 'Great Disappointment' of October 22, 1844, was the result of a misunderstanding about what event?",
        options: ["They misunderstood the time of the event.", "They misunderstood the nature of the event.", "They misunderstood the place of the event.", "They misunderstood both the nature and the place of the event."],
        answer: "They misunderstood both the nature and the place of the event.",
        category: "General SDA",
        difficulty: "medium",
        explanation: "They expected the nature of the event to be the Second Coming, and the place to be the earth. The re-examination of scripture led them to understand it was Christ beginning His final ministry (the nature) in the heavenly sanctuary (the place)."
    },
    {
        id: "GS008",
        question: "Who was the first official Seventh-day Adventist missionary sent overseas?",
        options: ["Hiram Edson", "J. N. Loughborough", "J. N. Andrews", "James White"],
        answer: "J. N. Andrews",
        category: "General SDA",
        difficulty: "medium",
        explanation: "In 1874, he was sent to Switzerland, becoming the first official missionary sent to a foreign field by the General Conference."
    },
    {
        id: "GS009",
        question: "The 'Spirit of Prophecy' in the SDA church refers to:",
        options: ["The gift of prophecy available to any member.", "The writings of the Bible prophets.", "The specific prophetic ministry of Ellen G. White.", "The work of the Holy Spirit in the last days."],
        answer: "The specific prophetic ministry of Ellen G. White.",
        category: "General SDA",
        difficulty: "easy",
        explanation: "While Adventists believe the gift can be manifest (A) and is rooted in the Spirit (D), the term 'Spirit of Prophecy' is almost universally used as a title for Ellen White's writings."
    },
    {
        id: "GS010",
        question: "What is the primary role of Ellen White's writings in relation to the Bible?",
        options: ["They are an addition to the canon of scripture.", "They are a 'lesser light' to lead people to the 'greater light' (the Bible).", "They are a replacement for the Bible for the last days.", "They are an infallible commentary on the Bible."],
        answer: "They are a 'lesser light' to lead people to the 'greater light' (the Bible).",
        category: "General SDA",
        difficulty: "medium",
        explanation: "This is the analogy she herself used to describe the function of her ministry."
    },
    {
        id: "GS011",
        question: "The doctrine of the state of the dead, often called 'soul sleep,' teaches that:",
        options: ["The soul is unconscious, but the spirit returns to God.", "The dead are in a state of unconscious rest until the resurrection.", "The righteous go immediately to heaven at death.", "The soul sleeps while the spirit is judged."],
        answer: "The dead are in a state of unconscious rest until the resurrection.",
        category: "General SDA",
        difficulty: "medium",
        explanation: "Based on texts like Ecclesiastes 9:5, this doctrine teaches the whole person rests in the grave."
    },
    {
        id: "GS012",
        question: "Tithe, in Adventist practice, is defined as:",
        options: ["10% of one's net income, used for local church expenses.", "10% of one's gross income, used for the support of the gospel ministry worldwide.", "A voluntary offering based on one's blessings.", "10% of one's increase, used for building schools and hospitals."],
        answer: "10% of one's gross income, used for the support of the gospel ministry worldwide.",
        category: "General SDA",
        difficulty: "easy",
        explanation: "Tithe is specifically one-tenth of one's 'increase' or income and is remitted to support pastors, evangelists, and missionaries through a central storehouse system."
    },
    {
        id: "GS013",
        question: "The 'Three Angels' Messages' are found in which book of the Bible?",
        options: ["Daniel 7", "Matthew 24", "Revelation 14", "1 Thessalonians 4"],
        answer: "Revelation 14",
        category: "General SDA",
        difficulty: "easy",
        explanation: "Verses 6-12 contain the core of the SDA church's prophetic mission and identity."
    },
    {
        id: "GS014",
        question: "What is the name of the Adventist university first established in Battle Creek, Michigan?",
        options: ["Loma Linda University", "Andrews University", "Battle Creek College", "Walla Walla University"],
        answer: "Battle Creek College",
        category: "General SDA",
        difficulty: "medium",
        explanation: "It was founded in 1874. It later moved to Berrien Springs and was renamed Emmanuel Missionary College, and finally Andrews University."
    },
    {
        id: "GS015",
        question: "The 'Remnant Church' doctrine states that:",
        options: ["Only Seventh-day Adventists will be saved.", "The SDA church is the only true church.", "There is a visible, identifiable group in the last days that keeps the commandments of God and has the testimony of Jesus.", "All other churches constitute Babylon."],
        answer: "There is a visible, identifiable group in the last days that keeps the commandments of God and has the testimony of Jesus.",
        category: "General SDA",
        difficulty: "medium",
        explanation: "While Adventists believe their church meets these criteria from Revelation 12:17, the doctrine itself is about the biblical identifiers of the remnant, not institutional exclusivity."
    },
    {
        id: "GS016",
        question: "What major vision gave early Adventists an understanding of the heavenly sanctuary and Christ's ministry after the Great Disappointment?",
        options: ["Ellen White's vision of the three angels' messages.", "Hiram Edson's vision in the cornfield.", "Joseph Bates' vision of the Sabbath.", "James White's vision of the publishing work."],
        answer: "Hiram Edson's vision in the cornfield.",
        category: "General SDA",
        difficulty: "medium",
        explanation: "On October 23, 1844, he had a vision of Christ moving from the Holy to the Most Holy Place in the heavenly sanctuary, providing the key to the disappointment."
    },
    {
        id: "GS017",
        question: "The Adventist health message promotes vegetarianism because:",
        options: ["The Bible forbids all meat-eating.", "It is believed to be the optimal diet for physical and spiritual health, reflecting the Edenic ideal.", "It is a requirement for church membership.", "It guarantees a longer life."],
        answer: "It is believed to be the optimal diet for physical and spiritual health, reflecting the Edenic ideal.",
        category: "General SDA",
        difficulty: "easy",
        explanation: "It is a recommendation based on health principles, not a test of fellowship or a biblical prohibition for all time."
    },
    {
        id: "GS018",
        question: "The 'Testimony of Jesus' (Revelation 12:17) is identified by Adventists as:",
        options: ["The personal witness of every believer.", "The gift of prophecy.", "The entire Bible.", "The preaching of the gospel."],
        answer: "The gift of prophecy.",
        category: "General SDA",
        difficulty: "medium",
        explanation: "Revelation 19:10 explicitly states, 'the testimony of Jesus is the spirit of prophecy.'"
    },
    {
        id: "GS019",
        question: "The Adventist logo, featuring a cross, an open Bible, and a flame, primarily symbolizes:",
        options: ["The law, the prophets, and the Spirit.", "The centrality of the cross, the Bible as the foundation, and the Holy Spirit.", "Sacrifice, truth, and missionary zeal.", "The Father, Son, and Holy Spirit."],
        answer: "The centrality of the cross, the Bible as the foundation, and the Holy Spirit.",
        category: "General SDA",
        difficulty: "easy",
        explanation: "The three lines encircling the globe also represent the three angels' messages."
    },
    {
        id: "GS020",
        question: "What is the purpose of the Sabbath in Adventist theology?",
        options: ["It is a day of strict rules and prohibitions.", "It is a sign of salvation by works.", "It is a memorial of Creation and a sign of redemption and sanctification.", "It is a weekly fast day."],
        answer: "It is a memorial of Creation and a sign of redemption and sanctification.",
        category: "General SDA",
        difficulty: "medium",
        explanation: "It is a day of joyful communion with God and others, pointing back to creation and forward to the final rest."
    },
    {
        id: "GS021",
        question: "The General Conference Session is a major church business meeting held how often?",
        options: ["Every year.", "Every two years.", "Every five years.", "Every seven years."],
        answer: "Every five years.",
        category: "General SDA",
        difficulty: "easy",
        explanation: "Delegates from around the world gather to elect leaders and vote on church matters."
    },
    {
        id: "GS022",
        question: "Who was the primary advocate among the early pioneers for accepting the seventh-day Sabbath?",
        options: ["William Miller", "Ellen White", "Joseph Bates", "Hiram Edson"],
        answer: "Joseph Bates",
        category: "General SDA",
        difficulty: "medium",
        explanation: "He learned of the Sabbath from a Seventh Day Baptist tract and became its most ardent promoter, writing a pamphlet that convinced James and Ellen White."
    },
    {
        id: "GS023",
        question: "The book The Great Controversy is best described as:",
        options: ["A detailed commentary on Revelation.", "A history of the conflict between Christ and Satan from its origin to its end.", "A biography of Ellen White.", "An Adventist manual of church doctrine."],
        answer: "A history of the conflict between Christ and Satan from its origin to its end.",
        category: "General SDA",
        difficulty: "easy",
        explanation: "It traces this theme through church history and into future prophecy."
    },
    {
        id: "GS024",
        question: "The term 'Laodicean' is used by Adventists to describe a spiritual condition of:",
        options: ["Open apostasy.", "Zealous fanaticism.", "Lukewarm self-sufficiency.", "Persecuted faithfulness."],
        answer: "Lukewarm self-sufficiency.",
        category: "General SDA",
        difficulty: "medium",
        explanation: "From the message to the seventh church in Revelation 3, it describes a people who think they are rich and in need of nothing, but are spiritually poor."
    },
    {
        id: "GS025",
        question: "The Adventist understanding of the Trinity is that:",
        options: ["The Father, Son, and Holy Spirit are three manifestations of one being.", "The Father is the only true God, and Jesus is a lesser, created being.", "There is one God: Father, Son, and Holy Spirit, a unity of three co-eternal Persons.", "The 'Holy Spirit' is just the impersonal power of God."],
        answer: "There is one God: Father, Son, and Holy Spirit, a unity of three co-eternal Persons.",
        category: "General SDA",
        difficulty: "medium",
        explanation: "While some early pioneers held anti-Trinitarian views, the church's official and fundamental belief is fully Trinitarian."
    },
    {
        id: "GS026",
        question: "The Adventist Church's official stance on military service is:",
        options: ["Strict pacifism (refusal to serve in any capacity).", "Non-combatancy (willingness to serve, but not in roles requiring bearing arms).", "Full combat participation is encouraged.", "The church has no official position."],
        answer: "Non-combatancy",
        category: "General SDA",
        difficulty: "medium",
        explanation: "This position was established during the American Civil War, affirming loyalty to government but conscientiously objecting to taking human life."
    },
    {
        id: "GS027",
        question: "What is the name of the Adventist relief and development organization?",
        options: ["Adventist Community Services (ACS)", "Adventist Development and Relief Agency (ADRA)", "Adventist World Relief (AWR)", "Seventh-day Adventist Welfare Service (SAWS)"],
        answer: "Adventist Development and Relief Agency (ADRA)",
        category: "General SDA",
        difficulty: "easy",
        explanation: "SAWS was its predecessor organization."
    },
    {
        id: "GS028",
        question: "The 'Shut Door' theory initially held by some early Adventists was the belief that:",
        options: ["The door to the Most Holy Place was shut in 1844.", "The door of salvation was shut to all non-Millerites after October 22, 1844.", "The door to heaven is shut until the judgment is complete.", "The door of the church should be shut to new doctrines."],
        answer: "The door of salvation was shut to all non-Millerites after October 22, 1844.",
        category: "General SDA",
        difficulty: "hard",
        explanation: "This was an early, incorrect conclusion that was later abandoned as they gained a fuller understanding of the sanctuary."
    },
    {
        id: "GS029",
        question: "The first institution of what would become the worldwide Adventist health system was the:",
        options: ["Loma Linda Sanitarium", "Western Health Reform Institute", "Sydney Sanitarium", "Battle Creek Sanitarium"],
        answer: "Western Health Reform Institute",
        category: "General SDA",
        difficulty: "medium",
        explanation: "Established in 1866 in Battle Creek, it was later reorganized and became the famous Battle Creek Sanitarium under Dr. John Harvey Kellogg."
    },
    {
        id: "GS030",
        question: "The '28 Fundamental Beliefs' of the SDA church are considered:",
        options: ["An unchangeable creed that must be accepted for salvation.", "A summary of the principal teachings of scripture as understood by the church, which can be revised by the General Conference.", "A list of doctrines that are all of equal importance.", "A guide for pastors only."],
        answer: "A summary of the principal teachings of scripture as understood by the church, which can be revised by the General Conference.",
        category: "General SDA",
        difficulty: "medium",
        explanation: "They are not a creed, and the preamble states that the church is always open to further light from scripture."
    },
    {
        id: "GS031",
        question: "The 'Morning Star' was:",
        options: ["A name for Jesus used in Adventist hymns.", "The first official church paper published by James White.", "A ship owned by Joseph Bates used for evangelism.", "The name of the first Adventist camp meeting."],
        answer: "A ship owned by Joseph Bates used for evangelism.",
        category: "General SDA",
        difficulty: "hard",
        explanation: "He was a retired sea captain and used his resources to spread the Adventist message. The first paper was The Present Truth."
    },
    // Advanced General SDA questions (user provided)
    {
        id: "GS032",
        question: "The 'Alpha of Apostasy' as described by Ellen White referred specifically to:",
        options: [
            "The 1888 rejection of the Righteousness by Faith message.",
            "The pantheistic teachings in Dr. John Harvey Kellogg's book, The Living Temple.",
            "D. M. Canright's departure from the church and his attacks on its doctrines.",
            "The introduction of liberal theology into Adventist colleges."
        ],
        answer: "The pantheistic teachings in Dr. John Harvey Kellogg's book, The Living Temple.",
        category: "General SDA",
        difficulty: "hard",
        explanation: "She identified these specific teachings as the 'Alpha of deadly heresies' and warned the 'Omega' would follow."
    },
    {
        id: "GS033",
        question: "The significant church reorganization of 1901, which decentralized authority, primarily involved the creation of what new administrative level?",
        options: ["Divisions", "Local Conferences", "Union Conferences", "General Conference Departments"],
        answer: "Union Conferences",
        category: "General SDA",
        difficulty: "hard",
        explanation: "This was the major structural change made to move away from an overly centralized model and group conferences together into self-governing unions."
    },
    {
        id: "GS055",
        question: "The term 'Present Truth' in an Adventist context primarily means:",
        options: [
            "Truths that are new and were never previously understood.",
            "The specific set of truths that are most vital for God's people at a particular point in history.",
            "Only the truths discovered by the Adventist pioneers.",
            "The current edition of the church's fundamental beliefs."
        ],
        answer: "The specific set of truths that are most vital for God's people at a particular point in history.",
        category: "General SDA",
        difficulty: "medium",
        explanation: "It implies a focus on timely, relevant messages, like the sanctuary for the 1844 generation."
    },
    {
        id: "GS056",
        question: "Who was the longest-serving General Conference president?",
        options: ["James White", "A. G. Daniells", "W. A. Spicer", "Neal C. Wilson"],
        answer: "A. G. Daniells",
        category: "General SDA",
        difficulty: "hard",
        explanation: "He served for 21 years, from 1901 to 1922, presiding over a period of massive reorganization and growth."
    },
    {
        id: "GS057",
        question: "The 1919 Bible Conference is notable and was controversial for its frank discussions on:",
        options: [
            "The doctrine of the Trinity.",
            "The nature of Christ's righteousness.",
            "The nature and use of the Spirit of Prophecy and the inspiration of Ellen White.",
            "The church's stance on military service during World War I."
        ],
        answer: "The nature and use of the Spirit of Prophecy and the inspiration of Ellen White.",
        category: "General SDA",
        difficulty: "hard",
        explanation: "The minutes, not widely circulated for decades, revealed a surprising level of questioning and debate among church leaders."
    },
    {
        id: "GS058",
        question: "Madison College, founded by E. A. Sutherland and Percy Magan, was a pioneering institution for what movement within Adventism?",
        options: [
            "The medical missionary movement.",
            "The self-supporting educational and institutional work.",
            "The foreign mission movement.",
            "The publishing work."
        ],
        answer: "The self-supporting educational and institutional work.",
        category: "General SDA",
        difficulty: "hard",
        explanation: "It operated independently of the denominational structure and became a model for other self-supporting ventures."
    },
    {
        id: "GS059",
        question: "The theological crisis in the church during the late 1970s and early 1980s, which led to the departure of theologian Desmond Ford, centered on his views regarding:",
        options: [
            "The nature of Christ.",
            "The doctrine of the Trinity.",
            "The 1844 Investigative Judgment and the 'historicist' interpretation of prophecy.",
            "The inspiration of Ellen G. White."
        ],
        answer: "The 1844 Investigative Judgment and the 'historicist' interpretation of prophecy.",
        category: "General SDA",
        difficulty: "hard",
        explanation: "His challenges to the traditional understanding of the sanctuary doctrine led to the Glacier View meeting and his eventual dismissal."
    },
    {
        id: "GS060",
        question: "The 'EGW Estate, Inc.' is an organization established by Ellen White's will for what purpose?",
        options: [
            "To manage the church's retirement funds.",
            "To operate the Review and Herald Publishing Association.",
            "To act as the perpetual custodian of her copyrights and promote her writings.",
            "To oversee all Adventist educational institutions."
        ],
        answer: "To act as the perpetual custodian of her copyrights and promote her writings.",
        category: "General SDA",
        difficulty: "medium",
        explanation: "It is responsible for protecting the integrity of her works, translating them, and making them available."
    },
    {
        id: "GS061",
        question: "The first official adoption of a list of Fundamental Beliefs by the General Conference session occurred in:",
        options: ["1872", "1931", "1980", "1889"],
        answer: "1980",
        category: "General SDA",
        difficulty: "medium",
        explanation: "While a statement of beliefs was published in the yearbook in 1931, the first version to be formally voted and adopted by a GC Session was the '27 Fundamental Beliefs' in 1980."
    },
    {
        id: "GS034",
        question: "Who wrote the lyrics for the hymn 'We Have This Hope,' which became the theme song for the 1962 General Conference Session?",
        options: ["F. E. Belden", "Wayne Hooper", "H.M.S. Richards", "George Beverly Shea"],
        answer: "Wayne Hooper",
        category: "General SDA",
        difficulty: "medium",
        explanation: "He was a key musician for the Voice of Prophecy and wrote the song that has become one of the most iconic Adventist hymns."
    },
    {
        id: "GS035",
        question: "The Geoscience Research Institute is a church-sponsored entity primarily tasked with:",
        options: [
            "Exploring for natural resources to fund mission work.",
            "Studying the relationship between faith and science, particularly concerning origins from a biblical perspective.",
            "Managing the church's environmental and sustainability policies.",
            "Developing science curricula for Adventist schools."
        ],
        answer: "Studying the relationship between faith and science, particularly concerning origins from a biblical perspective.",
        category: "General SDA",
        difficulty: "medium",
        explanation: "It focuses on evaluating scientific data in light of a short-creation model."
    },
    {
        id: "GS036",
        question: "Who was the prominent Review and Herald editor who was a major opponent of the 1888 Minneapolis message on Righteousness by Faith?",
        options: ["J. N. Loughborough", "George I. Butler", "Uriah Smith", "James White"],
        answer: "Uriah Smith",
        category: "General SDA",
        difficulty: "hard",
        explanation: "While GC President George Butler was also a key opponent, Uriah Smith used his influential position as editor of the Review to resist the message."
    },
    {
        id: "GS037",
        question: "The 'Global Mission' initiative, launched in 1990, has a specific focus on:",
        options: [
            "Sending more missionaries from North America.",
            "Increasing ADRA's budget.",
            "Establishing new congregations in unentered areas or for new people groups.",
            "Translating the Bible into more languages."
        ],
        answer: "Establishing new congregations in unentered areas or for new people groups.",
        category: "General SDA",
        difficulty: "medium",
        explanation: "Its goal is to start new Adventist groups in the '10/40 window' and other unreached territories."
    },
    {
        id: "GS038",
        question: "The term 'historic Adventism' is most commonly used to refer to:",
        options: [
            "The study of Adventist history.",
            "A theological position that seeks to adhere strictly to the teachings of the early pioneers, sometimes including non-Trinitarianism.",
            "The official historical archives of the General Conference.",
            "A style of worship that uses only traditional hymns."
        ],
        answer: "A theological position that seeks to adhere strictly to the teachings of the early pioneers, sometimes including non-Trinitarianism.",
        category: "General SDA",
        difficulty: "hard",
        explanation: "It is often associated with independent ministries that are critical of what they see as changes in the mainstream church's theology."
    },
    {
        id: "GS039",
        question: "The Biblical Research Institute (BRI) functions as:",
        options: [
            "An independent theological think-tank.",
            "The department that grants ministerial credentials.",
            "A service of the General Conference that provides theological expertise and guidance to the world church.",
            "The publisher of the Adult Sabbath School Quarterly."
        ],
        answer: "A service of the General Conference that provides theological expertise and guidance to the world church.",
        category: "General SDA",
        difficulty: "medium",
        explanation: "It studies theological issues, prepares papers, and advises church leadership on doctrinal matters."
    },
    {
        id: "GS040",
        question: "The 'Total Member Involvement' (TMI) initiative is a plan emphasizing that:",
        options: [
            "Every church member should hold a church office.",
            "Every church member should pay tithe and offerings.",
            "Every church member is a missionary and should be actively involved in sharing their faith.",
            "Every church member should be involved in a small group."
        ],
        answer: "Every church member is a missionary and should be actively involved in sharing their faith.",
        category: "General SDA",
        difficulty: "easy",
        explanation: "It is a key part of the 'I Will Go' strategic plan, encouraging personal evangelism from all members."
    },
    {
        id: "GS041",
        question: "The 'Conflict of the Ages' series contains five books. Which book is the third in the series?",
        options: [
            "Patriarchs and Prophets",
            "Prophets and Kings",
            "The Desire of Ages",
            "The Acts of the Apostles"
        ],
        answer: "The Desire of Ages",
        category: "General SDA",
        difficulty: "medium",
        explanation: "The order is: 1. Patriarchs and Prophets, 2. Prophets and Kings, 3. The Desire of Ages, 4. The Acts of the Apostles, 5. The Great Controversy."
    },
    {
        id: "GS042",
        question: "Who was the first woman to be granted a ministerial license by the General Conference, in 1871?",
        options: [
            "Ellen G. White",
            "Sarepta Myrenda Irish Henry",
            "Sarah A. H. Lindsey",
            "L. M. Hall"
        ],
        answer: "Sarah A. H. Lindsey",
        category: "General SDA",
        difficulty: "hard",
        explanation: "She was granted a license in recognition of her effective work as a preacher and evangelist, though the issue of women's ordination remained complex."
    },
    {
        id: "GS043",
        question: "The 'Standish Brothers' (Colin and Russell) were best known for:",
        options: [
            "Leading the church's medical work in Australia.",
            "Founding the Hartland Institute and a prominent self-supporting ministry often critical of the official church.",
            "Pioneering Adventist broadcasting in the 1950s.",
            "Serving as consecutive presidents of the South Pacific Division."
        ],
        answer: "Founding the Hartland Institute and a prominent self-supporting ministry often critical of the official church.",
        category: "General SDA",
        difficulty: "hard",
        explanation: "They were strong advocates for 'historic Adventism.'"
    },
    {
        id: "GS044",
        question: "What is the significance of the 'Avondale model' in Adventist education?",
        options: [
            "It was the first Adventist school to achieve university status.",
            "It was the model for integrating medical and ministerial training.",
            "It was a curriculum focused on classical languages and philosophy.",
            "It was a model, guided by Ellen White, for a rural school balancing spiritual, academic, and practical/vocational training."
        ],
        answer: "It was a model, guided by Ellen White, for a rural school balancing spiritual, academic, and practical/vocational training.",
        category: "General SDA",
        difficulty: "medium",
        explanation: "Avondale College in Australia became the blueprint for 'true education.'"
    },
    {
        id: "GS045",
        question: "The book Questions on Doctrine, published in 1957, was a source of major internal controversy because:",
        options: [
            "It denied the doctrine of the Trinity.",
            "It seemed to some to alter traditional Adventist teachings, particularly on the nature of Christ and the atonement, to appease evangelical critics.",
            "It promoted the celebration of Christmas and Easter.",
            "It rejected the inspiration of Ellen G. White."
        ],
        answer: "It seemed to some to alter traditional Adventist teachings, particularly on the nature of Christ and the atonement, to appease evangelical critics.",
        category: "General SDA",
        difficulty: "hard",
        explanation: "It sparked a decades-long debate about what constitutes 'orthodox' Adventism."
    },
    {
        id: "GS046",
        question: "The term 'Systematic Benevolence' refers to:",
        options: [
            "The church's welfare program for the poor.",
            "The early stewardship plan that preceded and led to the adoption of the tithing system.",
            "A method for taking weekly offerings.",
            "The financial system for funding ADRA."
        ],
        answer: "The early stewardship plan that preceded and led to the adoption of the tithing system.",
        category: "General SDA",
        difficulty: "medium",
        explanation: "It was a plan where members pledged to set aside a certain amount weekly based on their property and income."
    },
    {
        id: "GS047",
        question: "H.M.S. Richards is a legendary figure in Adventism for founding what media ministry?",
        options: ["The Hope Channel", "It Is Written", "The Voice of Prophecy", "Faith for Today"],
        answer: "The Voice of Prophecy",
        category: "General SDA",
        difficulty: "medium",
        explanation: "He pioneered Adventist radio broadcasting in the 1920s, and his program became the first coast-to-coast religious broadcast in North America."
    },
    {
        id: "GS048",
        question: "What is the 'NAD'?",
        options: [
            "The church's department for nutrition and dietetics.",
            "The North American Division of the General Conference.",
            "A new Adventist drug rehabilitation program.",
            "The National Association of Adventists."
        ],
        answer: "The North American Division of the General Conference.",
        category: "General SDA",
        difficulty: "easy",
        explanation: "It is the administrative body overseeing the church in the United States, Canada, Bermuda, and Guam-Micronesia."
    },
    {
        id: "GS049",
        question: "The 'Pitcairn' was a:",
        options: [
            "The first Adventist hospital in Africa.",
            "A missionary schooner built and funded by Sabbath School offerings to carry missionaries to the Pacific Islands.",
            "The original name for Pacific Press Publishing Association.",
            "A college founded by J. N. Loughborough in California."
        ],
        answer: "A missionary schooner built and funded by Sabbath School offerings to carry missionaries to the Pacific Islands.",
        category: "General SDA",
        difficulty: "medium",
        explanation: "It was launched in 1890 and made several voyages."
    },
    {
        id: "GS050",
        question: "What is the primary function of the 'Annual Council' of the General Conference Executive Committee?",
        options: [
            "To plan the agenda for the next General Conference Session.",
            "To elect new Division presidents.",
            "To act as the highest governing body of the church in between GC Sessions, voting on policies and budgets.",
            "To review the membership records of the world church."
        ],
        answer: "To act as the highest governing body of the church in between GC Sessions, voting on policies and budgets.",
        category: "General SDA",
        difficulty: "medium",
        explanation: "It is the most important business meeting of the church outside of the quinquennial GC Session."
    },
    {
        id: "GS051",
        question: "The 'Quiet Hour' is a media ministry known for its long-time speaker:",
        options: ["George Vandeman", "William A. Fagal", "J. L. Tucker", "H.M.S. Richards Jr."],
        answer: "J. L. Tucker",
        category: "General SDA",
        difficulty: "hard",
        explanation: "He founded the ministry in 1937, and it became known for its evangelistic meetings and broadcasts."
    },
    {
        id: "GS052",
        question: "A 'self-supporting' worker or institution in Adventism is one that:",
        options: [
            "Is independently wealthy.",
            "Operates without receiving tithe-based appropriations from the organized church structure.",
            "Refuses to cooperate with the established church.",
            "Only serves non-Adventist communities."
        ],
        answer: "Operates without receiving tithe-based appropriations from the organized church structure.",
        category: "General SDA",
        difficulty: "medium",
        explanation: "They are part of the Adventist movement but are financially independent, like Madison College or Hartland Institute."
    },
    {
        id: "GS053",
        question: "The 'General Conference Working Policy' is:",
        options: [
            "A book of recommended sermon outlines.",
            "The constitution and bylaws of the General Conference Corporation.",
            "A comprehensive, multi-volume manual detailing the operating policies and procedures for all levels of church organization.",
            "A directory of all church employees worldwide."
        ],
        answer: "A comprehensive, multi-volume manual detailing the operating policies and procedures for all levels of church organization.",
        category: "General SDA",
        difficulty: "medium",
        explanation: "It is the administrative rulebook for the global church."
    },
    {
        id: "GS054",
        question: "The 'Hope Trend,' a concept discussed by former GC President Jan Paulsen, refers to:",
        options: [
            "The statistical growth of the church.",
            "The increasing focus on health and longevity.",
            "The shift in church membership from the global North to the global South.",
            "The optimistic belief in the nearness of the Second Coming."
        ],
        answer: "The shift in church membership from the global North to the global South.",
        category: "General SDA",
        difficulty: "medium",
        explanation: "It highlights the demographic reality that the vast majority of Adventists now live in Africa, Asia, and Latin America."
    },
    // The Great Controversy questions (user provided)
    {
        id: "GC001",
        question: "In the opening chapters, what specific strategic error does Ellen White say the early Christians made that allowed paganism to subtly enter the church?",
        options: [
            "They focused too much on prophecy and not enough on practical Christian living.",
            "They lowered the standard to make conversion easier for pagans, uniting with them before they were truly converted.",
            "They adopted the Roman political structure for church governance too quickly.",
            "They engaged in philosophical debates with Greek thinkers, corrupting their theology."
        ],
        answer: "They lowered the standard to make conversion easier for pagans, uniting with them before they were truly converted.",
        category: "The Great Controversy",
        difficulty: "medium",
        explanation: "She identifies the desire to unite the converts of paganism with Christianity as the key compromise that led to the great apostasy."
    },
    {
        id: "GC002",
        question: "According to the book, what was the fundamental difference between the persecution under Pagan Rome and the persecution under Papal Rome?",
        options: [
            "Pagan Rome killed more Christians than Papal Rome.",
            "Pagan Rome's persecution was primarily political, while Papal Rome's was religious.",
            "Pagan Rome martyred the saints as evildoers, while Papal Rome, acting in Christ's name, martyred them as heretics, thus dishonoring God.",
            "Pagan Rome offered a chance to recant, while Papal Rome did not."
        ],
        answer: "Pagan Rome martyred the saints as evildoers, while Papal Rome, acting in Christ's name, martyred them as heretics, thus dishonoring God.",
        category: "The Great Controversy",
        difficulty: "hard",
        explanation: "This distinction is crucial to her argument about the deceptive nature of the papal power."
    },
    {
        id: "GC003",
        question: "How did the Waldensian missionaries often gain a hearing for the scriptures they carried?",
        options: [
            "By holding large public evangelistic meetings.",
            "By debating with the local priests.",
            "By working as merchants and peddlers, showing their 'jewels' (manuscripts) only after gaining confidence.",
            "By establishing schools and hospitals in the valleys."
        ],
        answer: "By working as merchants and peddlers, showing their 'jewels' (manuscripts) only after gaining confidence.",
        category: "The Great Controversy",
        difficulty: "medium",
        explanation: "This quiet, person-to-person method is highlighted as their key to spreading truth in secret."
    },
    {
        id: "GC004",
        question: "When describing John Wycliffe, what does Ellen White call the 'morning star of the Reformation'?",
        options: [
            "Wycliffe himself.",
            "His translation of the Bible into English.",
            "The Lollard preachers he sent out.",
            "His writings against the friars."
        ],
        answer: "His translation of the Bible into English.",
        category: "The Great Controversy",
        difficulty: "medium",
        explanation: "While Wycliffe is the 'herald of reform,' she specifically identifies the Bible translation as the 'morning star.'"
    },
    {
        id: "GC005",
        question: "At the Council of Constance, what was the primary argument used to justify violating the safe-conduct pass given to John Huss?",
        options: [
            "That Huss had not kept his part of the agreement.",
            "That the emperor who gave it was outranked by the pope.",
            "That 'faith is not to be kept with heretics.'",
            "That the pass was only for the journey there, not for his stay."
        ],
        answer: "That 'faith is not to be kept with heretics.'",
        category: "The Great Controversy",
        difficulty: "hard",
        explanation: "This principle is cited as the treacherous justification for his condemnation."
    },
    {
        id: "GC006",
        question: "When Martin Luther was at the Diet of Worms, he famously stated he could not retract unless convinced by what two authorities?",
        options: [
            "Scripture and the Pope.",
            "Scripture and the early church fathers.",
            "Scripture and plain reason.",
            "Scripture and conscience."
        ],
        answer: "Scripture and plain reason.",
        category: "The Great Controversy",
        difficulty: "medium",
        explanation: "His famous statement was, 'Unless I am convinced by the testimony of the Scriptures or by clear reason... I cannot and will not retract.'"
    },
    {
        id: "GC007",
        question: "What specific event in the Swiss Reformation does the book contrast with the German Reformation's more peaceful start, showing a more immediate conflict?",
        options: [
            "Zwingli's debate with the Anabaptists.",
            "The burning of an idol and the subsequent serving of sausages during Lent in Zurich.",
            "The battle of Kappel, where Zwingli was killed.",
            "Calvin's establishment of the Consistory in Geneva."
        ],
        answer: "The burning of an idol and the subsequent serving of sausages during Lent in Zurich.",
        category: "The Great Controversy",
        difficulty: "hard",
        explanation: "This is presented as an early, bold, and public defiance of Roman authority, more abrupt than Luther's initial protests."
    },
    {
        id: "GC008",
        question: "The book states the French Revolution demonstrated the direct result of a nation doing what?",
        options: [
            "Suppressing the monarchy.",
            "Banning the Bible and denying God's existence.",
            "Engaging in foreign wars.",
            "Separating church and state."
        ],
        answer: "Banning the Bible and denying God's existence.",
        category: "The Great Controversy",
        difficulty: "medium",
        explanation: "The Reign of Terror is portrayed as the inevitable consequence of Rome's centuries-long policy of suppressing scripture, which culminated in France's atheism."
    },
    {
        id: "GC009",
        question: "The 'two great errors' that Ellen White says form the foundation of modern spiritualism are:",
        options: [
            "Sunday sacredness and the deity of Christ.",
            "The immortality of the soul and consciousness in death.",
            "Predestination and papal infallibility.",
            "Pantheism and antinomianism."
        ],
        answer: "The immortality of the soul and consciousness in death.",
        category: "The Great Controversy",
        difficulty: "medium",
        explanation: "She states these two errors open the door for demons to impersonate the dead."
    },
    {
        id: "GC010",
        question: "In the chapter 'The Snares of Satan,' what is identified as the most dangerous and successful of all of Satan's delusions for last-day Christians?",
        options: [
            "The belief that the law has been abolished.",
            "The belief that the saved cannot sin.",
            "The denial of the personality of Satan.",
            "The mingling of the sacred and the common in worship and life."
        ],
        answer: "The belief that the saved cannot sin.",
        category: "The Great Controversy",
        difficulty: "hard",
        explanation: "This is presented as a subtle snare that leads to spiritual pride and a disregard for God's law, under the guise of holiness."
    },
    {
        id: "GC011",
        question: "William Miller's study of prophecy led him to conclude that the 'cleansing of the sanctuary' in Daniel 8:14 referred to:",
        options: [
            "The purification of the church from apostasy.",
            "The destruction of the papacy.",
            "The purification of the earth by fire at the Second Coming.",
            "The beginning of the pre-advent judgment in heaven."
        ],
        answer: "The purification of the earth by fire at the Second Coming.",
        category: "The Great Controversy",
        difficulty: "medium",
        explanation: "This was the common Protestant interpretation of his day, which led to the Great Disappointment."
    },
    {
        id: "GC012",
        question: "After the Great Disappointment, the key that unlocked the mystery was a new understanding of what?",
        options: [
            "The 2300-day prophecy.",
            "The nature of Christ's second coming.",
            "The ministry of Christ in the heavenly sanctuary.",
            "The identity of the little horn."
        ],
        answer: "The ministry of Christ in the heavenly sanctuary.",
        category: "The Great Controversy",
        difficulty: "medium",
        explanation: "Realizing the sanctuary to be cleansed was in heaven, not on earth, was the pivotal insight."
    },
    {
        id: "GC013",
        question: "The book explains that the Sabbath will be the great point of controversy that distinguishes God's people. Why the Sabbath specifically?",
        options: [
            "Because it is the most difficult commandment to keep.",
            "Because it is the only commandment of the ten not honored by the Christian world.",
            "Because it is the seal of God's law, identifying Him as the Creator.",
            "Because it was the first commandment broken by Adam and Eve."
        ],
        answer: "Because it is the seal of God's law, identifying Him as the Creator.",
        category: "The Great Controversy",
        difficulty: "medium",
        explanation: "It contains the three elements of a seal: name, title, and territory, making it the sign of God's authority."
    },
    {
        id: "GC014",
        question: "When the Image of the Beast is formed, what American principle will have to be completely repudiated?",
        options: [
            "The separation of powers.",
            "The right to bear arms.",
            "The principles of Protestantism and republicanism.",
            "The Monroe Doctrine."
        ],
        answer: "The principles of Protestantism and republicanism.",
        category: "The Great Controversy",
        difficulty: "hard",
        explanation: "These foundational principles of religious and civil liberty must be overthrown for the state to enforce religious dogma."
    },
    {
        id: "GC015",
        question: "During the time of trouble, just before the plagues, God's people are sealed. This seal is described as:",
        options: [
            "A physical mark visible to all.",
            "A settling into the truth, both intellectually and spiritually, so they cannot be moved.",
            "An audible declaration from heaven.",
            "The reception of the gift of tongues."
        ],
        answer: "A settling into the truth, both intellectually and spiritually, so they cannot be moved.",
        category: "The Great Controversy",
        difficulty: "medium",
        explanation: "It is a character fixation, not an outward sign."
    },
    {
        id: "GC016",
        question: "What is the primary reason the seven last plagues are not universal, sparing God's people?",
        options: [
            "The saints are hidden in remote places where the plagues do not reach.",
            "The plagues are spiritual, not literal.",
            "Angels are commanded to physically shield them from each plague.",
            "The plagues are specifically targeted at those who have the mark of the beast and worship his image."
        ],
        answer: "The plagues are specifically targeted at those who have the mark of the beast and worship his image.",
        category: "The Great Controversy",
        difficulty: "medium",
        explanation: "Revelation 16 explicitly states this, showing the plagues are acts of specific, not general, judgment."
    },
    {
        id: "GC017",
        question: "During the Time of Jacob's Trouble (after probation closes), what is the source of the saints' most intense agony?",
        options: [
            "The lack of food and water.",
            "The fear that they will be killed by the mob.",
            "The taunts of the wicked and the apparent triumph of evil.",
            "The fear that they are cut off from God and have some unconfessed sin."
        ],
        answer: "The fear that they are cut off from God and have some unconfessed sin.",
        category: "The Great Controversy",
        difficulty: "hard",
        explanation: "It is a spiritual struggle, wrestling with God for assurance, mirroring Jacob's experience."
    },
    {
        id: "GC018",
        question: "The universal death decree, passed just before Christ's return, is the final act that does what?",
        options: [
            "Causes the saints to finally lose their faith.",
            "Fills up the cup of the transgressors' iniquity.",
            "Triggers the secret rapture.",
            "Unites all the world's religions."
        ],
        answer: "Fills up the cup of the transgressors' iniquity.",
        category: "The Great Controversy",
        difficulty: "medium",
        explanation: "This is the final step of defiance against God, making His direct intervention necessary."
    },
    {
        id: "GC019",
        question: "What is the 'special resurrection' that occurs just before the Second Coming?",
        options: [
            "The resurrection of all the righteous dead.",
            "The resurrection of those who pierced Christ, and all who have died in the faith of the third angel's message.",
            "The resurrection of the Old Testament prophets.",
            "The resurrection of children who died in infancy."
        ],
        answer: "The resurrection of those who pierced Christ, and all who have died in the faith of the third angel's message.",
        category: "The Great Controversy",
        difficulty: "hard",
        explanation: "This allows them to witness His return."
    },
    {
        id: "GC020",
        question: "During the millennium, what specific work are the saints engaged in with Christ in heaven?",
        options: [
            "Building their mansions in the New Jerusalem.",
            "Judging the wicked dead and the fallen angels.",
            "Learning the history of the universe.",
            "Resting from all their labors."
        ],
        answer: "Judging the wicked dead and the fallen angels.",
        category: "The Great Controversy",
        difficulty: "medium",
        explanation: "They review the books of record to understand and affirm the justice of God's final decisions."
    },
    {
        id: "GC021",
        question: "At the end of the 1,000 years, when Satan and the wicked are resurrected and surround the New Jerusalem, what finally convinces every lost soul of God's justice?",
        options: [
            "The overpowering glory of Christ on the throne.",
            "The testimony of the redeemed saints.",
            "A panoramic, supernatural replay of their own lives, showing every sin and every rejected offer of mercy.",
            "A final sermon preached by Christ Himself."
        ],
        answer: "A panoramic, supernatural replay of their own lives, showing every sin and every rejected offer of mercy.",
        category: "The Great Controversy",
        difficulty: "medium",
        explanation: "This final review leaves them without excuse before they are destroyed."
    },
    {
        id: "GC022",
        question: "The book describes the final destruction of the wicked as God's 'strange act.' Why is it called 'strange'?",
        options: [
            "Because it is a supernatural event.",
            "Because it is an act of justice and destruction, which is alien to His character of love and mercy.",
            "Because no one expects it to happen.",
            "Because it is performed in a way never before seen."
        ],
        answer: "Because it is an act of justice and destruction, which is alien to His character of love and mercy.",
        category: "The Great Controversy",
        difficulty: "medium",
        explanation: "It is called 'strange' because it is so contrary to God's nature of love."
    },
    {
        id: "GC023",
        question: "What does Ellen White say is the 'science of redemption'?",
        options: [
            "The study of prophecy.",
            "The plan of salvation.",
            "The science of the saints, the song of the saints.",
            "The study of the life of Christ."
        ],
        answer: "The science of the saints, the song of the saints.",
        category: "The Great Controversy",
        difficulty: "medium",
        explanation: "She states that the mystery of the cross will be the science and song of the redeemed throughout eternity."
    },
    {
        id: "GC024",
        question: "In her description of the New Earth, what is the one 'reminder' of the great controversy that will remain forever?",
        options: [
            "The broken law in the ark.",
            "The memory of sin.",
            "The marks of the crucifixion on Christ's body.",
            "The graves of the wicked."
        ],
        answer: "The marks of the crucifixion on Christ's body.",
        category: "The Great Controversy",
        difficulty: "easy",
        explanation: "These are described as His trophies and the eternal memorial of His sacrifice."
    },
    {
        id: "GC025",
        question: "What was the 'Protest of the Princes' at the Diet of Spires in 1529 primarily about?",
        options: [
            "Protesting the corruption of the papacy.",
            "Protesting the Edict of Worms against Luther.",
            "Protesting the decision to forbid the teaching of the gospel in states where it had not yet been received.",
            "Protesting the emperor's demand for taxes to fight the Turks."
        ],
        answer: "Protesting the decision to forbid the teaching of the gospel in states where it had not yet been received.",
        category: "The Great Controversy",
        difficulty: "medium",
        explanation: "They were protesting the decree that liberty of conscience should not be extended, declaring that in matters of conscience, the majority has no power."
    },
    {
        id: "GC026",
        question: "The book identifies the rise of Methodism under the Wesleys as a revival against what specific spiritual condition in the Church of England?",
        options: [
            "Papal heresies.",
            "Political corruption.",
            "Formalism and antinomianism.",
            "Atheistic philosophy."
        ],
        answer: "Formalism and antinomianism.",
        category: "The Great Controversy",
        difficulty: "medium",
        explanation: "It had become a dead, formal religion, and the doctrine of predestination had led many to a belief that the law was not binding."
    },
    {
        id: "GC027",
        question: "When Satan impersonates Christ in the final deception, what is the one detail about the Second Coming he cannot counterfeit?",
        options: [
            "The love and compassion in his voice.",
            "The performance of mighty miracles of healing.",
            "The universal, glorious, and audible descent from heaven that every eye shall see.",
            "His knowledge of scripture."
        ],
        answer: "The universal, glorious, and audible descent from heaven that every eye shall see.",
        category: "The Great Controversy",
        difficulty: "medium",
        explanation: "His appearance will be localized on earth, which is the key to identifying the deception."
    },
    {
        id: "GC028",
        question: "What specific group of people does the book say will be brought to trial first in the Investigative Judgment?",
        options: [
            "The most wicked sinners.",
            "Those who have professed the name of Christ, beginning with those who first lived on the earth.",
            "The fallen angels.",
            "The last generation living on earth."
        ],
        answer: "Those who have professed the name of Christ, beginning with those who first lived on the earth.",
        category: "The Great Controversy",
        difficulty: "hard",
        explanation: "The judgment begins with the house of God, starting with the dead righteous."
    },
    {
        id: "GC029",
        question: "The book argues that the divine institution of marriage and what other institution were 'twin institutions' given in Eden?",
        options: [
            "The family.",
            "The government.",
            "The Sabbath.",
            "The sanctuary service."
        ],
        answer: "The Sabbath.",
        category: "The Great Controversy",
        difficulty: "medium",
        explanation: "She states that marriage and the Sabbath were founded in Eden and that the papacy has attacked both."
    },
    {
        id: "GC030",
        question: "What is the final conclusion and overarching theme of the entire book?",
        options: [
            "That God's law is immutable and His government will be vindicated.",
            "That prophecy can be trusted.",
            "That Satan is a powerful and deceptive foe.",
            "That humanity is hopelessly lost without a Savior."
        ],
        answer: "That God's law is immutable and His government will be vindicated.",
        category: "The Great Controversy",
        difficulty: "medium",
        explanation: "While all are themes, the ultimate conclusion is the vindication of God's character and law in the face of Satan's rebellion."
    },
    {
        id: "GC031",
        question: "What specific reason does the book give for why the anointing of Jesus by Mary at Simon's feast was of such profound significance in the context of the great controversy?",
        options: ["It was a public declaration of His kingship.", "It was a direct fulfillment of an Old Testament prophecy.", "It was a rebuke to the disciples' lack of faith.", "It was a practical enactment of heaven's principles of love, contrasting with Judas's avarice and the world's self-serving economy."],
        answer: "It was a practical enactment of heaven's principles of love, contrasting with Judas's avarice and the world's self-serving economy.",
        category: "The Great Controversy",
        difficulty: "medium",
        explanation: "The act was a spontaneous outpouring of love, which Judas, the representative of a worldly spirit, could not comprehend."
    },
    {
        id: "GC032",
        question: "In the chapter on the French Revolution, the 'two witnesses' are identified as the Old and New Testaments. What specific historical event does Ellen White pinpoint as their symbolic 'death' in the streets of the 'great city'?",
        options: ["The St. Bartholomew's Day Massacre.", "The burning of Bibles by the Roman Catholic Church.", "The decree passed by the French Assembly suppressing the Scriptures.", "The rise of Voltaire and atheistic philosophy."],
        answer: "The decree passed by the French Assembly suppressing the Scriptures.",
        category: "The Great Controversy",
        difficulty: "medium",
        explanation: "This official act of the government is identified as the moment the witnesses were 'slain.'"
    },
    {
        id: "GC033",
        question: "When describing the final shaking, the book mentions that the 'superficial, conservative class' will renounce the faith. What specific motivation does it attribute to this group?",
        options: ["They were never truly converted.", "They were offended by the straight testimony.", "Their influence has steadily retarded the work, and their sympathies have long been with the world to avoid reproach.", "They are deceived by Satan's miracles."],
        answer: "Their influence has steadily retarded the work, and their sympathies have long been with the world to avoid reproach.",
        category: "The Great Controversy",
        difficulty: "medium",
        explanation: "Their conservatism is rooted in a desire for worldly acceptance, making the choice to join the opposition an easy one when the test comes."
    },
    {
        id: "GC034",
        question: "The book describes the condition of the lost after the millennium. What specific emotion, besides terror, do they feel as they witness the happiness of the redeemed?",
        options: ["Envy and jealousy.", "A sudden, agonizing realization of what they have forfeited by their life of rebellion.", "A desire for a second chance.", "Anger at God for their fate."],
        answer: "A sudden, agonizing realization of what they have forfeited by their life of rebellion.",
        category: "The Great Controversy",
        difficulty: "medium",
        explanation: "They see the 'far more exceeding and eternal weight of glory' which they despised, and the contrast fills them with a unique despair."
    },
    {
        id: "GC035",
        question: "In detailing the work of the Scandinavian reformers, Olaus and Laurentius Petri, what specific method did they use to spread the truth while under threat from papal authorities?",
        options: ["They disguised themselves as monks.", "They translated and preached in different parts of the country to divide the opposition's attention.", "They gained the protection of the king.", "They focused only on educating the youth."],
        answer: "They translated and preached in different parts of the country to divide the opposition's attention.",
        category: "The Great Controversy",
        difficulty: "medium",
        explanation: "One brother translated the New Testament while the other preached it, ensuring that if one was stopped, the work would continue."
    },
    {
        id: "GC036",
        question: "The book states that Satan's final impersonation of Christ will be 'almost overmastering.' What specific teaching will this false Christ pronounce that serves as a key identifier for the faithful?",
        options: ["He will abolish the law of God.", "He will claim to have changed the Sabbath to Sunday and command all to hallow it.", "He will claim that all sinners will be saved.", "He will perform miracles that seem to contradict the Bible."],
        answer: "He will claim to have changed the Sabbath to Sunday and command all to hallow it.",
        category: "The Great Controversy",
        difficulty: "medium",
        explanation: "This is the pivotal point of deception that directly attacks God's law and reveals his true identity."
    },
    {
        id: "GC037",
        question: "In the description of the new earth, what specific activity will occupy the minds of the redeemed that is described as a 'science' and a 'song' throughout eternity?",
        options: ["The study of astronomy and the wonders of creation.", "The study of music and heavenly harmony.", "The study of the cross of Christ and the plan of redemption.", "The study of the history of the universe."],
        answer: "The study of the cross of Christ and the plan of redemption.",
        category: "The Great Controversy",
        difficulty: "medium",
        explanation: "This is presented as the highest science and the central theme of their eternal praise."
    },
    {
        id: "GC038",
        question: "What reason does The Great Controversy give for why God permitted the great controversy to continue, rather than destroying Satan at the outset?",
        options: ["To give Satan a chance to repent.", "To demonstrate His power to the universe.", "So the universe might be convinced of God's justice in His dealing with evil, and that sin might receive eternal condemnation.", "To test the loyalty of the angels and humanity."],
        answer: "So the universe might be convinced of God's justice in His dealing with evil, and that sin might receive eternal condemnation.",
        category: "The Great Controversy",
        difficulty: "medium",
        explanation: "The long duration of the conflict was necessary to fully reveal the nature of sin and vindicate God's character."
    },
    {
        id: "GC039",
        question: "According to the book, what is the 'crowning act' in Satan's great drama of deception?",
        options: ["The union of church and state.", "The working of miracles through spiritualism.", "His personal impersonation of Christ.", "The enforcement of the mark of the beast."],
        answer: "His personal impersonation of Christ.",
        category: "The Great Controversy",
        difficulty: "medium",
        explanation: "This is presented as the final, most powerful, and almost overwhelming delusion."
    },
    {
        id: "GC040",
        question: "What is the very first, unified exclamation from the entire host of the lost at the end of the millennium as they behold Christ, and what motivates it?",
        options: ["'Crucify Him!' - motivated by hatred.", "'We are lost!' - motivated by despair.", "'Blessed is He that cometh in the name of the Lord!' - motivated by the irresistible force of truth.", "'Let the rocks fall on us!' - motivated by terror."],
        answer: "'Blessed is He that cometh in the name of the Lord!' - motivated by the irresistible force of truth.",
        category: "The Great Controversy",
        difficulty: "medium",
        explanation: "It is not love, but an involuntary acknowledgment of His sovereignty that compels the words from their lips."
    },
    // Bible People questions (additional)
    {
        id: "BP034",
        question: "Which prophet was taken up to heaven in a whirlwind?",
        options: ["Elijah", "Elisha", "Enoch", "Moses"],
        answer: "Elijah",
        category: "Bible People",
        difficulty: "easy",
        explanation: "2 Kings 2:11 describes how Elijah was taken up to heaven in a whirlwind, with a chariot of fire and horses of fire separating him from Elisha."
    },
    {
        id: "BP035",
        question: "Who was the first person in the Bible to be called a Hebrew?",
        options: ["Noah", "Abraham", "Jacob", "Joseph"],
        answer: "Abraham",
        category: "Bible People",
        difficulty: "medium",
        explanation: "Genesis 14:13 is the first mention of the term 'Hebrew' in the Bible, referring to Abram (Abraham)."
    },
    {
        id: "BP036",
        question: "Which disciple is called 'the one whom Jesus loved'?",
        options: ["Peter", "James", "John", "Andrew"],
        answer: "John",
        category: "Bible People",
        difficulty: "medium",
        explanation: "This phrase appears several times in the Gospel of John and is widely understood to refer to John himself, who wrote the Gospel but humbly avoided using his own name."
    },
    {
        id: "BP037",
        question: "Who was the first martyr of the Christian church?",
        options: ["James", "Stephen", "Peter", "Paul"],
        answer: "Stephen",
        category: "Bible People",
        difficulty: "easy",
        explanation: "Acts 7 records Stephen's powerful sermon before the Sanhedrin and his subsequent stoning, making him the first Christian martyr."
    },
    {
        id: "BP038",
        question: "Which Old Testament figure is known for his extraordinary patience in suffering?",
        options: ["Daniel", "Joseph", "Job", "Jeremiah"],
        answer: "Job",
        category: "Bible People",
        difficulty: "easy",
        explanation: "The book of Job details his immense suffering and his steadfast faith despite losing his wealth, children, and health. James 5:11 specifically mentions 'the patience of Job.'"
    },
    {
        id: "BP039",
        question: "Which disciple refused to believe in the resurrection until he could touch Jesus' wounds?",
        options: ["Peter", "John", "Philip", "Thomas"],
        answer: "Thomas",
        category: "Bible People",
        difficulty: "medium",
        explanation: "John 20:24-29 records how Thomas declared he would not believe unless he could put his finger in the nail marks and his hand in Jesus' side, earning him the nickname 'Doubting Thomas.'"
    },
    {
        id: "BP040",
        question: "Which prophet had children with symbolic names including 'Not My People' (Lo-Ammi) and 'No Mercy' (Lo-Ruhamah)?",
        options: ["Isaiah", "Jeremiah", "Ezekiel", "Hosea"],
        answer: "Hosea",
        category: "Bible People",
        difficulty: "hard",
        explanation: "Hosea 1:6-9 records that Hosea's children were given these symbolic names to represent God's judgment on Israel, though later in the book God promises to restore the relationship."
    },
    {
        id: "BP041",
        question: "Which Roman official was described as 'one who feared God with all his household, gave alms generously, and prayed continually'?",
        options: ["Felix", "Cornelius", "Julius", "Festus"],
        answer: "Cornelius",
        category: "Bible People",
        difficulty: "medium",
        explanation: "Acts 10:2 describes Cornelius with these exact words, highlighting his exceptional devotion even before his conversion to Christianity."
    },
    {
        id: "BP042",
        question: "Which king of Israel was known for his wisdom and wrote many of the Proverbs?",
        options: ["David", "Solomon", "Hezekiah", "Josiah"],
        answer: "Solomon",
        category: "Bible People",
        difficulty: "easy",
        explanation: "1 Kings 4:29-34 describes Solomon's God-given wisdom, and he is traditionally credited with writing most of the book of Proverbs, as well as Ecclesiastes and Song of Solomon."
    },
    {
        id: "BP043",
        question: "Who was the first person to be called a prophet in the Bible?",
        options: ["Enoch", "Noah", "Abraham", "Moses"],
        answer: "Abraham",
        category: "Bible People",
        difficulty: "hard",
        explanation: "Genesis 20:7 is the first time the word 'prophet' appears in the Bible, where God refers to Abraham as 'a prophet' when speaking to Abimelech."
    },
    {
        id: "BP044",
        question: "Which disciple walked on water with Jesus before beginning to sink?",
        options: ["John", "James", "Andrew", "Peter"],
        answer: "Peter",
        category: "Bible People",
        difficulty: "easy",
        explanation: "Matthew 14:28-31 records how Peter asked to join Jesus walking on the water, stepped out of the boat, but began to sink when he took his eyes off Jesus and noticed the strong wind."
    },
    {
        id: "BP045",
        question: "Who was the first person to be raised from the dead in the Bible?",
        options: ["The widow of Zarephath's son", "The Shunammite woman's son", "Lazarus", "Jairus's daughter"],
        answer: "The widow of Zarephath's son",
        category: "Bible People",
        difficulty: "hard",
        explanation: "1 Kings 17:17-24 records how Elijah raised the son of the widow of Zarephath, which is the first resurrection recorded in Scripture."
    },
    {
        id: "BP046",
        question: "Which prophet was instructed to eat a scroll that tasted sweet but made his stomach bitter?",
        options: ["Isaiah", "Jeremiah", "Ezekiel", "John in Revelation"],
        answer: "John in Revelation",
        category: "Bible People",
        difficulty: "medium",
        explanation: "Revelation 10:9-10 describes John being told to eat a little scroll that would be sweet in his mouth but bitter in his stomach, symbolizing the message he would deliver."
    },
    {
        id: "BP047",
        question: "Who was the first person to be called by God to be a prophet while still a child?",
        options: ["David", "Samuel", "Jeremiah", "Daniel"],
        answer: "Samuel",
        category: "Bible People",
        difficulty: "medium",
        explanation: "1 Samuel 3 records God's call to young Samuel while he was serving under Eli in the tabernacle."
    },
    {
        id: "BP048",
        question: "Which woman in the Bible is described as 'a seller of purple' who became a believer after hearing Paul preach?",
        options: ["Priscilla", "Phoebe", "Lydia", "Dorcas"],
        answer: "Lydia",
        category: "Bible People",
        difficulty: "medium",
        explanation: "Acts 16:14-15 describes Lydia as a seller of purple cloth from Thyatira who listened to Paul, became a believer, and invited the missionaries to stay at her home."
    },
    {
        id: "BP049",
        question: "Who was the high priest at the time of Jesus' crucifixion?",
        options: ["Annas", "Caiaphas", "Ananias", "Gamaliel"],
        answer: "Caiaphas",
        category: "Bible People",
        difficulty: "medium",
        explanation: "Matthew 26:3-4, 57 identifies Caiaphas as the high priest who presided over Jesus' trial before the Sanhedrin. Annas was his father-in-law and a former high priest."
    },
    {
        id: "BP050",
        question: "Which prophet was taken to Jerusalem in visions of God and saw abominations in the temple?",
        options: ["Isaiah", "Jeremiah", "Ezekiel", "Daniel"],
        answer: "Ezekiel",
        category: "Bible People",
        difficulty: "hard",
        explanation: "Ezekiel 8 describes how the prophet was transported in a vision to Jerusalem where he witnessed various abominations being committed in the temple, including idol worship and sun worship."
    },
    {
        id: "BP051",
        question: "Who was the first person to be called 'the friend of God' in the Bible?",
        options: ["Noah", "Abraham", "Moses", "David"],
        answer: "Abraham",
        category: "Bible People",
        difficulty: "medium",
        explanation: "James 2:23 refers to Abraham as 'the friend of God,' referencing Isaiah 41:8 and 2 Chronicles 20:7 where similar descriptions are given."
    },
    {
        id: "BP052",
        question: "Which apostle was a tax collector before following Jesus?",
        options: ["Peter", "Matthew", "Thomas", "Bartholomew"],
        answer: "Matthew",
        category: "Bible People",
        difficulty: "easy",
        explanation: "Matthew 9:9 describes how Jesus called Matthew (also called Levi) from his tax collector's booth to follow Him."
    },
    {
        id: "BP053",
        question: "Who was the first person to be filled with the Holy Spirit in the Bible?",
        options: ["Moses", "Bezalel", "Joshua", "David"],
        answer: "Bezalel",
        category: "Bible People",
        difficulty: "hard",
        explanation: "Exodus 31:1-5 states that God filled Bezalel with the Spirit of God, with wisdom, understanding, knowledge, and all craftsmanship to design artistic works for the tabernacle."
    },
    {
        id: "BP054",
        question: "Which prophet was swallowed by a great fish?",
        options: ["Elijah", "Jonah", "Amos", "Hosea"],
        answer: "Jonah",
        category: "Bible People",
        difficulty: "easy",
        explanation: "The book of Jonah records how he was swallowed by a great fish when trying to flee from God's command to preach to Nineveh."
    },
    {
        id: "BP055",
        question: "Who was the first person to be called a 'Christian' in the Bible?",
        options: ["The believers in Jerusalem", "The believers in Antioch", "The believers in Rome", "The believers in Ephesus"],
        answer: "The believers in Antioch",
        category: "Bible People",
        difficulty: "medium",
        explanation: "Acts 11:26 states that 'the disciples were first called Christians in Antioch.'"
    },
    {
        id: "BP056",
        question: "Which woman in Philippi opened her home to Paul and his companions after her conversion?",
        options: ["Priscilla", "Phoebe", "Lydia", "Eunice"],
        answer: "Lydia",
        category: "Bible People",
        difficulty: "medium",
        explanation: "Acts 16:15 records that after Lydia and her household were baptized, she invited Paul and his companions to stay at her home, saying, 'If you consider me a believer in the Lord, come and stay at my house.' Her hospitality became important for the early church in Philippi."
    },
    {
        id: "BP057",
        question: "Who was the first king of Israel?",
        options: ["David", "Saul", "Solomon", "Samuel"],
        answer: "Saul",
        category: "Bible People",
        difficulty: "easy",
        explanation: "1 Samuel 9-10 records how Saul was anointed by Samuel as the first king of Israel."
    },
    {
        id: "BP058",
        question: "Which prophet was taken up to heaven without experiencing death?",
        options: ["Elijah", "Enoch", "Moses", "Isaiah"],
        answer: "Enoch",
        category: "Bible People",
        difficulty: "medium",
        explanation: "Genesis 5:24 states that 'Enoch walked with God; then he was no more, because God took him away.' Hebrews 11:5 confirms that Enoch did not experience death."
    },
    {
        id: "BP059",
        question: "Though known for his great strength, Samson's downfall was ultimately caused by his violation of the Nazarite vow, specifically when he allowed Delilah to cut his hair, which was a symbol of his __________.",
        options: ["divine strength", "royal lineage", "consecration to God", "judicial authority"],
        answer: "consecration to God",
        category: "Bible People",
        difficulty: "medium",
        explanation: "While his strength was lost, the hair itself was the external sign of his dedication and separation to God, not the source of the strength."
    },
    {
        id: "BP060",
        question: "The prophet __________ was taken to heaven in a chariot of fire without seeing death, leaving his mantle and a double portion of his spirit for his successor, Elisha.",
        options: ["Enoch", "Moses", "Elijah", "Isaiah"],
        answer: "Elijah",
        category: "Bible People",
        difficulty: "medium",
        explanation: "Enoch also was translated without seeing death, but it was Elijah who was associated with the chariot of fire and Elisha."
    },
    {
        id: "BP061",
        question: "__________ was the high priest who condemned Jesus, yet unknowingly prophesied that it was 'expedient that one man should die for the people.'",
        options: ["Annas", "Caiaphas", "Eli", "Abiathar"],
        answer: "Caiaphas",
        category: "Bible People",
        difficulty: "medium",
        explanation: "Annas was his father-in-law and a former high priest, but Caiaphas presided over the trial and made this statement."
    },
    {
        id: "BP062",
        question: "The runaway slave for whom Paul wrote a personal letter of appeal to his master, Philemon, was named __________.",
        options: ["Tychicus", "Epaphras", "Onesimus", "Demas"],
        answer: "Onesimus",
        category: "Bible People",
        difficulty: "medium",
        explanation: "The book of Philemon is Paul's plea for Onesimus, whose name means 'profitable.'"
    },
    {
        id: "BP063",
        question: "King __________ of Judah was struck with leprosy for presumptuously entering the temple to burn incense, a duty reserved for the priests.",
        options: ["Saul", "Uzziah", "Ahaz", "Manasseh"],
        answer: "Uzziah",
        category: "Bible People",
        difficulty: "medium",
        explanation: "2 Chronicles 26. Saul also offered an unlawful sacrifice, but it was Uzziah who was struck with leprosy for this specific act."
    },
    {
        id: "PR032",
        question: "The 'little horn' of Daniel 7 is described as having 'eyes like the eyes of man, and a mouth speaking great things,' symbolizing its intelligence and __________.",
        options: ["military power", "divine authority", "blasphemous claims", "political cunning"],
        answer: "blasphemous claims",
        category: "Prophecy",
        difficulty: "medium",
        explanation: "The 'great things' are specifically identified as words against the Most High."
    },
    {
        id: "PR033",
        question: "In Revelation 13, the beast from the sea receives its power, throne, and great authority from the __________, which represents Satan working through Pagan Rome.",
        options: ["false prophet", "dragon", "beast from the earth", "ten horns"],
        answer: "dragon",
        category: "Prophecy",
        difficulty: "medium",
        explanation: "The dragon is explicitly identified as Satan in Revelation 12:9 and 20:2, and in the context of Revelation 13, it represents Satan working through Pagan Rome."
    },
    {
        id: "PR034",
        question: "The prophetic period of 'a time, times, and half a time,' during which the saints would be given into the hand of the little horn power, is equivalent to __________.",
        options: ["2300 days/years", "490 days/years", "1260 days/years", "1335 days/years"],
        answer: "1260 days/years",
        category: "Prophecy",
        difficulty: "medium",
        explanation: "This period is mentioned in Daniel 7:25, 12:7, and Revelation 12:14, and is interpreted as 1260 literal years."
    },
    {
        id: "PR035",
        question: "The 'Abomination of Desolation' spoken of by Daniel the prophet, and referenced by Jesus, had its primary historical fulfillment in the __________ surrounding Jerusalem in A.D. 70.",
        options: ["pagan standards of the Roman armies", "desecration by Antiochus Epiphanes", "establishment of a pagan temple", "great earthquake"],
        answer: "pagan standards of the Roman armies",
        category: "Prophecy",
        difficulty: "medium",
        explanation: "The Roman armies set up their standards (idolatrous emblems) in the holy place, which was the signal for Christians to flee."
    },
    {
        id: "PR036",
        question: "The second beast of Revelation 13, which comes out of the earth, is identified by its two horns like a lamb and its voice like a dragon, representing a nation that begins with Christlike principles but eventually exercises __________.",
        options: ["global economic control", "religious tolerance", "tyrannical, coercive power", "peaceful diplomacy"],
        answer: "tyrannical, coercive power",
        category: "Prophecy",
        difficulty: "medium",
        explanation: "The two horns like a lamb represent Christlike principles, but the beast speaks like a dragon, indicating a change to coercive power."
    },
    {
        id: "DH024",
        question: "Daniel and his companions chose a diet of 'pulse and water' in Babylon to avoid being defiled by the king's meat, which was likely offered to idols and violated __________.",
        options: ["their personal tastes", "Mosaic dietary laws", "a specific prophetic command", "Babylonian health codes"],
        answer: "Mosaic dietary laws",
        category: "Diet & Health",
        difficulty: "medium",
        explanation: "Daniel 1:8-16. The food was likely unclean or offered to idols, violating the Mosaic law."
    },
    {
        id: "DH025",
        question: "The biblical prohibition against consuming blood is based on the principle that the __________ of the flesh is in the blood.",
        options: ["life", "strength", "soul", "spirit"],
        answer: "life",
        category: "Diet & Health",
        difficulty: "medium",
        explanation: "Leviticus 17:11. The life of the flesh is in the blood, so it was not to be eaten."
    },
    {
        id: "DH026",
        question: "According to Leviticus 11, clean fish must have both __________ and scales.",
        options: ["gills", "fins", "a backbone", "smooth skin"],
        answer: "fins",
        category: "Diet & Health",
        difficulty: "medium",
        explanation: "Leviticus 11:9-12. Clean fish must have both fins and scales."
    },
    {
        id: "DH027",
        question: "The 'more excellent way' described by Paul in the context of eating meat offered to idols was not about the food itself, but about the principle of __________.",
        options: ["strict vegetarianism", "perfect health", "love and consideration for others' consciences", "adherence to ceremonial laws"],
        answer: "love and consideration for others' consciences",
        category: "Diet & Health",
        difficulty: "medium",
        explanation: "1 Corinthians 8, Romans 14. Paul emphasizes love and consideration for others' consciences."
    },
    {
        id: "DH028",
        question: "One of the eight laws of health emphasized in SDA tradition is __________, which means self-control and moderation in good things and abstinence from harmful things.",
        options: ["nutrition", "exercise", "temperance", "rest"],
        answer: "temperance",
        category: "Diet & Health",
        difficulty: "medium",
        explanation: "Temperance is one of the eight laws of health: Nutrition, Exercise, Water, Sunlight, Temperance, Air, Rest, Trust in God."
    },
    {
        id: "LDE023",
        question: "The 'shaking' among God's people is caused primarily by the introduction of false theories and the rejection of the __________ called for by the True Witness to the Laodiceans.",
        options: ["latter rain", "investigative judgment", "straight testimony", "Sabbath truth"],
        answer: "straight testimony",
        category: "Last Day Events",
        difficulty: "medium",
        explanation: "The shaking is caused by the rejection of the straight testimony to the Laodiceans."
    },
    {
        id: "LDE024",
        question: "The Latter Rain is given not to cleanse character, but to empower the saints for the proclamation of the __________.",
        options: ["third angel's message", "loud cry", "judgment of the living", "Sabbath truth"],
        answer: "loud cry",
        category: "Last Day Events",
        difficulty: "medium",
        explanation: "The Latter Rain is given to empower the saints for the Loud Cry."
    },
    {
        id: "LDE025",
        question: "Satan's crowning act in the great drama of deception will be his personal __________ of Christ, appearing as a being of dazzling brightness.",
        options: ["denial", "accusation", "impersonation", "condemnation"],
        answer: "impersonation",
        category: "Last Day Events",
        difficulty: "medium",
        explanation: "Satan will impersonate Christ as his final deception."
    },
    {
        id: "LDE026",
        question: "The 'Image to the Beast' is formed when apostate Protestantism influences the __________ to enforce its religious dogmas.",
        options: ["papal power", "United Nations", "civil government", "world courts"],
        answer: "civil government",
        category: "Last Day Events",
        difficulty: "medium",
        explanation: "The image is formed when church and state unite to enforce religious dogmas."
    },
    {
        id: "LDE027",
        question: "During the Time of Jacob's Trouble, the saints' deepest anguish comes from the fear that they have some __________ and are cut off from God's presence.",
        options: ["physical ailment", "unconfessed sin", "doctrinal error", "lack of provisions"],
        answer: "unconfessed sin",
        category: "Last Day Events",
        difficulty: "medium",
        explanation: "The saints' greatest anguish is the fear of unconfessed sin."
    },
    {
        id: "GS034",
        question: "The 1888 General Conference session in Minneapolis is a landmark in Adventist history for its powerful emphasis on the doctrine of __________.",
        options: ["the heavenly sanctuary", "the state of the dead", "righteousness by faith", "the Spirit of Prophecy"],
        answer: "righteousness by faith",
        category: "General SDA",
        difficulty: "medium",
        explanation: "The 1888 session emphasized righteousness by faith, a pivotal doctrine in Adventist theology."
    },
    {
        id: "GS035",
        question: "The 'Great Disappointment' of October 22, 1844, resulted from a misunderstanding of the __________ of the event described in Daniel 8:14, not the time.",
        options: ["location", "nature", "duration", "participants"],
        answer: "nature",
        category: "General SDA",
        difficulty: "medium",
        explanation: "They expected Christ's return to earth, but the event was the beginning of His final ministry in the heavenly sanctuary."
    },
    {
        id: "GS036",
        question: "The writings of Ellen G. White are referred to by Adventists as the 'Spirit of Prophecy' and are considered a 'lesser light' to lead people to the 'greater light,' which is __________.",
        options: ["Jesus Christ", "the church", "the Bible", "the Sabbath"],
        answer: "the Bible",
        category: "General SDA",
        difficulty: "medium",
        explanation: "Ellen White described her writings as a 'lesser light' to lead people to the 'greater light' of the Bible."
    },
    {
        id: "GS037",
        question: "The first official overseas missionary sent by the Seventh-day Adventist church was __________, who went to Switzerland in 1874.",
        options: ["James White", "Joseph Bates", "J. N. Andrews", "Uriah Smith"],
        answer: "J. N. Andrews",
        category: "General SDA",
        difficulty: "medium",
        explanation: "J. N. Andrews was the first official overseas missionary, sent to Switzerland in 1874."
    },
    {
        id: "GS038",
        question: "The 'Three Angels' Messages,' which form the core of the Adventist mission, are found in the book of __________, chapter 14.",
        options: ["Daniel", "Matthew", "Revelation", "Isaiah"],
        answer: "Revelation",
        category: "General SDA",
        difficulty: "medium",
        explanation: "Revelation 14 contains the Three Angels' Messages, the core of Adventist mission."
    },
    {
        id: "MU021",
        question: "In the biblical account of the dedication of Solomon's temple, the glory of the Lord filled the house when the musicians and singers were as __________ in praising the Lord.",
        options: ["loud", "one", "skilled", "many"],
        answer: "one",
        category: "Music",
        difficulty: "medium",
        explanation: "2 Chronicles 5:13. The musicians and singers were as one, and the glory of the Lord filled the temple."
    },
    {
        id: "MU022",
        question: "The book of __________ is the longest book in the Bible and serves as the primary hymnbook of ancient Israel.",
        options: ["Proverbs", "Isaiah", "Psalms", "Song of Solomon"],
        answer: "Psalms",
        category: "Music",
        difficulty: "medium",
        explanation: "Psalms is the longest book and the hymnbook of Israel."
    },
    {
        id: "MU023",
        question: "When King Saul was troubled by an evil spirit, __________ would play the harp, and the spirit would depart from him.",
        options: ["Jonathan", "Samuel", "David", "Asaph"],
        answer: "David",
        category: "Music",
        difficulty: "medium",
        explanation: "David played the harp for Saul, and the evil spirit departed."
    },
    {
        id: "MU024",
        question: "The song of the 144,000 is called the song of __________ and the Lamb, a song of deliverance that only they can learn.",
        options: ["David", "Moses", "Zion", "Redemption"],
        answer: "Moses",
        category: "Music",
        difficulty: "medium",
        explanation: "Revelation 15:3. The 144,000 sing the song of Moses and the Lamb."
    },
    {
        id: "MU025",
        question: "Paul and Silas, while imprisoned in Philippi, prayed and sang praises to God at __________, leading to an earthquake and the conversion of the jailer.",
        options: ["sunset", "dawn", "midnight", "noon"],
        answer: "midnight",
        category: "Music",
        difficulty: "medium",
        explanation: "Acts 16:25-26. Paul and Silas sang at midnight, and an earthquake followed."
    },
    {
        id: "GC031",
        question: "The book states that the French Revolution demonstrated the direct result of a nation banning the Bible and denying God's __________.",
        options: ["mercy", "existence", "law", "prophets"],
        answer: "existence",
        category: "The Great Controversy",
        difficulty: "medium",
        explanation: "The French Revolution is cited as an example of the consequences of rejecting God's Word and authority."
    },
    {
        id: "GC032",
        question: "The 'two great errors' that form the foundation of modern spiritualism are the immortality of the soul and __________.",
        options: ["Sunday sacredness", "papal infallibility", "the secret rapture", "pantheism"],
        answer: "Sunday sacredness",
        category: "The Great Controversy",
        difficulty: "medium",
        explanation: "The two great errors are the immortality of the soul and Sunday sacredness."
    },
    {
        id: "GC033",
        question: "After the Great Disappointment, the key that unlocked the mystery was a new understanding of Christ's ministry in the __________.",
        options: ["heavenly sanctuary", "human heart", "earthly church", "wilderness"],
        answer: "heavenly sanctuary",
        category: "The Great Controversy",
        difficulty: "medium",
        explanation: "The sanctuary in heaven, not the earth, was the true focus of Daniel 8:14."
    },
    {
        id: "GC034",
        question: "The book argues that the divine institution of marriage and the __________ were 'twin institutions' given in Eden.",
        options: ["family", "Sabbath", "priesthood", "sanctuary"],
        answer: "Sabbath",
        category: "The Great Controversy",
        difficulty: "medium",
        explanation: "Marriage and the Sabbath were both established in Eden."
    },
    {
        id: "GC035",
        question: "The final conclusion and overarching theme of the entire book is that God's __________ is immutable and His government will be vindicated.",
        options: ["power", "love", "grace", "law"],
        answer: "law",
        category: "The Great Controversy",
        difficulty: "medium",
        explanation: "The book concludes that God's law is unchangeable and His government will ultimately be vindicated."
    }
];