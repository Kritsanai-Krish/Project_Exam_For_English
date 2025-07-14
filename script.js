// // ฟังก์ชันสำหรับเล่นซาวเอฟเฟค
// function playSound() {
//     document.getElementById("soundEffect").play();
// }

// Registration Elements
// const nameInput = document.getElementById('stun');
// const lastnameInput = document.getElementById('stul');
// const numberInput = document.getElementById('stunm');
// const submitRegister = document.getElementById('sub-reg');
const nameInput = document.getElementById('name');
const lastnameInput = document.getElementById('lastname');
const numberInput = document.getElementById('number');
const submitRegister = document.getElementById('submit-register');

// Quiz Elements
// const quizPage = document.getElementById('page');
// const questionEl = document.getElementById('qr');
// const quizAnswer = document.getElementById('qra');
// const submitAnswer = document.getElementById('subqra');
// const feedbackEl = document.getElementById('fb');
const quizPage = document.getElementById('quizPage');
const questionEl = document.getElementById('question');
const quizAnswer = document.getElementById('quizAnswer');
const submitAnswer = document.getElementById('submitAnswer');
const feedbackEl = document.getElementById('feedback');

// Result Elements
// const resultPage = document.getElementById('rs');
// const finalScoreEl = document.getElementById('fs');
// const downloadResultBtn = document.getElementById('dl');
const resultPage = document.getElementById('resultPage');
const finalScoreEl = document.getElementById('finalScore');
const downloadResultBtn = document.getElementById('downloadResult');

// Pages
// const registerPage = document.getElementById('regsp');
const registerPage = document.getElementById('registerpage');

