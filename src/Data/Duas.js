// duaData.js
const duas = [
    {
        duaTitle: "Dua Before Eating",
        duaArabic: "بِسْمِ اللَّهِ وَبَارَكْتُ لِلَّهِ",
        duaTransliteration: "Bismillahi wa barakatillah",
        duaTranslation: "In the name of Allah and with the blessings of Allah.",
        duaCitation: "Source: Sahih Muslim"
    },
    {
        duaTitle: "Dua After Eating",
        duaArabic: "الْحَمْدُ لِلَّهِ الَّذِي أَطْعَمَنَا وَسَقَانَا وَجَعَلَنَا مُسْلِمِينَ",
        duaTransliteration: "Alhamdulillahilladhi at’amana wasaqana waja’alana muslimin",
        duaTranslation: "Praise be to Allah Who has fed us and given us drink and made us Muslims.",
        duaCitation: "Source: Sunan Abi Dawood"
    }, 
    {
        duaTitle: "Dua Before Sleeping",
        duaArabic: "بِاسْمِكَ رَبِّي وَضَعْتُ جَنْبِي، وَبِكَ أَرْفَعُهُ، فَإِنْ أَمْسَكْتَ نَفْسِي فَارْحَمْهَا، وَإِنْ أَرْسَلْتَهَا فَاحْفَظْهَا بِمَا تَحْفَظُ بِهِ عِبَادَكَ الصَّالِحِينَ",
        duaTransliteration: "Bismika rabbi wada'tu janbi, wa bika arfa'uhu, fa in amsakta nafsi farhamha, wa in arsaltaha fahfazha bima tahfazu bihi ibadaka as-saliheen",
        duaTranslation: "In Your name, my Lord, I lie down and in Your name I rise, so if You should take my soul then have mercy upon it, and if You should return my soul then protect it as You protect Your righteous servants.",
        duaCitation: "Source: Sahih al-Bukhari"
    },
    {
        duaTitle: "Dua Upon Waking Up",
        duaArabic: "الْحَمْدُ لِلَّهِ الَّذِي أَحْيَانَا بَعْدَ مَا أَمَاتَنَا وَإِلَيْهِ النُّشُورُ",
        duaTransliteration: "Alhamdu lillahi alladhi ahyana ba'da ma amatana wa ilayhi al-nushur",
        duaTranslation: "Praise be to Allah Who has given us life after He caused us to die, and to Him is the resurrection.",
        duaCitation: "Source: Sahih al-Bukhari"
    },
    {
        duaTitle: "Dua Before Entering the Toilet",
        duaArabic: "اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْخُبُثِ وَالْخَبَائِثِ",
        duaTransliteration: "Allahumma inni a'udhu bika min al-khubuthi wal-khaba'ith",
        duaTranslation: "O Allah, I seek refuge in You from the male and female unclean spirits (devils).",
        duaCitation: "Source: Sunan Ibn Majah"
    },
    {
        duaTitle: "Dua After Leaving the Toilet",
        duaArabic: "غُفْرَانَكَ",
        duaTransliteration: "Ghufranak",
        duaTranslation: "I seek Your forgiveness.",
        duaCitation: "Source: Sunan Abu Dawood"
    },
    {
        duaTitle: "Dua Upon Entering the House",
        duaArabic: "بِسْمِ اللَّهِ وَلَجْنَا، وَبِسْمِ اللَّهِ خَرَجْنَا، وَعَلَى اللَّهِ رَبِّنَا تَوَكَّلْنَا",
        duaTransliteration: "Bismillahi walajna, wa bismillahi kharajna, wa 'ala Allahi rabbina tawakkalna",
        duaTranslation: "In the name of Allah we enter, and in the name of Allah we leave, and upon our Lord we place our trust.",
        duaCitation: "Source: Sunan Abu Dawood"
    },
    {
        duaTitle: "Dua Before Leaving the House",
        duaArabic: "بِسْمِ اللَّهِ، تَوَكَّلْتُ عَلَى اللَّهِ، وَلَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِاللَّهِ",
        duaTransliteration: "Bismillahi, tawakkaltu 'ala Allahi, wa la hawla wa la quwwata illa billah",
        duaTranslation: "In the name of Allah, I place my trust in Allah, and there is no power and no strength except with Allah.",
        duaCitation: "Source: Sunan Abu Dawood"
    },
    {
        duaTitle: "Dua Upon Hearing the Adhan",
        duaArabic: "اللَّهُمَّ رَبَّ هَذِهِ الدَّعْوَةِ التَّامَّةِ وَالصَّلَاةِ الْقَائِمَةِ آتِ مُحَمَّدًا الْوَسِيلَةَ وَالْفَضِيلَةَ وَابْعَثْهُ مَقَامًا مَحْمُودًا الَّذِي وَعَدْتَهُ",
        duaTransliteration: "Allahumma rabb hadhihi da'watit-tammati was-salatil-qaimah, ati Muhammadan al-wasilata wal-fadilah, wab'athhu maqaman mahmuda alladhi wa'adtahu",
        duaTranslation: "O Allah, Lord of this perfect call and established prayer, grant Muhammad the intercession and favor, and raise him to the honored station You have promised him.",
        duaCitation: "Source: Sahih Muslim"
    },
    {
        duaTitle: "Dua Upon Breaking Fast (Iftar)",
        duaArabic: "اللَّهُمَّ اِنِّي لَكَ صُمْتُ وَبِكَ امنْتُ [وَعَلَى رِزْقِكَ اَفْطَرْتُ]",
        duaTransliteration: "Allahumma inni laka sumtu wa bika amantu [wa 'ala rizqika aftartu]",
        duaTranslation: "O Allah, I fasted for You and I believe in You [and I break my fast with Your sustenance].",
        duaCitation: "Source: Abu Dawood, Ibn Majah"
    },
    {
        duaTitle: "Dua When Visiting the Sick",
        duaArabic: "لاَ بَأْسَ طَهُورٌ إِنْ شَاءَ اللَّهُ",
        duaTransliteration: "La ba'sa tahurun in sha' Allah",
        duaTranslation: "No harm, [it will be] purification, Allah willing.",
        duaCitation: "Source: Sahih al-Bukhari"
    },
    {
        duaTitle: "Dua for Someone Who Gives You Something",
        duaArabic: "بَارَكَ اللَّهُ لَكَ فِي الْعَطَاءِ وَبَارَكَ اللَّهُ عَلَيْكَ فِي الْعَطِيَةِ",
        duaTransliteration: "Barakallahu lak fi al-'ata'i wa barakallahu 'alaika fi al-'itiya",
        duaTranslation: "May Allah bless you in what you have given, and may Allah bless you in the giving.",
        duaCitation: "Source: At-Tirmidhi"
    },
    {
        duaTitle: "Dua for Studying",
        duaArabic:" اللَّهُمَّ لاَ سَهْلاً إِلّاَ مَا جَعَلّتَهٌ سَهْلاً وَأَنّتَ تَجّعَلَ الحَزَنَ إِذَا شِئتَ سَهْلاً ",
        duaTransliteration: "Allâhumma lâ sahla illâ mâ ja‘altahu sahlâ wa anta taj‘alu al-hazana idhâ shi’ta sahlâ.",
        duaTranslation: "Oh Allah! Nothing is easy except what You have made easy. If You wish, You can make the difficult easy.",
        duaCitation: "Source: Adapted from various authentic sources"
    },    
    // Add more dua objects as needed
];

export default duas;