// Quiz Data (เพิ่ม/ลดโจทย์ได้ตามต้องการ)
// const questions = [
//   { sentence: "I want ____ eat pizza.", answerHash: "663ea1bfffe5038f3f0cf667f14c4257eff52d77ce7f2a218f72e9286616ea39" },
//   { sentence: "She ____ playing soccer.", answerHash: "fa51fd49abf67705d6a35d18218c115ff5633aec1f9ebfdc9d5d4956416f57f6" },
//   { sentence: "They ____ to the park yesterday.", answerHash: "bd7e83102fa3e6aa125f3b4c7d6fb561871f02c476cee0ee3fe26c8afe7f3058" },
//   { sentence: "He ____ a doctor.", answerHash: "fa51fd49abf67705d6a35d18218c115ff5633aec1f9ebfdc9d5d4956416f57f6" },
//   { sentence: "We ____ happy.", answerHash: "ba78973ddcf98d4e5369f5e722d681d94f5106895e5d6cf6fa3ca8240fabdc14" },
//   { sentence: "The cat ____ on the mat.", answerHash: "339efeab70b4cc6e2755ec57d2290484ef2363f955c16df3900ad44382227429" },
//   { sentence: "She ____ a book.", answerHash: "3566cf23ecb6f832d67d1439e0cb3d05eb7f4ad702c6f478aa96f19812f18e8c" },
//   { sentence: "They ____ playing games.", answerHash: "686f746a95b6f836d7d70567c302c3f9ebb5ee0def3d1220ee9d4e9f34f5e131" },
//   { sentence: "I ____ a student.", answerHash: "ab6db599234d2636659cba1aa191bd014c3867d5cfade98ff694785c20c28fc6" },
//   { sentence: "He ____ to school every day.", answerHash: "f1537d8de0bbe107268e2b4263ae6753d2de8a56cb6463b92d7df109079aad51" }
// ];
const questions = [
    // Topic 1a: Used to and would (20 questions)
    {
        sentence: "When I was young, I ____ ride my bike to school.",
        answerHash: "1c009af3ff5717030f25dc850c1a588992b77d41406dfc23dd82c0c5f5c761c9"
    },
    {
        sentence: "Every summer, my grandparents ____ visit us in the countryside.",
        answerHash: "c6323a2117013ed6844d6411a3d0fb37e8ed54eda75bb3833959b02fd71514e0"
    },
    {
        sentence: "She ____ always sing in the choir during festivals.",
        answerHash: "c6323a2117013ed6844d6411a3d0fb37e8ed54eda75bb3833959b02fd71514e0"
    },
    {
        sentence: "We ____ live in a small town before moving to the city.",
        answerHash: "1c009af3ff5717030f25dc850c1a588992b77d41406dfc23dd82c0c5f5c761c9"
    },
    {
        sentence: "He ____ spend his weekends fishing by the lake.",
        answerHash: "1c009af3ff5717030f25dc850c1a588992b77d41406dfc23dd82c0c5f5c761c9"
    },
    {
        sentence: "As a child, I ____ read fairy tales before bed.",
        answerHash: "1c009af3ff5717030f25dc850c1a588992b77d41406dfc23dd82c0c5f5c761c9"
    },
    {
        sentence: "They ____ take long walks in the evening.",
        answerHash: "c6323a2117013ed6844d6411a3d0fb37e8ed54eda75bb3833959b02fd71514e0"
    },
    {
        sentence: "My brother ____ play video games all day.",
        answerHash: "1c009af3ff5717030f25dc850c1a588992b77d41406dfc23dd82c0c5f5c761c9"
    },
    {
        sentence: "During our holidays, we ____ visit our relatives.",
        answerHash: "c6323a2117013ed6844d6411a3d0fb37e8ed54eda75bb3833959b02fd71514e0"
    },
    {
        sentence: "Before the internet, people ____ write letters by hand.",
        answerHash: "1c009af3ff5717030f25dc850c1a588992b77d41406dfc23dd82c0c5f5c761c9"
    },
    {
        sentence: "She ____ always bake cookies on Sundays.",
        answerHash: "c6323a2117013ed6844d6411a3d0fb37e8ed54eda75bb3833959b02fd71514e0"
    },
    {
        sentence: "I ____ spend my afternoons drawing cartoons.",
        answerHash: "1c009af3ff5717030f25dc850c1a588992b77d41406dfc23dd82c0c5f5c761c9"
    },
    {
        sentence: "He ____ play football with his friends after school.",
        answerHash: "1c009af3ff5717030f25dc850c1a588992b77d41406dfc23dd82c0c5f5c761c9"
    },
    {
        sentence: "In the old days, families ____ gather for dinner together.",
        answerHash: "c6323a2117013ed6844d6411a3d0fb37e8ed54eda75bb3833959b02fd71514e0"
    },
    {
        sentence: "They ____ travel to the mountains every winter.",
        answerHash: "1c009af3ff5717030f25dc850c1a588992b77d41406dfc23dd82c0c5f5c761c9"
    },
    {
        sentence: "My uncle ____ tell fascinating stories at family reunions.",
        answerHash: "c6323a2117013ed6844d6411a3d0fb37e8ed54eda75bb3833959b02fd71514e0"
    },
    {
        sentence: "When we were kids, we ____ build treehouses in the forest.",
        answerHash: "1c009af3ff5717030f25dc850c1a588992b77d41406dfc23dd82c0c5f5c761c9"
    },
    {
        sentence: "She ____ always help her mother in the garden.",
        answerHash: "c6323a2117013ed6844d6411a3d0fb37e8ed54eda75bb3833959b02fd71514e0"
    },
    {
        sentence: "I ____ go swimming in the river during summer.",
        answerHash: "1c009af3ff5717030f25dc850c1a588992b77d41406dfc23dd82c0c5f5c761c9"
    },
    {
        sentence: "Every evening, he ____ practice the piano for hours.",
        answerHash: "c6323a2117013ed6844d6411a3d0fb37e8ed54eda75bb3833959b02fd71514e0"
    },

    // Topic 1b: Past perfect simple and past perfect continuous (20 questions)
    {
        sentence: "By the time the show started, we ____ (wait) for over an hour.",
        answerHash: "38472eaa72dfcdbc608f382f38d14fdac6b8a5d59797973cf616ce494d5ee303"
    },
    {
        sentence: "She ____ already finished her homework when her friend arrived.",
        answerHash: "e02a753f0c060173d1facd7b169863a1731999af98724501375f53171cb8e4a4"
    },
    {
        sentence: "They ____ (live) in that city for ten years before they moved.",
        answerHash: "b368b0da62ea5caecefeaea3be23b369b79feeb9d7cc49a7b903e9fccead40db"
    },
    {
        sentence: "He ____ (work) all day, so he was very tired by dinner.",
        answerHash: "fa87a245da203301ad3b6216fb0b8b5eaf4ed43598acda424e26dd96067cecb0"
    },
    {
        sentence: "When I arrived, they ____ (already leave) the party.",
        answerHash: "c479615692e0a19d6de3a43d4c847a7d4b261970198f2d4faaf569852abb8f20"
    },
    {
        sentence: "We ____ (study) for hours when the power went out.",
        answerHash: "fce6758d7590830077ba5ec4f63f902e16ac3738a1f48213bba3308069cc203b"
    },
    {
        sentence: "She ____ (finish) her meal before the movie began.",
        answerHash: "733ea9caeaf050befda0a3c3f09e5878a67db8d02fcfda2637f389e3f6ca21b9"
    },
    {
        sentence: "They ____ (argue) for a long time before they reached an agreement.",
        answerHash: "86e82726972c627803aa4f4a61f8b218e511f99b37dde14fb232c6c125eda7eb"
    },
    {
        sentence: "By the time the teacher entered, the students ____ (complete) the test.",
        answerHash: "c690bce7f4dee5590465fcda3b28d83d4a09de638d3d5572bbac708be2d8ca94"
    },
    {
        sentence: "I ____ (wait) for the bus for thirty minutes when it finally arrived.",
        answerHash: "38472eaa72dfcdbc608f382f38d14fdac6b8a5d59797973cf616ce494d5ee303"
    },
    {
        sentence: "He ____ (read) the book before the exam started.",
        answerHash: "6e9d1e089de8d25274f58aeb226ed00710b2a16b0b31dcc79c47b7575cd133e1"
    },
    {
        sentence: "We ____ (plan) the trip for weeks before we set off.",
        answerHash: "e6bf23f5610c06afe760e215bf16f00a92123ee6b283a263cbc8402e7f9929b5"
    },
    {
        sentence: "She ____ (prepare) the presentation for days before the meeting.",
        answerHash: "836e0d60705525bbbbb5f0eb222eae3c605ef526f7fa7fcf72223e388142e992"
    },
    {
        sentence: "They ____ (arrive) at the station when the train departed.",
        answerHash: "e97781f899628de6e1bd28b2d99fdc225f4bc136a35d9560b0335a850f32ce3f"
    },
    {
        sentence: "I ____ (not/see) such a beautiful sunset before that day.",
        answerHash: "55f1f47adcb96e36635efcc0f59fa5fcfb083554fabc4acb1f02f01cb67e07cc"
    },
    {
        sentence: "He ____ (practice) the guitar for months when he finally performed.",
        answerHash: "fc11f9c7c88b5dab79b239bb6eb546498f5ad27fdae90ab794f4728db98fa108"
    },
    {
        sentence: "They ____ (not/finish) their dinner by the time I called.",
        answerHash: "f9677e1cae080a52cd13b5b551fbc57d21a1fece50a123e4f12b8101c3c69eda"
    },
    {
        sentence: "We ____ (wait) at the restaurant for over half an hour.",
        answerHash: "38472eaa72dfcdbc608f382f38d14fdac6b8a5d59797973cf616ce494d5ee303"
    },
    {
        sentence: "She ____ (decide) to leave before the event got crowded.",
        answerHash: "db15de5335347b2942921cdef24535cdc950a9c20a183d70da7dfc063aaf4321"
    },
    {
        sentence: "By the time the rain stopped, we ____ (enjoy) our picnic for an hour.",
        answerHash: "7e6f9bfc606c484737d11671ca40f64640bc1281fa4a0286b281468fa446e5df"
    },
    // Topic 3: Future Tense (40 questions)
    {
        sentence: "I ____ visit my grandparents next weekend.",
        answerHash: "bc16f5825a9dafc8c245dc7cd93f4e671a9885035a73e6ef29c04f2d3863bfab"
    },
    {
        sentence: "She ____ be studying abroad next year.",
        answerHash: "bc16f5825a9dafc8c245dc7cd93f4e671a9885035a73e6ef29c04f2d3863bfab"
    },
    {
        sentence: "We ____ have a meeting at 3 PM tomorrow.",
        answerHash: "98a0f1582c6e35d9945c8c28965bd4c2a0cabe9b7f96ef745cefc06b5f859e5c"
    },
    {
        sentence: "They ____ finish the project by next month.",
        answerHash: "bc16f5825a9dafc8c245dc7cd93f4e671a9885035a73e6ef29c04f2d3863bfab"
    },
    {
        sentence: "He ____ travel to Japan for his vacation.",
        answerHash: "93dee561c63f9d982651d9a8dc4c33dae4cfb7b1b11722dc70bc195fd641db99"
    },
    {
        sentence: "I ____ call you as soon as I arrive.",
        answerHash: "bc16f5825a9dafc8c245dc7cd93f4e671a9885035a73e6ef29c04f2d3863bfab"
    },
    {
        sentence: "The weather ____ be sunny tomorrow.",
        answerHash: "bc16f5825a9dafc8c245dc7cd93f4e671a9885035a73e6ef29c04f2d3863bfab"
    },
    {
        sentence: "We ____ attend the conference next week.",
        answerHash: "98a0f1582c6e35d9945c8c28965bd4c2a0cabe9b7f96ef745cefc06b5f859e5c"
    },
    {
        sentence: "She ____ start her new job in May.",
        answerHash: "bc16f5825a9dafc8c245dc7cd93f4e671a9885035a73e6ef29c04f2d3863bfab"
    },
    {
        sentence: "I ____ be watching the game tonight.",
        answerHash: "d66d7e3129ec9b833529b9d92b4f495474822539a89f3c2af7446c5ea8041597"
    },
    {
        sentence: "They ____ launch the new product soon.",
        answerHash: "bc16f5825a9dafc8c245dc7cd93f4e671a9885035a73e6ef29c04f2d3863bfab"
    },
    {
        sentence: "He ____ take a day off next Friday.",
        answerHash: "93dee561c63f9d982651d9a8dc4c33dae4cfb7b1b11722dc70bc195fd641db99"
    },
    {
        sentence: "We ____ celebrate his birthday next month.",
        answerHash: "bc16f5825a9dafc8c245dc7cd93f4e671a9885035a73e6ef29c04f2d3863bfab"
    },
    {
        sentence: "I ____ be participating in the contest next weekend.",
        answerHash: "d66d7e3129ec9b833529b9d92b4f495474822539a89f3c2af7446c5ea8041597"
    },
    {
        sentence: "She ____ graduate from college this year.",
        answerHash: "bc16f5825a9dafc8c245dc7cd93f4e671a9885035a73e6ef29c04f2d3863bfab"
    },
    {
        sentence: "They ____ move to a new house next summer.",
        answerHash: "98a0f1582c6e35d9945c8c28965bd4c2a0cabe9b7f96ef745cefc06b5f859e5c"
    },
    {
        sentence: "I ____ start my training program next Monday.",
        answerHash: "bc16f5825a9dafc8c245dc7cd93f4e671a9885035a73e6ef29c04f2d3863bfab"
    },
    {
        sentence: "He ____ buy a new car soon.",
        answerHash: "93dee561c63f9d982651d9a8dc4c33dae4cfb7b1b11722dc70bc195fd641db99"
    },
    {
        sentence: "We ____ visit the museum tomorrow.",
        answerHash: "98a0f1582c6e35d9945c8c28965bd4c2a0cabe9b7f96ef745cefc06b5f859e5c"
    },
    {
        sentence: "She ____ call me later today.",
        answerHash: "bc16f5825a9dafc8c245dc7cd93f4e671a9885035a73e6ef29c04f2d3863bfab"
    },
    {
        sentence: "I ____ meet you at the restaurant at 7.",
        answerHash: "bc16f5825a9dafc8c245dc7cd93f4e671a9885035a73e6ef29c04f2d3863bfab"
    },
    {
        sentence: "They ____ be arriving in the evening.",
        answerHash: "98a0f1582c6e35d9945c8c28965bd4c2a0cabe9b7f96ef745cefc06b5f859e5c"
    },
    {
        sentence: "He ____ be working late tonight.",
        answerHash: "bc16f5825a9dafc8c245dc7cd93f4e671a9885035a73e6ef29c04f2d3863bfab"
    },
    {
        sentence: "We ____ see the new movie this weekend.",
        answerHash: "98a0f1582c6e35d9945c8c28965bd4c2a0cabe9b7f96ef745cefc06b5f859e5c"
    },
    {
        sentence: "I ____ send you the details tomorrow.",
        answerHash: "bc16f5825a9dafc8c245dc7cd93f4e671a9885035a73e6ef29c04f2d3863bfab"
    },
    {
        sentence: "She ____ have a surgery next week.",
        answerHash: "93dee561c63f9d982651d9a8dc4c33dae4cfb7b1b11722dc70bc195fd641db99"
    },
    {
        sentence: "They ____ start the meeting at 9 AM.",
        answerHash: "bc16f5825a9dafc8c245dc7cd93f4e671a9885035a73e6ef29c04f2d3863bfab"
    },
    {
        sentence: "I ____ join you for dinner later.",
        answerHash: "d66d7e3129ec9b833529b9d92b4f495474822539a89f3c2af7446c5ea8041597"
    },
    {
        sentence: "He ____ be attending the seminar next month.",
        answerHash: "bc16f5825a9dafc8c245dc7cd93f4e671a9885035a73e6ef29c04f2d3863bfab"
    },
    {
        sentence: "We ____ complete the assignment by tonight.",
        answerHash: "98a0f1582c6e35d9945c8c28965bd4c2a0cabe9b7f96ef745cefc06b5f859e5c"
    },
    {
        sentence: "We ____ have a party next weekend to celebrate.",
        answerHash: "bc16f5825a9dafc8c245dc7cd93f4e671a9885035a73e6ef29c04f2d3863bfab"
    },
    {
        sentence: "He ____ start his new job on Monday.",
        answerHash: "bc16f5825a9dafc8c245dc7cd93f4e671a9885035a73e6ef29c04f2d3863bfab"
    },

    // Topic 4: Probability present and future (70 questions)
    {
        sentence: "By this time tomorrow, I ____ (travel) to New York.",
        answerHash: "85fe48da9a28b932012ee1da6b50ce49904dd94a16de2131cfc80795905b20e1"
    },
    {
        sentence: "By next year, she ____ (finish) her degree.",
        answerHash: "a6b02e5c73d357e43b3aa821af780dfea465da74812c06bc279635abda0a3b26"
    },
    {
        sentence: "If it rains tomorrow, we ____ cancel the picnic.",
        answerHash: "bc16f5825a9dafc8c245dc7cd93f4e671a9885035a73e6ef29c04f2d3863bfab"
    },
    {
        sentence: "He ____ probably arrive by 8 PM.",
        answerHash: "bc16f5825a9dafc8c245dc7cd93f4e671a9885035a73e6ef29c04f2d3863bfab"
    },
    {
        sentence: "I ____ be working on the project at this time next week.",
        answerHash: "403e078ee9785a06b74e616440bd6b969ea9798bbc67849d229113c76f7d51be"
    },
    {
        sentence: "By the end of the month, they ____ complete the renovations.",
        answerHash: "428aafb08e7e49ce656bc88dfd8c2d14e1cf5f7daa218cda746161641537faf7"
    },
    {
        sentence: "If you hurry, you ____ catch the bus.",
        answerHash: "bc16f5825a9dafc8c245dc7cd93f4e671a9885035a73e6ef29c04f2d3863bfab"
    },
    {
        sentence: "I ____ likely see him at the meeting tomorrow.",
        answerHash: "bc16f5825a9dafc8c245dc7cd93f4e671a9885035a73e6ef29c04f2d3863bfab"
    },
    {
        sentence: "By tomorrow, I ____ (finish) my assignment.",
        answerHash: "a6b02e5c73d357e43b3aa821af780dfea465da74812c06bc279635abda0a3b26"
    },
    {
        sentence: "They ____ be traveling around Europe next summer.",
        answerHash: "eb9321834defbc65589cd6fd1d38645700cf792691b45d0192e1850559a65c5a"
    },
    {
        sentence: "If she studies hard, she ____ pass the exam.",
        answerHash: "bc16f5825a9dafc8c245dc7cd93f4e671a9885035a73e6ef29c04f2d3863bfab"
    },
    {
        sentence: "At 5 PM, I ____ (attend) a conference call.",
        answerHash: "d9e015be5925216f3bb647e5e319c269075cad9d532f32e83135821b54141698"
    },
    {
        sentence: "By the time you arrive, we ____ (set up) everything.",
        answerHash: "2404c46a3a018b6e6da7633f9eaeb61ba957017ed40fa769bfbe920267806e57"
    },
    {
        sentence: "I ____ definitely see you at the event.",
        answerHash: "bc16f5825a9dafc8c245dc7cd93f4e671a9885035a73e6ef29c04f2d3863bfab"
    },
    {
        sentence: "At this time tomorrow, they ____ (drive) to the coast.",
        answerHash: "775c5f7f3076f9d7990027776ce7686704f560b31515e9604ab2c45b42fbeb13"
    },
    {
        sentence: "By next month, he ____ (finish) the book.",
        answerHash: "a6b02e5c73d357e43b3aa821af780dfea465da74812c06bc279635abda0a3b26"
    },
    {
        sentence: "If it snows tonight, school ____ be closed tomorrow.",
        answerHash: "bc16f5825a9dafc8c245dc7cd93f4e671a9885035a73e6ef29c04f2d3863bfab"
    },
    {
        sentence: "I ____ surely join the workshop if invited.",
        answerHash: "bc16f5825a9dafc8c245dc7cd93f4e671a9885035a73e6ef29c04f2d3863bfab"
    },
    {
        sentence: "By next week, we ____ (prepare) all the documents.",
        answerHash: "4b2a74377ec8db2b51696d8cdadc3d90d20b3b91003305b5d65f628e19b2a082"
    },
    {
        sentence: "She ____ be enjoying her vacation this time next week.",
        answerHash: "403e078ee9785a06b74e616440bd6b969ea9798bbc67849d229113c76f7d51be"
    },
    {
        sentence: "If they work hard, they ____ achieve their target.",
        answerHash: "bc16f5825a9dafc8c245dc7cd93f4e671a9885035a73e6ef29c04f2d3863bfab"
    },
    {
        sentence: "I ____ probably be studying at the library tonight.",
        answerHash: "403e078ee9785a06b74e616440bd6b969ea9798bbc67849d229113c76f7d51be"
    },
    {
        sentence: "By 10 PM, he ____ (complete) his online course.",
        answerHash: "a0168243aa87ff99f4d2b45d952437579be7eeb1263e3ba3f34acc193837ef91"
    },
    {
        sentence: "If you call now, she ____ come to the phone.",
        answerHash: "bc16f5825a9dafc8c245dc7cd93f4e671a9885035a73e6ef29c04f2d3863bfab"
    },
    {
        sentence: "I ____ be meeting my mentor after lunch.",
        answerHash: "a82dc058000b61c2cff4f6586ba3ece28ac946db845353c4061ec8888909df31"
    },
    {
        sentence: "By next Friday, we ____ (launch) our new website.",
        answerHash: "defb702bf470883912a8a7b442c32726f8a370497cc5b9abc98948a8e7d505a5"
    },
    {
        sentence: "She ____ possibly win the competition.",
        answerHash: "bc16f5825a9dafc8c245dc7cd93f4e671a9885035a73e6ef29c04f2d3863bfab"
    },
    {
        sentence: "At 8 AM, I ____ (take) my morning jog.",
        answerHash: "a21ac8a95d7aeb9f79b7dcc54b11826798e7505857806de036576d36d99f86f6"
    },
    {
        sentence: "By the end of the day, they ____ (finish) the project.",
        answerHash: "a6b02e5c73d357e43b3aa821af780dfea465da74812c06bc279635abda0a3b26"
    },
    {
        sentence: "If he arrives early, he ____ join us for breakfast.",
        answerHash: "bc16f5825a9dafc8c245dc7cd93f4e671a9885035a73e6ef29c04f2d3863bfab"
    },
    {
        sentence: "I ____ likely be working from home tomorrow.",
        answerHash: "403e078ee9785a06b74e616440bd6b969ea9798bbc67849d229113c76f7d51be"
    },
    {
        sentence: "By next summer, she ____ (graduate) from university.",
        answerHash: "e29eae3d2db629ad4e52fdf5904a6146082492bbd0b7708e23852c849e45f8f2"
    },
    {
        sentence: "If the meeting runs late, I ____ miss my train.",
        answerHash: "bc16f5825a9dafc8c245dc7cd93f4e671a9885035a73e6ef29c04f2d3863bfab"
    },
    {
        sentence: "At this moment tomorrow, I ____ (fly) over the Atlantic.",
        answerHash: "a7a7c72d5bc6b55c7fa8dcbdef3c922645eee1b4f683bdcdd1115beea08836f4"
    },
    {
        sentence: "By next week, you ____ (receive) the package.",
        answerHash: "67832a378604175c2a5289e92c9a09b0166854bd474aa4e0313e19b7ad47dbae"
    },
    {
        sentence: "If it doesn't rain, we ____ go hiking.",
        answerHash: "bc16f5825a9dafc8c245dc7cd93f4e671a9885035a73e6ef29c04f2d3863bfab"
    },
    {
        sentence: "I ____ certainly be watching the news tonight.",
        answerHash: "403e078ee9785a06b74e616440bd6b969ea9798bbc67849d229113c76f7d51be"
    },
    {
        sentence: "By tomorrow afternoon, he ____ (finish) his report.",
        answerHash: "a6b02e5c73d357e43b3aa821af780dfea465da74812c06bc279635abda0a3b26"
    },
    {
        sentence: "If they invite me, I ____ attend the party.",
        answerHash: "bc16f5825a9dafc8c245dc7cd93f4e671a9885035a73e6ef29c04f2d3863bfab"
    },
    {
        sentence: "At 7 PM, we ____ (dine) at the new restaurant.",
        answerHash: "5402ce7b1a8cfddbd45eab71b09b6fee8da557aeffc8da5078da5c05e035bd17"
    },
    {
        sentence: "By the end of the year, she ____ (complete) her internship.",
        answerHash: "a0168243aa87ff99f4d2b45d952437579be7eeb1263e3ba3f34acc193837ef91"
    },
    {
        sentence: "If you remind me, I ____ definitely go to the meeting.",
        answerHash: "bc16f5825a9dafc8c245dc7cd93f4e671a9885035a73e6ef29c04f2d3863bfab"
    },
    {
        sentence: "I ____ likely be preparing dinner when you call.",
        answerHash: "403e078ee9785a06b74e616440bd6b969ea9798bbc67849d229113c76f7d51be"
    },
    {
        sentence: "By next Thursday, we ____ (finalize) our plans.",
        answerHash: "f151e6cb906df0801a893df09a7ef1a75c9a7583354e5a4f48c33236cafb9a75"
    },
    {
        sentence: "If the weather improves, we ____ have a picnic.",
        answerHash: "bc16f5825a9dafc8c245dc7cd93f4e671a9885035a73e6ef29c04f2d3863bfab"
    },
    {
        sentence: "At this time next month, I ____ (attend) a conference.",
        answerHash: "d9e015be5925216f3bb647e5e319c269075cad9d532f32e83135821b54141698"
    },
    {
        sentence: "By the time he gets here, we ____ (start) the presentation.",
        answerHash: "e2d6fa0c9f1d7a03a7c6debc3d283173f143cebf336ac3f9a0332e2f697b065a"
    },
    {
        sentence: "If she gets enough sleep, she ____ feel better.",
        answerHash: "bc16f5825a9dafc8c245dc7cd93f4e671a9885035a73e6ef29c04f2d3863bfab"
    },
    {
        sentence: "I ____ certainly be enjoying my holiday this weekend.",
        answerHash: "403e078ee9785a06b74e616440bd6b969ea9798bbc67849d229113c76f7d51be"
    },
    {
        sentence: "By midnight, they ____ (finish) cleaning the venue.",
        answerHash: "a6b02e5c73d357e43b3aa821af780dfea465da74812c06bc279635abda0a3b26"
    },
    {
        sentence: "If the package arrives on time, we ____ start the event.",
        answerHash: "bc16f5825a9dafc8c245dc7cd93f4e671a9885035a73e6ef29c04f2d3863bfab"
    },
    {
        sentence: "At 9 AM tomorrow, I ____ (join) the seminar.",
        answerHash: "74378136c219e219c4ceeeff461abe42eba730f24206b01d6cc56fbcfe430870"
    },
    {
        sentence: "By next evening, he ____ (complete) his training session.",
        answerHash: "a0168243aa87ff99f4d2b45d952437579be7eeb1263e3ba3f34acc193837ef91"
    },
    {
        sentence: "If it clears up, we ____ take a walk outside.",
        answerHash: "bc16f5825a9dafc8c245dc7cd93f4e671a9885035a73e6ef29c04f2d3863bfab"
    },
    {
        sentence: "I ____ likely be calling you later this evening.",
        answerHash: "403e078ee9785a06b74e616440bd6b969ea9798bbc67849d229113c76f7d51be"
    },
    {
        sentence: "By next week, she ____ (organize) her entire schedule.",
        answerHash: "3046e857a793ce755881c7339f96607c5f2a32987915c24d2318c98f88a07812"
    },
    {
        sentence: "If they finish early, we ____ go out for dinner.",
        answerHash: "bc16f5825a9dafc8c245dc7cd93f4e671a9885035a73e6ef29c04f2d3863bfab"
    },
    {
        sentence: "At 6 PM, I ____ (attend) an online meeting.",
        answerHash: "d9e015be5925216f3bb647e5e319c269075cad9d532f32e83135821b54141698"
    },
    {
        sentence: "By next morning, he ____ (recover) from the flu.",
        answerHash: "e9f9079ea58080fd2372f6aa04b8bfb78a3b1a684c8822aa1fa418b4a66bec0a"
    },
    {
        sentence: "If you help me, I ____ finish the work faster.",
        answerHash: "bc16f5825a9dafc8c245dc7cd93f4e671a9885035a73e6ef29c04f2d3863bfab"
    },
    {
        sentence: "I ____ possibly be working late tonight.",
        answerHash: "403e078ee9785a06b74e616440bd6b969ea9798bbc67849d229113c76f7d51be"
    },
    {
        sentence: "By the end of next week, we ____ (complete) the survey.",
        answerHash: "a0168243aa87ff99f4d2b45d952437579be7eeb1263e3ba3f34acc193837ef91"
    },
    {
        sentence: "If the traffic is light, we ____ reach on time.",
        answerHash: "bc16f5825a9dafc8c245dc7cd93f4e671a9885035a73e6ef29c04f2d3863bfab"
    },
    {
        sentence: "At 10 AM, she ____ (prepare) breakfast for the team.",
        answerHash: "00967fdc07f6180c048b12481227236324b14ad3a7314f6489913f1f2b125911"
    },
    {
        sentence: "By tomorrow night, they ____ (finalize) the contract.",
        answerHash: "f151e6cb906df0801a893df09a7ef1a75c9a7583354e5a4f48c33236cafb9a75"
    },
    {
        sentence: "If it doesn't snow, we ____ have the game outdoors.",
        answerHash: "bc16f5825a9dafc8c245dc7cd93f4e671a9885035a73e6ef29c04f2d3863bfab"
    },
    {
        sentence: "I ____ definitely be attending the workshop next month.",
        answerHash: "403e078ee9785a06b74e616440bd6b969ea9798bbc67849d229113c76f7d51be"
    },
    {
        sentence: "By next weekend, he ____ (review) all his notes.",
        answerHash: "fc1d69231bab70193797b893b2d3955f66fee7df25fd577c479ffefe67e39afd"
    },
    {
        sentence: "If the system updates, I ____ get a notification.",
        answerHash: "bc16f5825a9dafc8c245dc7cd93f4e671a9885035a73e6ef29c04f2d3863bfab"
    },
    {
        sentence: "At 4 PM, we ____ (discuss) the new proposal.",
        answerHash: "f8e76fd037ad8901d64a5eb691729f0823937afafb150458459d01d2c4324a20"
    },

    // Topic 5: Passive (70 questions)
    {
        sentence: "The letter ____ (deliver) this morning.",
        answerHash: "f4966a2586f33766f4e8236f3f0787e9ec2ded583e89aa030da562f3afac1d77"
    },
    {
        sentence: "The novel ____ (write) by a renowned author.",
        answerHash: "053738868a4c5e812277b7da261da7cc1a949f6903210a0bf8086ae35a113ff4"
    },
    {
        sentence: "The windows ____ (clean) every week.",
        answerHash: "756bf7041f20e782a4df0d8dc3a8ab0ff3d13b83e9f61acb9665dc12302804e0"
    },
    {
        sentence: "The cake ____ (bake) by my mother.",
        answerHash: "2377e6f51edf00bb4b4f81a3df26de7a4262b6cb72a7fc8030a21479874a2d8e"
    },
    {
        sentence: "The song ____ (compose) by a famous musician.",
        answerHash: "892f07be07262bdca3f61fb4bc942fa7a30ec88d6ccfc4a74a6cb63ee46461f5"
    },
    {
        sentence: "The report ____ (finish) by the team.",
        answerHash: "0b0e690244ba3838eb37419bbce91b4ee2d1f6f2bbeac74f7e783e9b162d4044"
    },
    {
        sentence: "The project ____ (complete) on time.",
        answerHash: "cadf87abf3e1aee38d96478559cfe3f65094d33425ceb94b5d9547b5fac76700"
    },
    {
        sentence: "The homework ____ (check) by the teacher.",
        answerHash: "524028d58c8a2a2a9ae48b9b4e19ca40d3822fddd55638e483d3877689f2a04a"
    },
    {
        sentence: "The room ____ (decorate) for the party.",
        answerHash: "15c51bfdc13571b2ab7f44eaf181d9e60d4b2afd5c59e0b4da8e5d86d2d414ce"
    },
    {
        sentence: "The decision ____ (make) after a long discussion.",
        answerHash: "1efc660c37cedd482bce619e3d01a7366f69f6e2588ef67385fbc7592d318f86"
    },
    {
        sentence: "The picture ____ (take) by a professional photographer.",
        answerHash: "f8b8e2bcf7c0bdbd7138bc246693abc912a5ed1b023b6710c5d296fc6e0e50ee"
    },
    {
        sentence: "The movie ____ (direct) by an award-winning director.",
        answerHash: "14eb9c858d1d28c20861dee7a36e4c72f824a38a086f3c3b7b714ee1fe8d1277"
    },
    {
        sentence: "The car ____ (repair) by a skilled mechanic.",
        answerHash: "49cd31ade142342babb4a35169ea8c834c31c956fb25b152aa29fb6aaf5e4006"
    },
    {
        sentence: "The story ____ (tell) by the grandfather.",
        answerHash: "ac53a1a8dbe8f6c3383a22d0ff18a485f5bfa45a856df4fe309003f39c8c434c"
    },
    {
        sentence: "The house ____ (build) in the 19th century.",
        answerHash: "2c0d867f632af136b9246620e77e6577bc5a1bf7ba5942dc2f3b56300df76bc7"
    },
    {
        sentence: "The flowers ____ (arrange) in a beautiful bouquet.",
        answerHash: "4723ddff980cf1ee8c3e05a7544e7de9e37b4e86d1fafe120988192493363558"
    },
    {
        sentence: "The package ____ (deliver) by a courier.",
        answerHash: "f4966a2586f33766f4e8236f3f0787e9ec2ded583e89aa030da562f3afac1d77"
    },
    {
        sentence: "The experiment ____ (conduct) by the scientist.",
        answerHash: "eee0625ce02a2f9ee864fb2d2125d357adea599f378adf88c3ab6edab82a661a"
    },
    {
        sentence: "The dinner ____ (prepare) for the guests.",
        answerHash: "5634ff0276eb5b1a3fe4f5994ab6ca92cc1f1830f997581053b9a24775165214"
    },
    {
        sentence: "The computer ____ (fix) by the technician.",
        answerHash: "66fa16940958da798cc5d2f218e3ed4217a364d24a0605c8ec725554e7951eab"
    },
    {
        sentence: "The bridge ____ (construct) over the river.",
        answerHash: "c24a81372d5463e0b2b9b93d5bb78eef3182d3ae1fd5a8fe9d46ecafb16ad3fb"
    },
    {
        sentence: "The lesson ____ (explain) by the tutor.",
        answerHash: "51bcfc2826db240af1e7a5e8fb1b8c333ae1150552a99e70778e106881ee07f7"
    },
    {
        sentence: "The book ____ (publish) last year.",
        answerHash: "4d88e8f330c67414bc42e487346ae44389b9baf1094c51dedb651d68805c51e0"
    },
    {
        sentence: "The homework ____ (complete) by the students.",
        answerHash: "cadf87abf3e1aee38d96478559cfe3f65094d33425ceb94b5d9547b5fac76700"
    },
    {
        sentence: "The keys ____ (lose) by someone in the office.",
        answerHash: "11f408c3309e507d2fd5c20c9019736a05c965c36b703169fffa60ecf64e2bd0"
    },
    {
        sentence: "The game ____ (win) by the underdog team.",
        answerHash: "ce7663de457f945516a03bd3d8d25baf76c9ea8c7bc39a939014b24b77676ead"
    },
    {
        sentence: "The meal ____ (serve) by the waiter.",
        answerHash: "cb109402630fecc8287827dd87ad6c2f6c843883c272b5cc1dd4a4403cc14013"
    },
    {
        sentence: "The tickets ____ (sell) out quickly.",
        answerHash: "2e8f0d1a0404864158f21a1943c514f06b4fe8e9602ebb38cf3016ce0e276b00"
    },
    {
        sentence: "The song ____ (record) in a famous studio.",
        answerHash: "1cb787dd6a56c94f62014b0b1b561d2545b4a9b4e4405449486a966c75d13221"
    },
    {
        sentence: "The bill ____ (pay) by the customer.",
        answerHash: "8e06b785ff7668f7148f71fa1f18b294aca9569b0cc95dbfd6701c339034d504"
    },
    {
        sentence: "The furniture ____ (deliver) yesterday.",
        answerHash: "f4966a2586f33766f4e8236f3f0787e9ec2ded583e89aa030da562f3afac1d77"
    },
    {
        sentence: "The invitation ____ (send) to all the guests.",
        answerHash: "572b5c30f142e6d597c08ebc8ee15ca854c43777239a904874029ab90082e6a7"
    },
    {
        sentence: "The error ____ (find) in the document.",
        answerHash: "1989aaea3fb707f98795d3db584e5002d1373dd035b774c41df60c49309b3b90"
    },
    {
        sentence: "The letter ____ (write) by his friend.",
        answerHash: "053738868a4c5e812277b7da261da7cc1a949f6903210a0bf8086ae35a113ff4"
    },
    {
        sentence: "The plan ____ (approve) by the manager.",
        answerHash: "969ae90693fc22ae75f43e6c4f65e2c2d3177f0902a2efaa85b85cf00b90f151"
    },
    {
        sentence: "The dress ____ (design) by a famous designer.",
        answerHash: "f15479e2c726a0cfbfac24ca0a52d85d39f38e24e27bf876e9f923c77740380b"
    },
    {
        sentence: "The movie ____ (watch) by millions.",
        answerHash: "65e4f0012a16fba089198b8c975040a773856bc96c7f167243e24f49c0da92a6"
    },
    {
        sentence: "The car ____ (drive) by a professional racer.",
        answerHash: "59aff0ae8afa47a14ae65a3014c26d255da47e0043a30ca065fbb875712b3704"
    },
    {
        sentence: "The food ____ (order) by the customers.",
        answerHash: "324b343eaa59e9f408db355d3c86e96b48aeb604b0443f89551138d975681616"
    },
    {
        sentence: "The package ____ (wrap) carefully.",
        answerHash: "bb91cb6014a410c1b7e395edd10c5784d144f1a91545775a5a26c42b3029892e"
    },
    {
        sentence: "The decision ____ (announce) in the meeting.",
        answerHash: "aac84b9314d482cd04512b1144b5962ae8fe40eb22a517e86c9997a1e8e59fba"
    },
    {
        sentence: "The room ____ (clean) by the housekeeping staff.",
        answerHash: "fc5b3193e9977370630c2de42fe5811fa0ed1598caa405d5f965256c7d4b3ae5"
    },
    {
        sentence: "The assignment ____ (submit) on time.",
        answerHash: "d05ffbbb70d1e20560a2a0ee057a79bf52d38982a2bfcc988d4fc2ccdced98e3"
    },
    {
        sentence: "The article ____ (publish) in the magazine.",
        answerHash: "4d88e8f330c67414bc42e487346ae44389b9baf1094c51dedb651d68805c51e0"
    },
    {
        sentence: "The prize ____ (award) to the winner.",
        answerHash: "94993fadd12e0567b5f667368638cbc24ab108075d18c9aefe9399406f2b1240"
    },
    {
        sentence: "The message ____ (send) via email.",
        answerHash: "572b5c30f142e6d597c08ebc8ee15ca854c43777239a904874029ab90082e6a7"
    },
    {
        sentence: "The performance ____ (applaud) by the audience.",
        answerHash: "1304b87d0d2cc61fbc9e48c8af198f343a9a56b77500ca6ed73d419c693d2028"
    },
    {
        sentence: "The artwork ____ (exhibit) in the gallery.",
        answerHash: "2017b697e1075e8e04a4a9b2a298e23e7972e1f63492afb23a51c9812fec9814"
    },
    {
        sentence: "The laws ____ (enforce) by the government.",
        answerHash: "4b18432157b738f181fa2bfc374640186eac13c4f9c6f89c504b478a418d2cf8"
    },
    {
        sentence: "The instructions ____ (follow) by the students.",
        answerHash: "17afed0eed1d92709ea76e66fc9a4055d8b68e9c6277019a156778c6117017b5"
    },
    {
        sentence: "The vehicle ____ (inspect) before the journey.",
        answerHash: "fb880e783036332b836e3b8f0eb3a2435329657db4106560f0cb6de231778ca7"
    },
    {
        sentence: "The lesson ____ (record) for later viewing.",
        answerHash: "1cb787dd6a56c94f62014b0b1b561d2545b4a9b4e4405449486a966c75d13221"
    },
    {
        sentence: "The book ____ (translate) into several languages.",
        answerHash: "561eec888458e046a8ddac094437992ce4c5c4d90971ea595cf1fd99a8ce3ac6"
    },
    {
        sentence: "The package ____ (deliver) by express service.",
        answerHash: "f4966a2586f33766f4e8236f3f0787e9ec2ded583e89aa030da562f3afac1d77"
    },
    {
        sentence: "The order ____ (confirm) by the supplier.",
        answerHash: "42fa2fe5e709666243a8283312eda392c53b8efe1aafddf75cc5f3bd60bde108"
    },
    {
        sentence: "The speech ____ (prepare) by the politician.",
        answerHash: "5634ff0276eb5b1a3fe4f5994ab6ca92cc1f1830f997581053b9a24775165214"
    },
    {
        sentence: "The garden ____ (water) by the gardener.",
        answerHash: "d8964c1ca5568424447fe868c4f79c7368dedb02e811aa8d05ce05bb5503e453"
    },
    {
        sentence: "The performance ____ (perform) on stage.",
        answerHash: "69f8a7de96fe169e3ecafd66259360a6df1817bea6434620bdb5efed834a1dd0"
    },
    {
        sentence: "The ticket ____ (book) by the traveler.",
        answerHash: "19ba860385da84ff1ab3711632a141408de8e1346e6c470a0b8ba4aa62a1a0c2"
    },
    {
        sentence: "The meeting ____ (schedule) for tomorrow.",
        answerHash: "c48bdea7d72e8b8706a8c8a840de3efab161b9d6d987db4aeb40f8a52cafa773"
    },
    {
        sentence: "The equipment ____ (deliver) to the site.",
        answerHash: "f4966a2586f33766f4e8236f3f0787e9ec2ded583e89aa030da562f3afac1d77"
    },
    {
        sentence: "The course ____ (offer) at the university.",
        answerHash: "4166ebca70cf5e206ca119df8e9fdb5cdc44afd00856a2d3ca9f5263a4e9c8c0"
    },
    {
        sentence: "The event ____ (organize) by the committee.",
        answerHash: "17a95bb20697127f1cbe9a4d7c060ecb7f387af4ded730ea3272ac2662eae99a"
    },
    {
        sentence: "The interview ____ (conduct) by the reporter.",
        answerHash: "eee0625ce02a2f9ee864fb2d2125d357adea599f378adf88c3ab6edab82a661a"
    },
    {
        sentence: "The essay ____ (evaluate) by the examiner.",
        answerHash: "798d4c4ef364a5fd5e82998e6cb50e87f6c95a1f0be73fbf81d6a197fe0d42cb"
    },
    {
        sentence: "The system ____ (upgrade) by the IT department.",
        answerHash: "39885adb14c7a1b83e876e6246cdb56796833bb83d19d1ca7f56c34a24dd65e8"
    },
    {
        sentence: "The meeting ____ (hold) in the conference room.",
        answerHash: "b05e09381d173eb8a8358259e97e8b756774720fe343d6b3a8cf701d7e61bbe2"
    },
    {
        sentence: "The product ____ (manufacture) in Germany.",
        answerHash: "994770a7806529b0849021eff595a5be76b72db28c7fbf58cba5fb209090d5f4"
    },
    {
        sentence: "The letter ____ (deliver) to the wrong address.",
        answerHash: "f4966a2586f33766f4e8236f3f0787e9ec2ded583e89aa030da562f3afac1d77"
    },
    {
        sentence: "The accident ____ (report) by a witness.",
        answerHash: "75bb073e6c845ed6eb0c6eef8f9a08d2e23389f7c5fb7e5c0ee2f28b4e1de0a2"
    },

    // Topic 6: Passive: advanced structures – Articles and quantifiers (20 questions)
    {
        sentence: "All the cookies ____ (eat) by the kids.",
        answerHash: "4c1cd239ab47e00f655df03be6e5d8c0d2d88f7f5313836ccee62901f46915e7"
    },
    {
        sentence: "Some of the apples ____ (pick) by the farmer.",
        answerHash: "8dbfb4c354c3432b98b1bcb89a3778ecc89ed36adb3790434288e706d5f01fd8"
    },
    {
        sentence: "Every slice of bread ____ (use) for sandwiches.",
        answerHash: "ddcd2a27037b6b979a27665023366b4b61929c233737f0ec9bbeb8371050254f"
    },
    {
        sentence: "Much of the work ____ (finish) by the team.",
        answerHash: "0b0e690244ba3838eb37419bbce91b4ee2d1f6f2bbeac74f7e783e9b162d4044"
    },
    {
        sentence: "Many of the proposals ____ (reject) by the committee.",
        answerHash: "f4a7f2637d6663a2fb6ae415c9d3e74a244c288b4e9156a2a4efe563400a8004"
    },
    {
        sentence: "A few of the letters ____ (open) by the receptionist.",
        answerHash: "8d8940a2f202d570acc1ad7c3941c08f7fbca870240da316cbb73511daa05e92"
    },
    {
        sentence: "Most of the furniture ____ (move) to the new office.",
        answerHash: "7dbf033fcd5c2af1fa3ab24ff871bc73e599855e15388a0489aae64d6803f868"
    },
    {
        sentence: "Several of the documents ____ (sign) by the manager.",
        answerHash: "c08a1462b0a2dc9a8687b14333138a287faef4d75ac0942c2b0163da8074c209"
    },
    {
        sentence: "Little of the evidence ____ (find) at the scene.",
        answerHash: "1989aaea3fb707f98795d3db584e5002d1373dd035b774c41df60c49309b3b90"
    },
    {
        sentence: "All the resources ____ (allocate) for the project.",
        answerHash: "77e43bbd53d0dda92e4e57813bdabe723bdb3fa92f3d060b2959150808cec684"
    },
    {
        sentence: "Any amount of information ____ (verify) by the expert.",
        answerHash: "5bac1a1efb1d52337385552960f471bb827d096f509f8ea7a5fd9c94eaa71ee8"
    },
    {
        sentence: "A great deal of the fabric ____ (use) in the costume.",
        answerHash: "ddcd2a27037b6b979a27665023366b4b61929c233737f0ec9bbeb8371050254f"
    },
    {
        sentence: "Few of the suggestions ____ (consider) by the board.",
        answerHash: "31ac66c735b2e4aa2d84008a30e48f140c3e7886814d39b4840f8b9050fd8589"
    },
    {
        sentence: "Each of the awards ____ (present) at the ceremony.",
        answerHash: "3338fd26fd7fa8354c255da4734ac1351c9bd6453f50b6b3c3806c626cf92f08"
    },
    {
        sentence: "Both of the proposals ____ (approve) by the director.",
        answerHash: "012fc256c47dc8f490bc0bef1dc37c7d09d47aeeba7a8bf952514ec645a77f92"
    },
    {
        sentence: "Half of the cake ____ (share) among the guests.",
        answerHash: "6df55b35f3757d1fab72a7c1e5b9f5d89d07d1260083512d7e76a13e0f9aa82a"
    },
    {
        sentence: "None of the questions ____ (answer) correctly.",
        answerHash: "dfe8c8808844ac0f3f46833ec6ddebe280789067b5aca7b15f752f0efc9097a1"
    },
    {
        sentence: "The majority of the seats ____ (reserve) for VIPs.",
        answerHash: "f4b5e8e2dc9b2c258e43b92c84eb73d53ef5386e065be454590ae0c7bf06b437"
    },
    {
        sentence: "A number of the items ____ (display) in the museum.",
        answerHash: "88314246948c6925bde8692e472f91dcf33de2a58f181d510e03619977e6c77f"
    },
    {
        sentence: "Several of the new policies ____ (implement) last month.",
        answerHash: "109650356e06d2584ca0e76f5508f76bfb9d48913ef1d33b6bb11658d66171a4"
    },

    // Topic 7: Reported speech – Reporting verbs (60 questions)
    {
        sentence: "He said, 'I am tired,' becomes: He said that he ____ tired.",
        answerHash: "b63b99f6383ba713b57ddfc77737c5f71639fa6f4663efe60a66a8c6d114b545"
    },
    {
        sentence: "She said, 'I will come tomorrow,' becomes: She said that she ____ come the next day.",
        answerHash: "c6323a2117013ed6844d6411a3d0fb37e8ed54eda75bb3833959b02fd71514e0"
    },
    {
        sentence: "They said, 'We have finished the work,' becomes: They said that they ____ finished the work.",
        answerHash: "e02a753f0c060173d1facd7b169863a1731999af98724501375f53171cb8e4a4"
    },
    {
        sentence: "John said, 'I can swim,' becomes: John said that he ____ swim.",
        answerHash: "0e031e954a432055ace97e08d1a097013f562c021a1c3aa3ab4948dd56793b86"
    },
    {
        sentence: "She said, 'I must go now,' becomes: She said that she ____ go then.",
        answerHash: "ff162a320996c5361c956e002e2b4491924796803410fa9052e0e872c81135a5"
    },
    {
        sentence: "He said, 'I saw the movie,' becomes: He said that he ____ seen the movie.",
        answerHash: "e02a753f0c060173d1facd7b169863a1731999af98724501375f53171cb8e4a4"
    },
    {
        sentence: "She said, 'I am leaving,' becomes: She said that she ____ leaving.",
        answerHash: "b63b99f6383ba713b57ddfc77737c5f71639fa6f4663efe60a66a8c6d114b545"
    },
    {
        sentence: "They said, 'We will help you,' becomes: They said that they ____ help you.",
        answerHash: "c6323a2117013ed6844d6411a3d0fb37e8ed54eda75bb3833959b02fd71514e0"
    },
    {
        sentence: "He said, 'I do not know,' becomes: He said that he ____ know.",
        answerHash: "4c62feef7d0f94ca27e86c3cb37dce7be226d0454a766c7103de832438bdc0eb"
    },
    {
        sentence: "She said, 'I have a car,' becomes: She said that she ____ a car.",
        answerHash: "e02a753f0c060173d1facd7b169863a1731999af98724501375f53171cb8e4a4"
    },
    {
        sentence: "He said, 'I must finish this,' becomes: He said that he ____ finish that.",
        answerHash: "ff162a320996c5361c956e002e2b4491924796803410fa9052e0e872c81135a5"
    },
    {
        sentence: "They said, 'We are ready,' becomes: They said that they ____ ready.",
        answerHash: "910adfb424646393d81506a4b18638c5ceafff0bb32994c97d916b600d04ecb5"
    },
    {
        sentence: "John said, 'I will call you,' becomes: John said that he ____ call you.",
        answerHash: "c6323a2117013ed6844d6411a3d0fb37e8ed54eda75bb3833959b02fd71514e0"
    },
    {
        sentence: "She said, 'I can solve this problem,' becomes: She said that she ____ solve that problem.",
        answerHash: "0e031e954a432055ace97e08d1a097013f562c021a1c3aa3ab4948dd56793b86"
    },
    {
        sentence: "He said, 'I have seen her,' becomes: He said that he ____ seen her.",
        answerHash: "e02a753f0c060173d1facd7b169863a1731999af98724501375f53171cb8e4a4"
    },
    {
        sentence: "They said, 'We are going now,' becomes: They said that they ____ going then.",
        answerHash: "910adfb424646393d81506a4b18638c5ceafff0bb32994c97d916b600d04ecb5"
    },
    {
        sentence: "She said, 'I feel sick,' becomes: She said that she ____ sick.",
        answerHash: "05970e30555fc7bf6388d907406715bacc1f042b180da0b450c404a651c07d4c"
    },
    {
        sentence: "He said, 'I must leave early,' becomes: He said that he ____ leave early.",
        answerHash: "ff162a320996c5361c956e002e2b4491924796803410fa9052e0e872c81135a5"
    },
    {
        sentence: "They said, 'We have been waiting,' becomes: They said that they ____ been waiting.",
        answerHash: "15de04d4874f265135d364d7f0c35e0faef49fcdba416baa0fe35f42f1013aaa"
    },
    {
        sentence: "John said, 'I know the answer,' becomes: John said that he ____ the answer.",
        answerHash: "6262041f6f18a00528e56175d59434c898424b390f3478646da6f608843135d6"
    },
    {
        sentence: "She said, 'I will meet you there,' becomes: She said that she ____ meet me there.",
        answerHash: "c6323a2117013ed6844d6411a3d0fb37e8ed54eda75bb3833959b02fd71514e0"
    },
    {
        sentence: "He said, 'I might join the party,' becomes: He said that he ____ join the party.",
        answerHash: "f23be8eed45492f4b5315117a6ed033788fa26715014cd26c4a059c02ea16cad"
    },
    {
        sentence: "They said, 'We are leaving now,' becomes: They said that they ____ leaving then.",
        answerHash: "910adfb424646393d81506a4b18638c5ceafff0bb32994c97d916b600d04ecb5"
    },
    {
        sentence: "She said, 'I do not like it,' becomes: She said that she ____ like it.",
        answerHash: "4c62feef7d0f94ca27e86c3cb37dce7be226d0454a766c7103de832438bdc0eb"
    },
    {
        sentence: "He said, 'I can help you,' becomes: He said that he ____ help me.",
        answerHash: "0e031e954a432055ace97e08d1a097013f562c021a1c3aa3ab4948dd56793b86"
    },
    {
        sentence: "John said, 'I am working now,' becomes: John said that he ____ working then.",
        answerHash: "b63b99f6383ba713b57ddfc77737c5f71639fa6f4663efe60a66a8c6d114b545"
    },
    {
        sentence: "She said, 'I must study more,' becomes: She said that she ____ study more.",
        answerHash: "ff162a320996c5361c956e002e2b4491924796803410fa9052e0e872c81135a5"
    },
    {
        sentence: "They said, 'We have finished dinner,' becomes: They said that they ____ finished dinner.",
        answerHash: "e02a753f0c060173d1facd7b169863a1731999af98724501375f53171cb8e4a4"
    },
    {
        sentence: "He said, 'I will try again,' becomes: He said that he ____ try again.",
        answerHash: "c6323a2117013ed6844d6411a3d0fb37e8ed54eda75bb3833959b02fd71514e0"
    },
    {
        sentence: "She said, 'I may visit later,' becomes: She said that she ____ visit later.",
        answerHash: "f23be8eed45492f4b5315117a6ed033788fa26715014cd26c4a059c02ea16cad"
    },
    {
        sentence: "They said, 'We are ready to go,' becomes: They said that they ____ ready to go.",
        answerHash: "910adfb424646393d81506a4b18638c5ceafff0bb32994c97d916b600d04ecb5"
    },
    {
        sentence: "John said, 'I understand now,' becomes: John said that he ____ understand then.",
        answerHash: "53501f58f1926163efc53f16b4bfd829bc7662de7454f97568b22e294298ea8f"
    },
    {
        sentence: "She said, 'I have lost my keys,' becomes: She said that she ____ lost her keys.",
        answerHash: "e02a753f0c060173d1facd7b169863a1731999af98724501375f53171cb8e4a4"
    },
    {
        sentence: "He said, 'I am not hungry,' becomes: He said that he ____ not hungry.",
        answerHash: "b63b99f6383ba713b57ddfc77737c5f71639fa6f4663efe60a66a8c6d114b545"
    },
    {
        sentence: "They said, 'We will see you soon,' becomes: They said that they ____ see me soon.",
        answerHash: "c6323a2117013ed6844d6411a3d0fb37e8ed54eda75bb3833959b02fd71514e0"
    },
    {
        sentence: "John said, 'I could help earlier,' becomes: John said that he ____ help earlier.",
        answerHash: "0e031e954a432055ace97e08d1a097013f562c021a1c3aa3ab4948dd56793b86"
    },
    {
        sentence: "She said, 'I feel better now,' becomes: She said that she ____ better then.",
        answerHash: "05970e30555fc7bf6388d907406715bacc1f042b180da0b450c404a651c07d4c"
    },
    {
        sentence: "He said, 'I must apologize,' becomes: He said that he ____ apologize.",
        answerHash: "ff162a320996c5361c956e002e2b4491924796803410fa9052e0e872c81135a5"
    },
    {
        sentence: "They said, 'We have been waiting for hours,' becomes: They said that they ____ been waiting for hours.",
        answerHash: "15de04d4874f265135d364d7f0c35e0faef49fcdba416baa0fe35f42f1013aaa"
    },
    {
        sentence: "John said, 'I know you are busy,' becomes: John said that he ____ I was busy.",
        answerHash: "6262041f6f18a00528e56175d59434c898424b390f3478646da6f608843135d6"
    },
    {
        sentence: "She said, 'I will not forget,' becomes: She said that she ____ not forget.",
        answerHash: "c6323a2117013ed6844d6411a3d0fb37e8ed54eda75bb3833959b02fd71514e0"
    },
    {
        sentence: "He said, 'I have finished my work,' becomes: He said that he ____ finished his work.",
        answerHash: "e02a753f0c060173d1facd7b169863a1731999af98724501375f53171cb8e4a4"
    },
    {
        sentence: "They said, 'We can manage on our own,' becomes: They said that they ____ manage on their own.",
        answerHash: "0e031e954a432055ace97e08d1a097013f562c021a1c3aa3ab4948dd56793b86"
    },
    {
        sentence: "John said, 'I am excited about the trip,' becomes: John said that he ____ excited about the trip.",
        answerHash: "b63b99f6383ba713b57ddfc77737c5f71639fa6f4663efe60a66a8c6d114b545"
    },
    {
        sentence: "She said, 'I must leave immediately,' becomes: She said that she ____ leave immediately.",
        answerHash: "ff162a320996c5361c956e002e2b4491924796803410fa9052e0e872c81135a5"
    },
    {
        sentence: "He said, 'I might come later,' becomes: He said that he ____ come later.",
        answerHash: "f23be8eed45492f4b5315117a6ed033788fa26715014cd26c4a059c02ea16cad"
    },
    {
        sentence: "They said, 'We are enjoying the party,' becomes: They said that they ____ enjoying the party.",
        answerHash: "910adfb424646393d81506a4b18638c5ceafff0bb32994c97d916b600d04ecb5"
    },
    {
        sentence: "John said, 'I see the problem,' becomes: John said that he ____ the problem.",
        answerHash: "dfc1a1888f01d9476764b3d0e9efc89a46ac3a769c13d0ef27dd38c0b63c5de1"
    },
    {
        sentence: "She said, 'I will try my best,' becomes: She said that she ____ try her best.",
        answerHash: "c6323a2117013ed6844d6411a3d0fb37e8ed54eda75bb3833959b02fd71514e0"
    },
    {
        sentence: "He said, 'I feel tired,' becomes: He said that he ____ tired.",
        answerHash: "05970e30555fc7bf6388d907406715bacc1f042b180da0b450c404a651c07d4c"
    },
    {
        sentence: "They said, 'We have been informed,' becomes: They said that they ____ been informed.",
        answerHash: "15de04d4874f265135d364d7f0c35e0faef49fcdba416baa0fe35f42f1013aaa"
    },
    {
        sentence: "John said, 'I want to leave,' becomes: John said that he ____ to leave.",
        answerHash: "ca9066873bf335f3c1d9f0f6986266ee50689a816763851d82791d3dbc31cbf5"
    },
    {
        sentence: "She said, 'I can manage it,' becomes: She said that she ____ manage it.",
        answerHash: "0e031e954a432055ace97e08d1a097013f562c021a1c3aa3ab4948dd56793b86"
    },
    {
        sentence: "He said, 'I must call her,' becomes: He said that he ____ call her.",
        answerHash: "ff162a320996c5361c956e002e2b4491924796803410fa9052e0e872c81135a5"
    },
    {
        sentence: "They said, 'We are planning a surprise,' becomes: They said that they ____ planning a surprise.",
        answerHash: "910adfb424646393d81506a4b18638c5ceafff0bb32994c97d916b600d04ecb5"
    },
    {
        sentence: "John said, 'I will join you soon,' becomes: John said that he ____ join me soon.",
        answerHash: "c6323a2117013ed6844d6411a3d0fb37e8ed54eda75bb3833959b02fd71514e0"
    },
    {
        sentence: "She said, 'I have already seen it,' becomes: She said that she ____ already seen it.",
        answerHash: "e02a753f0c060173d1facd7b169863a1731999af98724501375f53171cb8e4a4"
    },
    {
        sentence: "He said, 'I might be late,' becomes: He said that he ____ be late.",
        answerHash: "f23be8eed45492f4b5315117a6ed033788fa26715014cd26c4a059c02ea16cad"
    },
    {
        sentence: "They said, 'We are not ready,' becomes: They said that they ____ not ready.",
        answerHash: "910adfb424646393d81506a4b18638c5ceafff0bb32994c97d916b600d04ecb5"
    },
    {
        sentence: "John said, 'I understand the rules,' becomes: John said that he ____ the rules.",
        answerHash: "53501f58f1926163efc53f16b4bfd829bc7662de7454f97568b22e294298ea8f"
    },

    // Topic 8: Talking about ability – Relative clauses (20 questions)
    {
        sentence: "The student ____ solved the problem is my friend.",
        answerHash: "6ed0337140bd32b4adc5000f76333bd8ca6b2b2c9e0bc354335cf341456290e8"
    },
    {
        sentence: "She is the artist ____ painting is famous worldwide.",
        answerHash: "55efa0938f9f52fb6de33f27375ee1916aa9c5d27367eac89ea1207026bb16f8"
    },
    {
        sentence: "The teacher ____ explains the lesson clearly is appreciated by all.",
        answerHash: "6ed0337140bd32b4adc5000f76333bd8ca6b2b2c9e0bc354335cf341456290e8"
    },
    {
        sentence: "The person ____ can speak five languages impressed everyone.",
        answerHash: "6ed0337140bd32b4adc5000f76333bd8ca6b2b2c9e0bc354335cf341456290e8"
    },
    {
        sentence: "The book ____ you lent me was fascinating.",
        answerHash: "8e7fc0236af43df9340685fc16f1efe36543cc1707051220a103ad99cf69a2df"
    },
    {
        sentence: "He is the athlete ____ performance won many awards.",
        answerHash: "55efa0938f9f52fb6de33f27375ee1916aa9c5d27367eac89ea1207026bb16f8"
    },
    {
        sentence: "The girl ____ won the competition is very talented.",
        answerHash: "6ed0337140bd32b4adc5000f76333bd8ca6b2b2c9e0bc354335cf341456290e8"
    },
    {
        sentence: "The musician ____ plays the piano is renowned.",
        answerHash: "6ed0337140bd32b4adc5000f76333bd8ca6b2b2c9e0bc354335cf341456290e8"
    },
    {
        sentence: "This is the car ____ cost was very affordable.",
        answerHash: "55efa0938f9f52fb6de33f27375ee1916aa9c5d27367eac89ea1207026bb16f8"
    },
    {
        sentence: "The writer ____ wrote this novel is famous.",
        answerHash: "6ed0337140bd32b4adc5000f76333bd8ca6b2b2c9e0bc354335cf341456290e8"
    },
    {
        sentence: "The student ____ answer was correct received a prize.",
        answerHash: "55efa0938f9f52fb6de33f27375ee1916aa9c5d27367eac89ea1207026bb16f8"
    },
    {
        sentence: "She is the one ____ ability to inspire others is remarkable.",
        answerHash: "55efa0938f9f52fb6de33f27375ee1916aa9c5d27367eac89ea1207026bb16f8"
    },
    {
        sentence: "The man ____ you met yesterday is my uncle.",
        answerHash: "6ed0337140bd32b4adc5000f76333bd8ca6b2b2c9e0bc354335cf341456290e8"
    },
    {
        sentence: "The dancer ____ performance amazed the audience is celebrated.",
        answerHash: "55efa0938f9f52fb6de33f27375ee1916aa9c5d27367eac89ea1207026bb16f8"
    },
    {
        sentence: "I saw a painter ____ art can move people.",
        answerHash: "55efa0938f9f52fb6de33f27375ee1916aa9c5d27367eac89ea1207026bb16f8"
    },
    {
        sentence: "The teacher ____ taught us grammar is retired.",
        answerHash: "6ed0337140bd32b4adc5000f76333bd8ca6b2b2c9e0bc354335cf341456290e8"
    },
    {
        sentence: "The singer ____ voice is exceptional performed at the concert.",
        answerHash: "55efa0938f9f52fb6de33f27375ee1916aa9c5d27367eac89ea1207026bb16f8"
    },
    {
        sentence: "The engineer ____ designed the bridge is very skilled.",
        answerHash: "6ed0337140bd32b4adc5000f76333bd8ca6b2b2c9e0bc354335cf341456290e8"
    },
    {
        sentence: "She is the one ____ ideas always impress the team.",
        answerHash: "55efa0938f9f52fb6de33f27375ee1916aa9c5d27367eac89ea1207026bb16f8"
    },
    {
        sentence: "The actor ____ starred in that film is famous worldwide.",
        answerHash: "6ed0337140bd32b4adc5000f76333bd8ca6b2b2c9e0bc354335cf341456290e8"
    },

    // Topic 9: Criticising past actions – Mixed conditions (20 questions)
    {
        sentence: "If you ____ (listen) to my advice, you would not have made that mistake.",
        answerHash: "883ce7b9b1f2a37f3b2c9eb50675cb784ab33ed0c2a7caa972efdf5603da8c21"
    },
    {
        sentence: "If he ____ (work) harder, he could have succeeded.",
        answerHash: "a70bb0f759fc8e56694ed1ba0a5820ac64552d710de38b051b63f0c572df709c"
    },
    {
        sentence: "If they ____ (prepare) better, the event would have been perfect.",
        answerHash: "4c0220d5c3733ebc91fd14ac1b4784e3e0a1d334ab7675bc6e11246eab28ae71"
    },
    {
        sentence: "If I ____ (know) the truth, I would not have agreed.",
        answerHash: "45c24ddad27171ebb8ece7565c609fdbeb36b2168cb3b08265d95bd48bcac6e6"
    },
    {
        sentence: "If she ____ (arrive) earlier, we wouldn't have missed the start.",
        answerHash: "e97781f899628de6e1bd28b2d99fdc225f4bc136a35d9560b0335a850f32ce3f"
    },
    {
        sentence: "If you ____ (follow) the instructions, the task would have been easier.",
        answerHash: "fdf24dc6756b3528f36f3a767f907e4e74d37e0a31e5470645384c9d1cdfb206"
    },
    {
        sentence: "If he ____ (study) more, he might have passed the exam.",
        answerHash: "dc0e2dd9ff08a50e042206a2cfbd93f0a9c3dd01ca405c77b9362ce705b508d6"
    },
    {
        sentence: "If they ____ (plan) properly, the trip would have gone smoothly.",
        answerHash: "7976514e0615abd03ecfc389289d645048e13a360410a9c0370a442c344ffa87"
    },
    {
        sentence: "If I ____ (see) the sign, I would have taken a different route.",
        answerHash: "f50e4212836a036850c177f7a14b63d55b7b76019446ebfad29e841d3bf6cb17"
    },
    {
        sentence: "If you ____ (finish) your work, you could have left earlier.",
        answerHash: "733ea9caeaf050befda0a3c3f09e5878a67db8d02fcfda2637f389e3f6ca21b9"
    },
    {
        sentence: "If she ____ (speak) up, the problem might have been solved.",
        answerHash: "923766ea046fd30c4f4162e093fab121a8d1ca4798c2cc000813c56a951900e6"
    },
    {
        sentence: "If they ____ (arrive) on time, the meeting wouldn't have been delayed.",
        answerHash: "e97781f899628de6e1bd28b2d99fdc225f4bc136a35d9560b0335a850f32ce3f"
    },
    {
        sentence: "If he ____ (listen) carefully, he would have understood the lesson.",
        answerHash: "883ce7b9b1f2a37f3b2c9eb50675cb784ab33ed0c2a7caa972efdf5603da8c21"
    },
    {
        sentence: "If I ____ (realize) the error, I wouldn't have made the decision.",
        answerHash: "765626706eba510370f7a6e241feaa4024d2ecee6aa251218ca399108f1a7d47"
    },
    {
        sentence: "If you ____ (choose) differently, the outcome might have changed.",
        answerHash: "94667b99b26ad79f0a63c71bffc57a5828691da4912992d691aa612277373082"
    },
    {
        sentence: "If she ____ (take) the opportunity, she could have succeeded.",
        answerHash: "cf520f6b8738eb36455a875bda49155cc2b8eeccabe88d03f423bdf8238c273a"
    },
    {
        sentence: "If they ____ (follow) the plan, nothing would have gone wrong.",
        answerHash: "fdf24dc6756b3528f36f3a767f907e4e74d37e0a31e5470645384c9d1cdfb206"
    },
    {
        sentence: "If he ____ (act) sooner, the accident might have been prevented.",
        answerHash: "2a5773e0bdc2a870da3a6e0a6346f00e421b6d7b5fab7543b1fe4501a7dc0d34"
    },
    {
        sentence: "If I ____ (be) there, I would have helped.",
        answerHash: "15de04d4874f265135d364d7f0c35e0faef49fcdba416baa0fe35f42f1013aaa"
    },
    {
        sentence: "If you ____ (consider) the risks, you might have avoided the mistake.",
        answerHash: "d68eac8e0d735b01acc751473214ba21128ad8648c075e52c8679af962d7f8bd"
    },

    // Topic 10: Emphasis – Unreal past and had better (20 questions)
    {
        sentence: "You ____ leave early if you want to catch the train.",
        answerHash: "d957eb3c4d23bf80b76db6b46716db06eb5f856b4b771e2e027737eee8b40591"
    },
    {
        sentence: "I wish I ____ (know) about the party earlier.",
        answerHash: "45c24ddad27171ebb8ece7565c609fdbeb36b2168cb3b08265d95bd48bcac6e6"
    },
    {
        sentence: "If only he ____ (listen) to advice, he wouldn't be in trouble.",
        answerHash: "883ce7b9b1f2a37f3b2c9eb50675cb784ab33ed0c2a7caa972efdf5603da8c21"
    },
    {
        sentence: "She wishes she ____ (attend) the concert last night.",
        answerHash: "7030838f0b32fd652a595d36c7d5d83b2ed882c806ac9825b5c74936e4698c1d"
    },
    {
        sentence: "You ____ apologize for your mistake.",
        answerHash: "d957eb3c4d23bf80b76db6b46716db06eb5f856b4b771e2e027737eee8b40591"
    },
    {
        sentence: "I wish they ____ (decide) differently.",
        answerHash: "db15de5335347b2942921cdef24535cdc950a9c20a183d70da7dfc063aaf4321"
    },
    {
        sentence: "If only I ____ (study) harder, I could have passed.",
        answerHash: "dc0e2dd9ff08a50e042206a2cfbd93f0a9c3dd01ca405c77b9362ce705b508d6"
    },
    {
        sentence: "He ____ not ignore the warning signs.",
        answerHash: "d957eb3c4d23bf80b76db6b46716db06eb5f856b4b771e2e027737eee8b40591"
    },
    {
        sentence: "She wishes she ____ (take) that job offer.",
        answerHash: "cf520f6b8738eb36455a875bda49155cc2b8eeccabe88d03f423bdf8238c273a"
    },
    {
        sentence: "You ____ finish your homework before playing games.",
        answerHash: "d957eb3c4d23bf80b76db6b46716db06eb5f856b4b771e2e027737eee8b40591"
    },
    {
        sentence: "I wish he ____ (speak) up during the meeting.",
        answerHash: "923766ea046fd30c4f4162e093fab121a8d1ca4798c2cc000813c56a951900e6"
    },
    {
        sentence: "If only we ____ (prepare) better, the result might be different.",
        answerHash: "4c0220d5c3733ebc91fd14ac1b4784e3e0a1d334ab7675bc6e11246eab28ae71"
    },
    {
        sentence: "You ____ be more careful next time.",
        answerHash: "d957eb3c4d23bf80b76db6b46716db06eb5f856b4b771e2e027737eee8b40591"
    },
    {
        sentence: "I wish I ____ (choose) a different path.",
        answerHash: "94667b99b26ad79f0a63c71bffc57a5828691da4912992d691aa612277373082"
    },
    {
        sentence: "If only he ____ (act) sooner, the damage would be less.",
        answerHash: "2a5773e0bdc2a870da3a6e0a6346f00e421b6d7b5fab7543b1fe4501a7dc0d34"
    },
    {
        sentence: "You ____ consult a doctor immediately.",
        answerHash: "d957eb3c4d23bf80b76db6b46716db06eb5f856b4b771e2e027737eee8b40591"
    },
    {
        sentence: "She wishes she ____ (know) the consequences.",
        answerHash: "45c24ddad27171ebb8ece7565c609fdbeb36b2168cb3b08265d95bd48bcac6e6"
    },
    {
        sentence: "I wish they ____ (try) harder on the project.",
        answerHash: "82725567603f0190ebd8a422fae4a43b02cba9fb2f247d5cfff1a4c78eef27c3"
    },
    {
        sentence: "If only I ____ (realize) the importance, I would have acted differently.",
        answerHash: "765626706eba510370f7a6e241feaa4024d2ecee6aa251218ca399108f1a7d47"
    },
    {
        sentence: "You ____ not take this warning lightly.",
        answerHash: "d957eb3c4d23bf80b76db6b46716db06eb5f856b4b771e2e027737eee8b40591"
    },

    // Topic 11: Count and noncount nouns and articles (20 questions)
    {
        sentence: "There is ____ milk in the fridge.",
        answerHash: "a6b46dd0d1ae5e86cbc8f37e75ceeb6760230c1ca4ffbcb0c97b96dd7d9c464b"
    },
    {
        sentence: "I have ____ books on my shelf.",
        answerHash: "2740e59ffb8c5eff0e0f8f3f4f5e6522fda77d9882c878346a751b9b60129cfd"
    },
    {
        sentence: "She bought ____ apples at the market.",
        answerHash: "1137b15c7797aa84ec24e8dca5cb966dd016624374a09cb2ecaa9ac3229f5ccc"
    },
    {
        sentence: "He has ____ information about the event.",
        answerHash: "180ca01b95f0dfdd36fbb600e51cf6e46c8ef468de56b017847886fefaf7b6f9"
    },
    {
        sentence: "There are ____ chairs in the room.",
        answerHash: "90290ad775ac38d997b706c160bd99abcb9ceb1c88b32246ee16d7be2cb62812"
    },
    {
        sentence: "We need ____ water for the experiment.",
        answerHash: "a6b46dd0d1ae5e86cbc8f37e75ceeb6760230c1ca4ffbcb0c97b96dd7d9c464b"
    },
    {
        sentence: "I found ____ interesting articles in the newspaper.",
        answerHash: "90290ad775ac38d997b706c160bd99abcb9ceb1c88b32246ee16d7be2cb62812"
    },
    {
        sentence: "There isn't ____ sugar left in the jar.",
        answerHash: "543b1c4bd4f6b184ca2aef09ca8e5aeadb04907efa0ac7b81b00f8b9ea8133cd"
    },
    {
        sentence: "They own ____ houses in the neighborhood.",
        answerHash: "2740e59ffb8c5eff0e0f8f3f4f5e6522fda77d9882c878346a751b9b60129cfd"
    },
    {
        sentence: "He has ____ advice to offer.",
        answerHash: "9abe0fce365bc56adace082402a9ccdfe0cf43155d382b64aa79e271b385cd0a"
    },
    {
        sentence: "I read ____ news this morning.",
        answerHash: "a6b46dd0d1ae5e86cbc8f37e75ceeb6760230c1ca4ffbcb0c97b96dd7d9c464b"
    },
    {
        sentence: "There are ____ students in the class.",
        answerHash: "1137b15c7797aa84ec24e8dca5cb966dd016624374a09cb2ecaa9ac3229f5ccc"
    },
    {
        sentence: "She didn't buy ____ fruits at the store.",
        answerHash: "1137b15c7797aa84ec24e8dca5cb966dd016624374a09cb2ecaa9ac3229f5ccc"
    },
    {
        sentence: "We need ____ time to complete the task.",
        answerHash: "187897ce0afcf20b50ba2b37dca84a951b7046f29ed5ab94f010619f69d6e189"
    },
    {
        sentence: "He gave me ____ interesting ideas.",
        answerHash: "90290ad775ac38d997b706c160bd99abcb9ceb1c88b32246ee16d7be2cb62812"
    },
    {
        sentence: "There is ____ furniture in the room.",
        answerHash: "f2f0174164005261ccc9320b29854abb711490089038846307861e94e21712bb"
    },
    {
        sentence: "I have ____ opportunities to travel.",
        answerHash: "2740e59ffb8c5eff0e0f8f3f4f5e6522fda77d9882c878346a751b9b60129cfd"
    },
    {
        sentence: "She didn't have ____ patience for the delay.",
        answerHash: "543b1c4bd4f6b184ca2aef09ca8e5aeadb04907efa0ac7b81b00f8b9ea8133cd"
    },
    {
        sentence: "They offered me ____ helpful suggestions.",
        answerHash: "2740e59ffb8c5eff0e0f8f3f4f5e6522fda77d9882c878346a751b9b60129cfd"
    },
    {
        sentence: "There is ____ evidence to support the claim.",
        answerHash: "6f6465f9dd0685853e76cabda89c082c86afa789ed2a72ca17537e83038d7376"
    },

    // Topic 12: Adjective clauses (20 questions)
    {
        sentence: "The man ____ called you is waiting outside.",
        answerHash: "6ed0337140bd32b4adc5000f76333bd8ca6b2b2c9e0bc354335cf341456290e8"
    },
    {
        sentence: "I spoke to the teacher ____ explained the lesson.",
        answerHash: "6ed0337140bd32b4adc5000f76333bd8ca6b2b2c9e0bc354335cf341456290e8"
    },
    {
        sentence: "The book ____ you gave me is fascinating.",
        answerHash: "8e7fc0236af43df9340685fc16f1efe36543cc1707051220a103ad99cf69a2df"
    },
    {
        sentence: "She met a lady ____ son is a doctor.",
        answerHash: "55efa0938f9f52fb6de33f27375ee1916aa9c5d27367eac89ea1207026bb16f8"
    },
    {
        sentence: "The car ____ he drives is very expensive.",
        answerHash: "8e7fc0236af43df9340685fc16f1efe36543cc1707051220a103ad99cf69a2df"
    },
    {
        sentence: "I have a friend ____ lives in Paris.",
        answerHash: "6ed0337140bd32b4adc5000f76333bd8ca6b2b2c9e0bc354335cf341456290e8"
    },
    {
        sentence: "The movie ____ we watched last night was thrilling.",
        answerHash: "8e7fc0236af43df9340685fc16f1efe36543cc1707051220a103ad99cf69a2df"
    },
    {
        sentence: "He is the artist ____ paintings are famous.",
        answerHash: "55efa0938f9f52fb6de33f27375ee1916aa9c5d27367eac89ea1207026bb16f8"
    },
    {
        sentence: "The student ____ won the prize is my cousin.",
        answerHash: "6ed0337140bd32b4adc5000f76333bd8ca6b2b2c9e0bc354335cf341456290e8"
    },
    {
        sentence: "The letter ____ arrived yesterday was important.",
        answerHash: "8e7fc0236af43df9340685fc16f1efe36543cc1707051220a103ad99cf69a2df"
    },
    {
        sentence: "The house ____ is painted blue belongs to my neighbor.",
        answerHash: "77bc06c55d29ee3cfa295b4592e4b2a85a16bb06a8974726b7bfa3d4ca36d5ae"
    },
    {
        sentence: "She is the author ____ book won an award.",
        answerHash: "55efa0938f9f52fb6de33f27375ee1916aa9c5d27367eac89ea1207026bb16f8"
    },
    {
        sentence: "I know a person ____ can solve difficult puzzles.",
        answerHash: "6ed0337140bd32b4adc5000f76333bd8ca6b2b2c9e0bc354335cf341456290e8"
    },
    {
        sentence: "The restaurant ____ we dined at was excellent.",
        answerHash: "b48111c10c65fc119368edafb19f97451759ee90b3f44647368135ca47aa4753"
    },
    {
        sentence: "The teacher ____ class was interesting inspired me.",
        answerHash: "55efa0938f9f52fb6de33f27375ee1916aa9c5d27367eac89ea1207026bb16f8"
    },
    {
        sentence: "He is the actor ____ performance impressed the critics.",
        answerHash: "55efa0938f9f52fb6de33f27375ee1916aa9c5d27367eac89ea1207026bb16f8"
    },
    {
        sentence: "The city ____ we visited was beautiful.",
        answerHash: "8e7fc0236af43df9340685fc16f1efe36543cc1707051220a103ad99cf69a2df"
    },
    {
        sentence: "I saw a film ____ storyline was confusing.",
        answerHash: "55efa0938f9f52fb6de33f27375ee1916aa9c5d27367eac89ea1207026bb16f8"
    },
    {
        sentence: "The song ____ is playing on the radio is my favorite.",
        answerHash: "8e7fc0236af43df9340685fc16f1efe36543cc1707051220a103ad99cf69a2df"
    },
    {
        sentence: "She is the singer ____ voice captivates everyone.",
        answerHash: "55efa0938f9f52fb6de33f27375ee1916aa9c5d27367eac89ea1207026bb16f8"
    },

    // Topic 13: Gerunds and Infinitives (70 questions)
    {
        sentence: "I enjoy ____ (read) books in my free time.",
        answerHash: "d70afca615203838da3d858e60dda12f900e83e4a6fb03a63cfadb8576ca8985"
    },
    {
        sentence: "She decided ____ (join) the club.",
        answerHash: "8a0b2d5e73cc38c21daaea6a72df9bee398bf3815f9eb55af32e3f4302b3981c"
    },
    {
        sentence: "They are used ____ (wake) up early.",
        answerHash: "b7a18a459cf96f520b963d0b8c92674d1639efe784a7a8946add98b868d0a0d1"
    },
    {
        sentence: "He is getting used ____ (live) in the city.",
        answerHash: "4efc8cb90cfe856e72da2ab63fce01feea2d469b9901c92f8bfaea662df0c25f"
    },
    {
        sentence: "We plan ____ (visit) the museum tomorrow.",
        answerHash: "f221142cc92025b645ab10157b925027868e79b23a5f7ffe00161e6f443ea3d0"
    },
    {
        sentence: "She is interested in ____ (learn) new languages.",
        answerHash: "edd95740e339e6aa0a1dab45741b0521185680b051631a7c265b5630da4f2158"
    },
    {
        sentence: "I forgot ____ (lock) the door.",
        answerHash: "d8e74826f768a5d05ecbd5e9dbb0e6dd744c339387d9a88ad0f5fa5d786a7649"
    },
    {
        sentence: "He seems ____ (enjoy) the game.",
        answerHash: "e94b6f5fdb5839c8513f70fb78aed3d50c21c194ab53fccc58ebec5a1015c96d"
    },
    {
        sentence: "They are fond of ____ (play) soccer.",
        answerHash: "0db79e63c5179b1263619f693ca7125017237cec447946bdb40a8d3175c1773d"
    },
    {
        sentence: "I promised ____ (help) him with his homework.",
        answerHash: "faba37be9a5a99c9da430fb0d4820a7ecb2783a358ee39b05909b87198edd5e6"
    },
    {
        sentence: "She is committed to ____ (exercise) daily.",
        answerHash: "f86c30027f5091ac1bd22ac97e721ec026a0a6af966b917950a4775674199895"
    },
    {
        sentence: "He appears ____ (be) very happy.",
        answerHash: "0af1207eeabd158672cf22436825b6b7d7e5d47aaad8f062da3bf064c6f72107"
    },
    {
        sentence: "I stopped ____ (smoke) last year.",
        answerHash: "71132fbb5b12518402f26900bb7d7df98c554534e5163fa2031d7b385e79bd1e"
    },
    {
        sentence: "They hope ____ (win) the championship.",
        answerHash: "3f800f4cccd92c3b218d5dc931b2544531e7fdeba8740a1f0fdf989d4dd0c045"
    },
    {
        sentence: "I look forward to ____ (meet) you.",
        answerHash: "0fd924362117d03662f0e86e580ab01c70d3fa88dbffce4224017e86e5fbad52"
    },
    {
        sentence: "She needs ____ (finish) her assignment.",
        answerHash: "2f0b207d34ae68d7ecb12b414fa000f312af9efb355dc844545cdb8e1670b428"
    },
    {
        sentence: "He admitted ____ (make) a mistake.",
        answerHash: "febb9f32c94e238e5f36abb28975778a150d63ff5c656d62861f97ccd9ede9fe"
    },
    {
        sentence: "We arranged ____ (meet) after the class.",
        answerHash: "9e8f5f95ba47b4806ba6147694ebbf207a3a17158b61acce60deedb9e8322cf6"
    },
    {
        sentence: "I can't stand ____ (wait) in long lines.",
        answerHash: "80cfa3e7f28dde4df64436b652230aff28d7779116d1369c21ef2bbf37261d71"
    },
    {
        sentence: "She is accustomed to ____ (drive) in heavy traffic.",
        answerHash: "d9c1acf117657bb04a8309ecbd6f3771e4f5e0bbeb437019748ffb5028bda1b7"
    },
    {
        sentence: "He promised ____ (call) as soon as possible.",
        answerHash: "4a7984df79d53bcda6a75b0f34eb05934c1f1997f2bda144fcc6e33a5f7bfc78"
    },
    {
        sentence: "They decided ____ (stay) at home.",
        answerHash: "44d02a2c35cd550c1e4f49d674cfe530328720b7d8b5cbac4676abba9f112a58"
    },
    {
        sentence: "I am looking forward to ____ (travel) abroad.",
        answerHash: "0ccab61f677d1994d8b61db3fbcf86439625a5ca5760d247a001a59741fcecce"
    },
    {
        sentence: "He tends ____ (forget) important dates.",
        answerHash: "ff29ae3311ac3771caf87d1e508846015dc51d9b8fef6e5d6cd18cc0bf9e588c"
    },
    {
        sentence: "She is famous for ____ (sing) in a band.",
        answerHash: "d0112b0319f68c7a04ae5409dd4d98501db2b32aff9e752d73071f49e30bbbd1"
    },
    {
        sentence: "I would love ____ (visit) Japan someday.",
        answerHash: "f221142cc92025b645ab10157b925027868e79b23a5f7ffe00161e6f443ea3d0"
    },
    {
        sentence: "They are planning ____ (attend) the concert.",
        answerHash: "47d7e952ed3110c0f64bec9470fa7104f772c28d8391ea1496039b00b2bf5cff"
    },
    {
        sentence: "He is capable of ____ (solve) difficult problems.",
        answerHash: "dc81c82673f84c2a0bb52419e6abad745af14f99019147fd137aa9da5588c473"
    },
    {
        sentence: "I refused ____ (help) him with his work.",
        answerHash: "faba37be9a5a99c9da430fb0d4820a7ecb2783a358ee39b05909b87198edd5e6"
    },
    {
        sentence: "She is known for ____ (cook) delicious meals.",
        answerHash: "82bd81ea4b0302554165ae91628c0965b68b976a62ecf107c2e79688833f7599"
    },
    {
        sentence: "He pretended ____ (be) asleep.",
        answerHash: "0af1207eeabd158672cf22436825b6b7d7e5d47aaad8f062da3bf064c6f72107"
    },
    {
        sentence: "I consider ____ (learn) a new language challenging.",
        answerHash: "edd95740e339e6aa0a1dab45741b0521185680b051631a7c265b5630da4f2158"
    },
    {
        sentence: "They managed ____ (finish) the project on time.",
        answerHash: "2f0b207d34ae68d7ecb12b414fa000f312af9efb355dc844545cdb8e1670b428"
    },
    {
        sentence: "She agreed ____ (meet) at noon.",
        answerHash: "9e8f5f95ba47b4806ba6147694ebbf207a3a17158b61acce60deedb9e8322cf6"
    },
    {
        sentence: "I am used ____ (work) under pressure.",
        answerHash: "6ad43de047c0fbfdb4f7ab847e2fdf995019fee5d01d379198f6c72dd794ac2b"
    },
    {
        sentence: "He offered ____ (drive) me home.",
        answerHash: "1c0e0d2ca8f8cbde7af3af2bce7c9f549bf538b38a028f2c24d01956aa8076a2"
    },
    {
        sentence: "We hope ____ (find) a solution soon.",
        answerHash: "74df331c461ddd4f264b5b024a4062c376da3f81400c0b0997b48042a8023891"
    },
    {
        sentence: "She decided ____ (not/attend) the meeting.",
        answerHash: "c093e917b89b5d60a4f287f75f130ef2bf86d6e418fa9125df2d8472c37b54f8"
    },
    {
        sentence: "I continued ____ (study) despite the noise.",
        answerHash: "435c149cbc6a5e5cc373cd33347d4c336a22160e06b7df61092b66e56f4d55ec"
    },
    {
        sentence: "They practiced ____ (dance) for the competition.",
        answerHash: "68d6641ff9421a6a305e56d4f1f79c1d426c977a1bcd3cadcd0d337ee4a6d323"
    },
    {
        sentence: "He was expected ____ (arrive) on time.",
        answerHash: "31aa2c01b3b813870e165c16b6503767a14922d449b43f0427fe33baf2407cdf"
    },
    {
        sentence: "I need ____ (buy) a new phone.",
        answerHash: "7e2ed393d525d7e2349fb4eb21db338cb06d244366fd07eb03ad98a922f30059"
    },
    {
        sentence: "She managed ____ (finish) her work quickly.",
        answerHash: "2f0b207d34ae68d7ecb12b414fa000f312af9efb355dc844545cdb8e1670b428"
    },
    {
        sentence: "They hope ____ (get) the tickets soon.",
        answerHash: "6dfced69d78327dd9571f6635eda10e6b30b3a1398af3c2ffa2a5250c39b334a"
    },
    {
        sentence: "I enjoy ____ (cook) Italian food.",
        answerHash: "82bd81ea4b0302554165ae91628c0965b68b976a62ecf107c2e79688833f7599"
    },
    {
        sentence: "He is used ____ (speak) in public.",
        answerHash: "87488b765c348fb6f2a47159f0a103d1aa6b3d02a558f0f0124f9ef4920d979e"
    },
    {
        sentence: "We planned ____ (organize) a surprise party.",
        answerHash: "b0c69fdac8a89881aa5f69c908323c805c5478327dd54b361c32f37435da07b1"
    },
    {
        sentence: "She intends ____ (study) abroad next year.",
        answerHash: "9d43986113642b69b04593073cf57f74bf3a0f4ee812ec295de67fa7e03593eb"
    },
    {
        sentence: "I forgot ____ (bring) my notebook.",
        answerHash: "c2a18090bf3eac9c92de35aa61c78b29258c66579f61c430c8cfd37c5b329607"
    },
    {
        sentence: "They admitted ____ (cheat) on the test.",
        answerHash: "f3b643eead27d2d8c49d6b0421ff9ccafb51de6d96b96d683799aa402593ca5a"
    },
    {
        sentence: "He is supposed ____ (finish) the report by today.",
        answerHash: "2f0b207d34ae68d7ecb12b414fa000f312af9efb355dc844545cdb8e1670b428"
    },
    {
        sentence: "I was happy ____ (receive) your letter.",
        answerHash: "b04ac4047d189e89229bc49de64716a6a15727e394d369ca633da3363a544510"
    },
    {
        sentence: "She is eager ____ (learn) new things.",
        answerHash: "abe757d3d9908eacd3b59c364b293907854b0fcd58f2251b5374b266ec24c19e"
    },
    {
        sentence: "They seem ____ (enjoy) the performance.",
        answerHash: "e94b6f5fdb5839c8513f70fb78aed3d50c21c194ab53fccc58ebec5a1015c96d"
    },
    {
        sentence: "I would like ____ (order) a coffee.",
        answerHash: "cf63fb9eb7aa75a76d1494e88876e422abb7bd94b47e6ba2474b872a38d9f798"
    },
    {
        sentence: "He promised ____ (return) the book.",
        answerHash: "cd877cffb4033ce8885fed53975a95514a3fe35778a3d85b8fd307d5c09427e6"
    },
    {
        sentence: "We decided ____ (go) for a walk.",
        answerHash: "80d33d6dc0d19f84f577ebd942610472ee35a25315c5aa7750fbbfbcdc73a9c6"
    },
    {
        sentence: "She is looking forward to ____ (celebrate) her birthday.",
        answerHash: "3bf0383400022c3caa37a5889f720d54884aaf4af480c07ebefb3c003c08a92c"
    },
    {
        sentence: "He offered ____ (help) with the cleaning.",
        answerHash: "faba37be9a5a99c9da430fb0d4820a7ecb2783a358ee39b05909b87198edd5e6"
    },
    {
        sentence: "They plan ____ (visit) their grandparents this weekend.",
        answerHash: "f221142cc92025b645ab10157b925027868e79b23a5f7ffe00161e6f443ea3d0"
    },
    {
        sentence: "I can't afford ____ (buy) a new car.",
        answerHash: "7e2ed393d525d7e2349fb4eb21db338cb06d244366fd07eb03ad98a922f30059"
    },
    {
        sentence: "She forgot ____ (lock) the window.",
        answerHash: "d8e74826f768a5d05ecbd5e9dbb0e6dd744c339387d9a88ad0f5fa5d786a7649"
    },
    {
        sentence: "He avoided ____ (answer) the question.",
        answerHash: "1a2e91bfc954900a105a3be10254c8dde135dcc2afa3d288f33f4ad3d30157cd"
    },
    {
        sentence: "They agreed ____ (compromise) on the issue.",
        answerHash: "ae1e9bc64027cee1307e6e35f684c7e0dff3763a499a802bede15fc070095b37"
    },
    {
        sentence: "I look forward to ____ (hear) from you.",
        answerHash: "cf1a8e2ff02dcd9e6858d013bfa7cc4e6b4ebcb58ad0cb21b166c91d950ae593"
    },
    {
        sentence: "She is used ____ (get) up early.",
        answerHash: "c01033669f626ff5871f49070e4be9a80b6a9b0f745b7d2e48457cc004389793"
    },
    {
        sentence: "He pretended ____ (not/notice) the mistake.",
        answerHash: "5cfaeb7f4a8cad83ced6d8ab85c35b53b6aa9cf72ab09ea68321a1b617711702"
    },
    {
        sentence: "We decided ____ (cancel) the meeting.",
        answerHash: "3e0c98639831f6789325cbed22f2c095bf5bdcc00fe324c7f729f7beef3e08a3"
    },
    {
        sentence: "I am planning ____ (organize) a party for my friend.",
        answerHash: "b0c69fdac8a89881aa5f69c908323c805c5478327dd54b361c32f37435da07b1"
    },
    {
        sentence: "They seem ____ (not/understand) the instructions.",
        answerHash: "98731aa1abaad45e0ab3c5595876f99c5550a0a2b95a2469f865e46d4b067eec"
    }
];

// ========= Added security: SHA‑256 hashing for answer verification =========
async function hashString(str) {
    const encoder = new TextEncoder();
    const data = encoder.encode(str);
    const hashBuffer = await crypto.subtle.digest('SHA-256', data);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
}
// ===========================================================================


// สำหรับสุ่มโจทย์ 20 ข้อ (ถ้าโจทย์ใน pool น้อยกว่า 20 จะสุ่มแบบมีการทำซ้ำ)
let quizQuestions = [];
//  เปลี่ยนจำนวนข้อ
function generateQuizQuestions() {
    if (questions.length >= 10) {
        quizQuestions = shuffleArray(questions).slice(0, 10);
    } else {
        quizQuestions = shuffleArray(questions);
        return;
        while (quizQuestions.length < 10) {
            quizQuestions.push(questions[Math.floor(Math.random() * questions.length)]);
        }
    }
}
// ฟังก์ชันสุ่ม array
function shuffleArray(array) {
    return array.sort(() => Math.random() - 0.5);
}

let score = 0;
let currentQuestion = 0;

// เมื่อโหลดหน้าเว็บ ให้แสดงเฉพาะ register page
// document.addEventListener('DOMContentLoaded', () => {
//     registerPage.style.display = 'flex';
//     quizPage.style.display = 'none';
//     resultPage.style.display = 'none';
//     validateRegisterInputs();
//     // เพิ่ม fade-in ให้ register page เพื่อให้สมูทมากขึ้น
//     registerPage.classList.add('fade-in-up');
//     setTimeout(() => {
//         registerPage.classList.remove('fade-in-up');
//     }, 600);
// });
document.addEventListener('DOMContentLoaded', () => {
    // Hide all pages initially
    registerPage.style.display = 'none';
    quizPage.style.display = 'none';
    resultPage.style.display = 'none';

    // Show loading animation with fade in effect
    const loadingContainer = document.querySelector('.container');
    loadingContainer.style.display = 'block';
    loadingContainer.style.opacity = '0';
    setTimeout(() => {
        loadingContainer.style.transition = 'opacity 0.5s ease';
        loadingContainer.style.opacity = '1';
    }, 100);

    // Wait 3 seconds for loading
    setTimeout(() => {
        // Fade out loading animation
        loadingContainer.style.transition = 'opacity 0.5s ease';
        loadingContainer.style.opacity = '0';

        // After fade out, hide loading and show register page
        setTimeout(() => {
            loadingContainer.style.display = 'none';
            registerPage.style.display = 'flex';
            registerPage.classList.add('fade-in-up');

            setTimeout(() => {
                registerPage.classList.remove('fade-in-up');
            }, 600);

            validateRegisterInputs();
        }, 500);

    }, 3000);
});

// Validate registration inputs
function validateRegisterInputs() {
    const allInputs = [nameInput, lastnameInput, numberInput];
    const isValid = allInputs.every(input => input.value.trim() !== '');
    submitRegister.disabled = !isValid;
    submitRegister.style.opacity = isValid ? '1' : '0.5';
    submitRegister.style.cursor = isValid ? 'pointer' : 'not-allowed';
}
[nameInput, lastnameInput, numberInput].forEach(input => {
    input.addEventListener('input', validateRegisterInputs);
});

// Validate registration inputs
function validateRegisterInputs() {
    const allInputs = [nameInput, lastnameInput, numberInput];
    const isValid = allInputs.every(input => input.value.trim() !== '');
    submitRegister.disabled = !isValid;
    submitRegister.style.opacity = isValid ? '1' : '0.5';
    submitRegister.style.cursor = isValid ? 'pointer' : 'not-allowed';
}
[nameInput, lastnameInput, numberInput].forEach(input => {
    input.addEventListener('input', validateRegisterInputs);
});

// เมื่อกดปุ่ม Register
submitRegister.addEventListener('click', () => {
    if (submitRegister.disabled) return;
    // playSound();
    setTimeout(() => {
        // transition effect
        registerPage.style.transition = 'opacity 0.5s ease';
        registerPage.style.opacity = '0';
        setTimeout(() => {
            registerPage.style.display = 'none';
            quizPage.style.display = 'flex';
            quizPage.style.opacity = '0';
            quizPage.style.transition = 'opacity 0.5s ease';
            quizPage.classList.add('fade-in-up');
            setTimeout(() => {
                quizPage.classList.remove('fade-in-up');
            }, 600);
            setTimeout(() => {
                quizPage.style.opacity = '1';
            }, 100);
            startQuiz();
        }, 500);
    }, 2000);
});

// เริ่มสุ่มโจทย์ 
function startQuiz() {
    currentQuestion = 0;
    score = 0;
    feedbackEl.textContent = '';
    generateQuizQuestions();
    quizPage.style.display = 'flex';
    quizPage.style.opacity = '1';
    startTimer(); // เริ่มนับเวลา 20 นาที
    displayQuestion();
}

// แสดงคำถาม
function displayQuestion() {
    if (currentQuestion < quizQuestions.length) {
        const q = quizQuestions[currentQuestion];
        questionEl.textContent = q.sentence;
        quizAnswer.value = '';
        quizAnswer.focus();
        feedbackEl.textContent = '';
    }
}
// Validate quiz answer input
function validateQuizAnswer() {
    const isValid = quizAnswer.value.trim() !== '';
    submitAnswer.disabled = !isValid;
    submitAnswer.style.opacity = isValid ? '1' : '0.5';
    submitAnswer.style.cursor = isValid ? 'pointer' : 'not-allowed';
}

// Add input event listener for quiz answer and initial validation
quizAnswer.addEventListener('input', validateQuizAnswer);
validateQuizAnswer();

// กดปุ่ม Submit Answer
submitAnswer.addEventListener('click', async () => {
    if (submitAnswer.disabled) return;
    // playSound();
    const userAnswer = quizAnswer.value.trim().toLowerCase();
    const userAnswerHash = await hashString(userAnswer);
    const correctAnswerHash = quizQuestions[currentQuestion].answerHash;
    if (userAnswer === "") {
        feedbackEl.textContent = "Please enter an answer.";
        return;
    }
    // ใช้ delayTime 
    const delayTime = 500;
    if (userAnswerHash === correctAnswerHash) {
        score++;
        // feedbackEl.textContent = "Correct!";
    } else {
        // feedbackEl.textContent = `Incorrect! Correct answer: ${quizQuestions[currentQuestion].answer}`;
    }
    currentQuestion++;
    if (currentQuestion < quizQuestions.length) {
        questionEl.style.transition = 'opacity 0.5s ease';
        quizAnswer.style.transition = 'opacity 0.5s ease';
        feedbackEl.style.transition = 'opacity 0.5s ease';
        // questionEl.style.transition = 'opacity 0.9s ease';
        // quizAnswer.style.transition = 'opacity 0.9s ease';
        // feedbackEl.style.transition = 'opacity 0.9s ease';

        questionEl.style.opacity = '0';
        quizAnswer.style.opacity = '0';
        feedbackEl.style.opacity = '0';

        setTimeout(() => {
            displayQuestion();
            questionEl.style.opacity = '1';
            quizAnswer.style.opacity = '1';
            feedbackEl.style.opacity = '1';
        }, delayTime);
    } else {
        setTimeout(showResult, delayTime);
    }
});
// Update submit button state based on quiz answer input
quizAnswer.addEventListener('input', () => {
    const isValid = quizAnswer.value.trim() !== '';
    submitAnswer.disabled = !isValid;
    submitAnswer.style.opacity = isValid ? '1' : '0.5';
    submitAnswer.style.cursor = isValid ? 'pointer' : 'not-allowed';
});

// Initial state
submitAnswer.disabled = true;
submitAnswer.style.opacity = '0.5';
submitAnswer.style.cursor = 'not-allowed';
// แสดงผล
function showResult() {
    clearInterval(timerInterval); // หยุด timer เมื่อ quiz จบ
    quizPage.style.opacity = '0';
    setTimeout(() => {
        quizPage.style.display = 'none';
        finalScoreEl.textContent = `Hi ${nameInput.value} ${lastnameInput.value}, your score is ${score} out of ${quizQuestions.length}.`;
        resultPage.style.display = 'flex';
        resultPage.style.opacity = '1';
        resultPage.classList.add('fade-in-up');
        setTimeout(() => {
            resultPage.classList.remove('fade-in-up');
        }, 600);
    }, 500);
}


// downloadResultBtn.addEventListener('click', () => {
//     playSound();
//     const canvas = document.createElement('canvas');
//     canvas.width = 800;
//     canvas.height = 600;
//     const ctx = canvas.getContext('2d');

//     // พื้นหลังแบบกระดาษเกียรติบัตร (parchment)
//     ctx.fillStyle = '#fdfaf6';
//     ctx.fillRect(0, 0, canvas.width, canvas.height);

//     // วาดกรอบเกียรติบัตรด้วยสีทองแบบ gradient
//     const borderGradient = ctx.createLinearGradient(0, 0, canvas.width, 0);
//     borderGradient.addColorStop(0, '#DAA520');
//     borderGradient.addColorStop(1, '#FFD700');
//     ctx.strokeStyle = borderGradient;
//     ctx.lineWidth = 10;
//     ctx.strokeRect(20, 20, canvas.width - 40, canvas.height - 40);

//     // เขียนข้อความในรูปแบบเกียรติบัตร
//     ctx.fillStyle = '#333';
//     ctx.font = "bold 40px 'Kanit', sans-serif";
//     ctx.textAlign = "center";
//     ctx.fillText("Certificate of Achievement", canvas.width / 2, 100);

//     ctx.font = "28px 'Kanit', sans-serif";
//     ctx.fillText("Presented to", canvas.width / 2, 160);
//     ctx.font = "bold 32px 'Kanit', sans-serif";
//     ctx.fillText(`${nameInput.value} ${lastnameInput.value}`, canvas.width / 2, 210);

//     ctx.font = "28px 'Kanit', sans-serif";
//     ctx.fillText(`Quiz Score: ${score} / ${quizQuestions.length}`, canvas.width / 2, 280);

//     ctx.font = "24px 'Kanit', sans-serif";
//     ctx.fillText(`Number: ${numberInput.value}`, canvas.width / 2, 340);
//     ctx.fillText(`Date: ${new Date().toLocaleString()}`, canvas.width / 2, 400);

//     // เพิ่ม watermark ให้บังทับทั้งหมด (overlay watermark)
//     ctx.save();
//     ctx.globalAlpha = 0.1;
//     ctx.font = "bold 100px 'Kanit', sans-serif";
//     ctx.fillStyle = "#333";
//     ctx.textAlign = "center";
//     ctx.translate(canvas.width / 2, canvas.height / 2);
//     ctx.rotate(-Math.PI / 6);
//     ctx.fillText("© Teacher Sopa", 0, 0);
//     ctx.restore();

//     const dataURL = canvas.toDataURL("image/png");
//     const downloadAnchorNode = document.createElement('a');
//     downloadAnchorNode.setAttribute("href", dataURL);
//     downloadAnchorNode.setAttribute("download", "quiz_certificate.png");
//     document.body.appendChild(downloadAnchorNode);
//     downloadAnchorNode.click();
//     downloadAnchorNode.remove();
// });

downloadResultBtn.addEventListener('click', () => {
    // playSound();
    // กำหนดขนาด canvas ให้ละเอียดขึ้น
    const canvas = document.createElement('canvas');
    canvas.width = 1200;
    canvas.height = 800;
    const ctx = canvas.getContext('2d');

    // 1. พื้นหลังแบบกระดาษเกียรติบัตรโดยใช้ radial gradient
    const bgGradient = ctx.createRadialGradient(canvas.width / 2, canvas.height / 2, 100, canvas.width / 2, canvas.height / 2, 600);
    bgGradient.addColorStop(0, '#fdfaf6');
    bgGradient.addColorStop(1, '#e8e1d7');
    ctx.fillStyle = bgGradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // 2. เติม texture ด้วย noise overlay แบบ subtle
    const noiseCanvas = document.createElement('canvas');
    noiseCanvas.width = canvas.width;
    noiseCanvas.height = canvas.height;
    const noiseCtx = noiseCanvas.getContext('2d');
    const noiseData = noiseCtx.createImageData(canvas.width, canvas.height);
    for (let i = 0; i < noiseData.data.length; i += 4) {
        const v = Math.floor(Math.random() * 255);
        noiseData.data[i] = v;
        noiseData.data[i + 1] = v;
        noiseData.data[i + 2] = v;
        noiseData.data[i + 3] = 15; // ความโปร่งแสงต่ำเพื่อให้ noise subtle
    }
    noiseCtx.putImageData(noiseData, 0, 0);
    ctx.drawImage(noiseCanvas, 0, 0);

    // 3. วาดกรอบหลักด้วยเส้นสีทอง gradient หนา 20px
    const outerGradient = ctx.createLinearGradient(0, 0, canvas.width, 0);
    outerGradient.addColorStop(0, '#DAA520');
    outerGradient.addColorStop(1, '#FFD700');
    ctx.strokeStyle = outerGradient;
    ctx.lineWidth = 20;
    ctx.strokeRect(20, 20, canvas.width - 40, canvas.height - 40);

    // 4. วาดกรอบย่อย (inner border) ด้วยเส้นประเพื่อเพิ่มความซับซ้อน
    ctx.strokeStyle = outerGradient;
    ctx.lineWidth = 4;
    ctx.setLineDash([20, 15]);
    ctx.strokeRect(50, 50, canvas.width - 100, canvas.height - 100);
    ctx.setLineDash([]);

    // 5. ลวดลายตกแต่งมุมด้วย bezier curves (ออกแบบให้ดูหรูหรา)
    function drawOrnateCorner(x, y, angle) {
        ctx.save();
        ctx.translate(x, y);
        ctx.rotate(angle);
        ctx.strokeStyle = outerGradient;

        // Main flourish
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.bezierCurveTo(-40, -40, -100, 40, 0, 80);
        ctx.bezierCurveTo(100, 40, 40, -40, 0, 0);
        ctx.stroke();

        // Inner decorative curves
        ctx.beginPath();
        ctx.moveTo(-20, 20);
        ctx.quadraticCurveTo(-40, 30, -30, 50);
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(20, 20);
        ctx.quadraticCurveTo(40, 30, 30, 50);
        ctx.stroke();

        // Spiral details
        for (let i = 0; i < 2; i++) {
            ctx.beginPath();
            ctx.arc(i === 0 ? -25 : 25, 25, 10, 0, Math.PI * 2);
            ctx.stroke();
        }

        // Small dots for decoration
        ctx.fillStyle = '#DAA520';
        [[-40, 0], [40, 0], [0, 40], [0, 60]].forEach(([dx, dy]) => {
            ctx.beginPath();
            ctx.arc(dx, dy, 3, 0, Math.PI * 2);
            ctx.fill();
        });

        ctx.restore();
    }
    ctx.lineWidth = 3;
    drawOrnateCorner(20, 20, 0);
    drawOrnateCorner(canvas.width - 20, 20, Math.PI / 2);
    drawOrnateCorner(20, canvas.height - 20, -Math.PI / 2);
    drawOrnateCorner(canvas.width - 20, canvas.height - 20, Math.PI);

    // 6. เขียนข้อความด้วยเอฟเฟ็กต์เงาและ stroke เพื่อให้มีมิติ
    // ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.textAlign = "center";
    // ctx.shadowColor = "rgba(0, 0, 0, 0.4)";
    // ctx.shadowBlur = 8;
    // ctx.shadowOffsetX = 5;
    // ctx.shadowOffsetY = 5;
    ctx.globalAlpha = 0.7;
    ctx.fillStyle = '#333';

    // Title: Certificate of Achievement
    ctx.font = "bold 60px 'Kanit', sans-serif";
    ctx.lineWidth = 2;
    ctx.strokeStyle = "#fff";
    ctx.strokeText("Score Confirmation", canvas.width / 2, 140);
    ctx.fillText("Score Confirmation", canvas.width / 2, 140);

    // "Presented to"
    ctx.font = "36px 'Kanit', sans-serif";
    ctx.strokeText("Tester Name", canvas.width / 2, 220);
    ctx.fillText("Tester Name", canvas.width / 2, 220);

    // ชื่อผู้รับเกียรติบัตร
    ctx.font = "bold 52px 'Kanit', sans-serif";
    ctx.strokeText(`${nameInput.value} ${lastnameInput.value}`, canvas.width / 2, 300);
    ctx.fillText(`${nameInput.value} ${lastnameInput.value}`, canvas.width / 2, 300);

    // คะแนน Quiz
    ctx.font = "36px 'Kanit', sans-serif";
    ctx.strokeText(`Test Score: ${score} / ${quizQuestions.length}`, canvas.width / 2, 380);
    ctx.fillText(`Test Score: ${score} / ${quizQuestions.length}`, canvas.width / 2, 380);

    // ข้อมูลเพิ่มเติม: หมายเลขและวันที่
    ctx.font = "32px 'Kanit', sans-serif";
    ctx.strokeText(`No.${numberInput.value}`, canvas.width / 2, 460);
    ctx.fillText(`No.${numberInput.value}`, canvas.width / 2, 460);
    ctx.strokeText(`Testing data: ${new Date().toLocaleString()}`, canvas.width / 2, 520);
    ctx.fillText(`Testing data: ${new Date().toLocaleString()}`, canvas.width / 2, 520);

    // 7. เพิ่ม watermark แบบซับซ้อนด้วยการวาดข้อความซ้ำในรูปแบบ grid ที่เอียงกัน
    ctx.save();
    ctx.globalAlpha = 0.12; // ปรับความทึบเพื่อให้ข้อความชัดเจนขึ้น
    ctx.font = "bold 100px 'Kanit', sans-serif";
    ctx.fillStyle = "#333";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";

    // ใช้ loop เพื่อวาด watermark ซ้ำด้วย spacing ที่ปรับใหม่
    for (let i = -1; i <= 3; i++) {
        for (let j = -1; j <= 3; j++) {
            ctx.save();
            // ปรับ spacing โดยใช้ค่า 350 สำหรับแกน X และ 250 สำหรับแกน Y
            ctx.translate(canvas.width / 2 + i * 350, canvas.height / 2.7 + j * 250);
            // ปรับมุมหมุนให้อ่านได้ง่ายขึ้น (เปลี่ยนจาก -Math.PI/6 เป็น -Math.PI/8)
            ctx.rotate(-Math.PI / 8);
            ctx.fillText("© Teacher Sopa", 0, 0);
            ctx.restore();
        }
    }
    ctx.restore();

    // 8. สร้างลิงก์ดาวน์โหลดและ trigger การดาวน์โหลดไฟล์ PNG
    const dataURL = canvas.toDataURL("image/png");
    const downloadAnchorNode = document.createElement('a');
    downloadAnchorNode.setAttribute("href", dataURL);
    downloadAnchorNode.setAttribute("download", "quiz_certificate.png");
    document.body.appendChild(downloadAnchorNode);
    downloadAnchorNode.click();
    downloadAnchorNode.remove();
});


// downloadResultBtn.addEventListener('click', () => {
//     playSound();
//     // ปรับขนาด canvas ให้ใหญ่ขึ้นเพื่อความละเอียดที่ดีกว่า
//     const canvas = document.createElement('canvas');
//     canvas.width = 1200;
//     canvas.height = 800;
//     const ctx = canvas.getContext('2d');

//     // สร้างพื้นหลังแบบ gradient รู้สึกเหมือนกระดาษเกียรติบัตร (parchment)
//     const bgGradient = ctx.createRadialGradient(canvas.width / 2, canvas.height / 2, 100, canvas.width / 2, canvas.height / 2, 600);
//     bgGradient.addColorStop(0, '#fdfaf6');
//     bgGradient.addColorStop(1, '#e2dcd5');
//     ctx.fillStyle = bgGradient;
//     ctx.fillRect(0, 0, canvas.width, canvas.height);

//     // วาดกรอบเกียรติบัตรด้วย gradient สีทองที่หนาและเรียบหรู
//     const borderGradient = ctx.createLinearGradient(0, 0, canvas.width, 0);
//     borderGradient.addColorStop(0, '#DAA520');
//     borderGradient.addColorStop(1, '#FFD700');
//     ctx.strokeStyle = borderGradient;
//     ctx.lineWidth = 15;
//     ctx.strokeRect(30, 30, canvas.width - 60, canvas.height - 60);

//     // ฟังก์ชันวาดลวดลายตกแต่งมุมกรอบ
//     function drawCornerFlourish(x, y, rotation) {
//         ctx.save();
//         ctx.translate(x, y);
//         ctx.rotate(rotation);
//         ctx.beginPath();
//         ctx.moveTo(0, 0);
//         ctx.lineTo(50, 0);
//         ctx.lineTo(40, 20);
//         ctx.lineTo(60, 40);
//         ctx.lineTo(30, 50);
//         ctx.lineTo(0, 30);
//         ctx.stroke();
//         ctx.restore();
//     }
//     ctx.lineWidth = 4;
//     ctx.strokeStyle = borderGradient;
//     // วาดลวดลายที่มุมทั้งสี่
//     drawCornerFlourish(30, 30, 0);
//     drawCornerFlourish(canvas.width - 30, 30, Math.PI / 2);
//     drawCornerFlourish(30, canvas.height - 30, -Math.PI / 2);
//     drawCornerFlourish(canvas.width - 30, canvas.height - 30, Math.PI);

//     // เขียนข้อความด้วยเงา
//     ctx.textAlign = "center";
//     ctx.fillStyle = '#333';
//     ctx.shadowColor = "rgba(0, 0, 0, 0.2)";
//     ctx.shadowOffsetX = 3;
//     ctx.shadowOffsetY = 3;
//     ctx.shadowBlur = 5;

//     ctx.font = "bold 50px 'Kanit', sans-serif";
//     ctx.fillText("Certificate of Achievement", canvas.width / 2, 120);

//     ctx.font = "28px 'Kanit', sans-serif";
//     ctx.fillText("Presented to", canvas.width / 2, 190);

//     ctx.font = "bold 36px 'Kanit', sans-serif";
//     ctx.fillText(`${nameInput.value} ${lastnameInput.value}`, canvas.width / 2, 250);

//     ctx.font = "28px 'Kanit', sans-serif";
//     ctx.fillText(`Quiz Score: ${score} / ${quizQuestions.length}`, canvas.width / 2, 320);

//     ctx.font = "24px 'Kanit', sans-serif";
//     ctx.fillText(`Number: ${numberInput.value}`, canvas.width / 2, 380);
//     ctx.fillText(`Date: ${new Date().toLocaleString()}`, canvas.width / 2, 430);

//     // รีเซ็ตเงาก่อน watermark
//     ctx.shadowColor = "transparent";

//     // เพิ่ม ลายน้ำ
//     ctx.save();
//     ctx.globalAlpha = 0.15;
//     ctx.font = "bold 120px 'Kanit', sans-serif";
//     ctx.fillStyle = "#333";
//     ctx.textAlign = "center";
//     ctx.translate(canvas.width / 2, canvas.height / 2);
//     ctx.rotate(-Math.PI / 6);
//     ctx.fillText("© Teacher Sopa", 0, 0);
//     ctx.restore();

//     // สร้างลิงก์ดาวน์โหลดภาพและ trigger การดาวน์โหลด
//     const dataURL = canvas.toDataURL("image/png");
//     const downloadAnchorNode = document.createElement('a');
//     downloadAnchorNode.setAttribute("href", dataURL);
//     downloadAnchorNode.setAttribute("download", "quiz_certificate.png");
//     document.body.appendChild(downloadAnchorNode);
//     downloadAnchorNode.click();
//     downloadAnchorNode.remove();
// });
// Global variables สำหรับ timer
let totalTime = 10 * 60; // 20 นาที = 1200 วินาที
// let totalTime = 20 * 60; // 20 นาที = 1200 วินาที
let timerInterval;

function startTimer() {
    timerInterval = setInterval(() => {
        totalTime--;
        let minutes = Math.floor(totalTime / 60);
        let seconds = totalTime % 60;
        // อัปเดตข้อความใน element timer
        document.getElementById('timer').textContent =
            `Time Left: ${minutes < 10 ? '0' + minutes : minutes}:${seconds < 10 ? '0' + seconds : seconds}`;
        // เมื่อหมดเวลาแล้ว
        if (totalTime <= 0) {
            clearInterval(timerInterval);
            showResult();
        }
    }, 1000);
}