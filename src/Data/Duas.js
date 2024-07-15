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
        "duaTitle": "Dua for Guidance",
        "duaArabic": "رَبَّنَا لَا تُزِغْ قُلُوبَنَا بَعْدَ إِذْ هَدَيْتَنَا وَهَبْ لَنَا مِن لَّدُنكَ رَحْمَةً إِنَّكَ أَنتَ الْوَهَّابُ",
        "duaTransliteration": "Rabbana la tuzigh quloobana ba'da idh hadaytana wa hab lana min ladunka rahmatan innaka anta al-wahhab",
        "duaTranslation": "Our Lord, let not our hearts deviate after You have guided us and grant us from Yourself mercy. Indeed, You are the Bestower.",
        "duaCitation": "Quran 3:8"
    },
    {
        "duaTitle": "Dua for Strength and Gratitude",
        "duaArabic": "رَبِّ أَعُوذُ بِكَ مِنْ هَمَزَاتِ الشَّيَاطِينِ وَأَعُوذُ بِكَ رَبِّ أَن يَحْضُرُونِ",
        "duaTransliteration": "Rabbi a'udhu bika min hamazat al-shayateen wa a'udhu bika rabbi an yahduroon",
        "duaTranslation": "My Lord, I seek refuge in You from the incitements of the devils, and I seek refuge in You, my Lord, lest they be present with me.",
        "duaCitation": "Quran 23:97-98"
    }
      ,  
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
    {
            "duaTitle": "Dua for Guidance",
            "duaArabic": "رَبَّنَا لَا تُزِغْ قُلُوبَنَا بَعْدَ إِذْ هَدَيْتَنَا وَهَبْ لَنَا مِن لَّدُنكَ رَحْمَةً إِنَّكَ أَنتَ الْوَهَّابُ",
            "duaTransliteration": "Rabbana la tuzigh quloobana ba'da idh hadaytana wa hab lana min ladunka rahmatan innaka anta al-wahhab",
            "duaTranslation": "Our Lord, let not our hearts deviate after You have guided us and grant us from Yourself mercy. Indeed, You are the Bestower.",
            "duaCitation": "Quran 3:8"
        },
        {
            "duaTitle": "Dua for Forgiveness",
            "duaArabic": "رَبَّنَا ظَلَمْنَا أَنفُسَنَا وَإِن لَّمْ تَغْفِرْ لَنَا وَتَرْحَمْنَا لَنَكُونَنَّ مِنَ الْخَاسِرِينَ",
            "duaTransliteration": "Rabbana thalamna anfusana wa in lam taghfir lana wa tarhamna lanakoonanna min al-khasireen",
            "duaTranslation": "Our Lord, we have wronged ourselves, and if You do not forgive us and have mercy upon us, we will surely be among the losers.",
            "duaCitation": "Quran 7:23"
        },
        {
            "duaTitle": "Dua for Patience",
            "duaArabic": "رَبِّ أَوْزِعْنِي أَنْ أَشْكُرَ نِعْمَتَكَ الَّتِي أَنْعَمْتَ عَلَيَّ وَعَلَىٰ وَالِدَيَّ وَأَنْ أَعْمَلَ صَالِحًا تَرْضَاهُ وَأَدْخِلْنِي بِرَحْمَتِكَ فِي عِبَادِكَ الصَّالِحِينَ",
            "duaTransliteration": "Rabbi awzi'ni an ashkura ni'mataka allati an'amta 'alayya wa 'ala walidayya wa an a'mala salihan tardahu wa adkhilni bi rahmatika fi 'ibadika al-saliheen",
            "duaTranslation": "My Lord, enable me to be grateful for Your favor which You have bestowed upon me and upon my parents, and to do righteousness of which You approve. And admit me by Your mercy into [the ranks of] Your righteous servants.",
            "duaCitation": "Quran 27:19"
        },
        {
            "duaTitle": "Dua for Knowledge",
            "duaArabic": "رَبِّ زِدْنِي عِلْمًا",
            "duaTransliteration": "Rabbi zidni ilma",
            "duaTranslation": "My Lord, increase me in knowledge.",
            "duaCitation": "Quran 20:114"
        },
        {
            "duaTitle": "Dua for Mercy",
            "duaArabic": "رَبِّ ارْحَمْهُمَا كَمَا رَبَّيَانِي صَغِيرًا",
            "duaTransliteration": "Rabbi irhamhuma kama rabbayani sagheera",
            "duaTranslation": "My Lord, have mercy upon them as they brought me up [when I was] small.",
            "duaCitation": "Quran 17:24"
        },
        {
            "duaTitle": "Dua for Protection from Evil",
            "duaArabic": "رَبِّ أَعُوذُ بِكَ مِنْ هَمَزَاتِ الشَّيَاطِينِ وَأَعُوذُ بِكَ رَبِّ أَن يَحْضُرُونِ",
            "duaTransliteration": "Rabbi a'udhu bika min hamazat al-shayateen wa a'udhu bika rabbi an yahduroon",
            "duaTranslation": "My Lord, I seek refuge in You from the incitements of the devils, and I seek refuge in You, my Lord, lest they be present with me.",
            "duaCitation": "Quran 23:97-98"
        },
        {
            "duaTitle": "Dua for Steadfastness",
            "duaArabic": "رَبَّنَا عَلَيْكَ تَوَكَّلْنَا وَإِلَيْكَ أَنَبْنَا وَإِلَيْكَ الْمَصِيرُ",
            "duaTransliteration": "Rabbana 'alayka tawakkalna wa ilayka anabna wa ilayka al-maseer",
            "duaTranslation": "Our Lord, upon You we have relied, and to You we have returned, and to You is the destination.",
            "duaCitation": "Quran 60:4"
        },
        {
            "duaTitle": "Dua for Acceptance of Good Deeds",
            "duaArabic": "رَبَّنَا تَقَبَّلْ مِنَّا إِنَّكَ أَنتَ السَّمِيعُ الْعَلِيمُ",
            "duaTransliteration": "Rabbana taqabbal minna innaka anta al-samee'u al-'aleem",
            "duaTranslation": "Our Lord, accept [this] from us. Indeed You are the Hearing, the Knowing.",
            "duaCitation": "Quran 2:127"
        },
        {
            "duaTitle": "Dua for Guidance of Children",
            "duaArabic": "رَبِّ هَبْ لِي مِن لَّدُنكَ ذُرِّيَّةً طَيِّبَةً إِنَّكَ سَمِيعُ الدُّعَاءِ",
            "duaTransliteration": "Rabbi hab li min ladunka dhurriyyatan tayyibatan innaka samee'u al-du'a",
            "duaTranslation": "My Lord, grant me from Yourself a good offspring. Indeed, You are the Hearer of supplication.",
            "duaCitation": "Quran 3:38"
        },
        {
            "duaTitle": "Dua for Relief from Distress",
            "duaArabic": "رَبِّ إِنِّي مَسَّنِيَ الضُّرُّ وَأَنتَ أَرْحَمُ الرَّاحِمِينَ",
            "duaTransliteration": "Rabbi inni massaniya al-durru wa anta arhamu al-raheemeen",
            "duaTranslation": "My Lord, indeed I have been touched with hardship, and You are the Most Merciful of the merciful.",
            "duaCitation": "Quran 21:83"
        },
        {
            "duaTitle": "Dua for Success",
            "duaArabic": "رَبِّ إِنِّي لِمَا أَنزَلْتَ إِلَيَّ مِنْ خَيْرٍ فَقِيرٌ",
            "duaTransliteration": "Rabbi inni lima anzalta ilayya min khayrin faqeer",
            "duaTranslation": "My Lord, indeed I am, for whatever good You would send down to me, in need.",
            "duaCitation": "Quran 28:24"
        },
        {
            "duaTitle": "Dua for Confidence in Faith",
            "duaArabic": "رَبَّنَا لَا تَجْعَلْنَا فِتْنَةً لِّلَّذِينَ كَفَرُوا وَاغْفِرْ لَنَا رَبَّنَا إِنَّكَ أَنتَ الْعَزِيزُ الْحَكِيمُ",
            "duaTransliteration": "Rabbana la taj'alna fitnatan lilladhina kafaru waighfir lana rabbana innaka anta al-azeezu al-hakeem",
            "duaTranslation": "Our Lord, make us not [objects of] torment for the disbelievers and forgive us, our Lord. Indeed, it is You who is the Exalted in Might, the Wise.",
            "duaCitation": "Quran 60:5"
        },
        {
            "duaTitle": "Dua for Contentment",
            "duaArabic": "رَبَّنَا أَفْرِغْ عَلَيْنَا صَبْرًا وَتَوَفَّنَا مُسْلِمِينَ",
            "duaTransliteration": "Rabbana afrigh 'alayna sabran wa tawaffana muslimin",
            "duaTranslation": "Our Lord, pour upon us patience and let us die as Muslims [in submission to You].",
            "duaCitation": "Quran 7:126"
        },
        {
            "duaTitle": "Dua for Safety and Security",
            "duaArabic": "رَبَّنَا لَا تَجْعَلْنَا فِتْنَةً لِّلْقَوْمِ الظَّالِمِينَ وَنَجِّنَا بِرَحْمَتِكَ مِنَ الْقَوْمِ الْكَافِرِينَ",
            "duaTransliteration": "Rabbana la taj'alna fitnatan lill-qawmi al-thalimeen wa najjina bi rahmatika min al-qawmi al-kafireen",
            "duaTranslation": "Our Lord, make us not [objects of] torment for the wrongdoing people and save us by Your mercy from the disbelieving people.",
            "duaCitation": "Quran 10:85-86"
        },
        {
            "duaTitle": "Dua for Justice",
            "duaArabic": "رَبَّنَا عَلَيْكَ تَوَكَّلْنَا وَإِلَيْكَ أَنَبْنَا وَإِلَيْكَ الْمَصِيرُ",
            "duaTransliteration": "Rabbana 'alayka tawakkalna wa ilayka anabna wa ilayka al-maseer",
            "duaTranslation": "Our Lord, upon You we have relied, and to You we have returned, and to You is the destination.",
            "duaCitation": "Quran 60:4"
        },
        {
            "duaTitle": "Dua for Relief from Anxiety",
            "duaArabic": "رَبِّ نَجِّنِي مِنَ الْقَوْمِ الظَّالِمِينَ",
            "duaTransliteration": "Rabbi najjini min al-qawmi al-thalimeen",
            "duaTranslation": "My Lord, save me from the wrongdoing people.",
            "duaCitation": "Quran 28:21"
        },
        {
            "duaTitle": "Dua for Gratitude",
            "duaArabic": "رَبِّ أَنزِلْنِي مُنزَلًا مُّبَارَكًا وَأَنتَ خَيْرُ الْمُنزِلِينَ",
            "duaTransliteration": "Rabbi anzilni munzalan mubarakan wa anta khayru al-munzileen",
            "duaTranslation": "My Lord, enable me to be grateful for Your favor which You have bestowed upon me and upon my parents, and to do righteousness of which You approve. And admit me by Your mercy into [the ranks of] Your righteous servants.",
            "duaCitation": "Quran 23:29"
        },
        {
            "duaTitle": "Dua for Mercy and Forgiveness",
            "duaArabic": "رَبَّنَا آتِنَا مِن لَّدُنكَ رَحْمَةً وَهَيِّئْ لَنَا مِنْ أَمْرِنَا رَشَدًا",
            "duaTransliteration": "Rabbana atina min ladunka rahmatan wa hayyi' lana min amrina rashada",
            "duaTranslation": "Our Lord, grant us from Yourself mercy and prepare for us from our affair right guidance.",
            "duaCitation": "Quran 18:10"
        },
        {
            "duaTitle": "Dua for Contentment",
            "duaArabic": "رَبِّ زِدْنِي عِلْمًا",
            "duaTransliteration": "Rabbi zidni ilma",
            "duaTranslation": "My Lord, increase me in knowledge.",
            "duaCitation": "Quran 20:114"
        },
        {
            "duaTitle": "Dua for Relief from Burdens",
            "duaArabic": "رَبِّ شْرَحْ لِي صَدْرِي وَيَسِّرْ لِي أَمْرِي وَاحْلُلْ عُقْدَةً مِّن لِّسَانِي يَفْقَهُوا قَوْلِي",
            "duaTransliteration": "Rabbi shrah li sadri wa yassir li amri wahlul 'uqdatan min lisanee yafqahu qawli",
            "duaTranslation": "My Lord, expand for me my chest [with assurance], and ease for me my task, and untie the knot from my tongue that they may understand my speech.",
            "duaCitation": "Quran 20:25-28"
        },
        {
            "duaTitle": "Dua for Peace and Security",
            "duaArabic": "رَبَّنَا لَا تَجْعَلْنَا فِتْنَةً لِّلْقَوْمِ الظَّالِمِينَ وَنَجِّنَا بِرَحْمَتِكَ مِنَ الْقَوْمِ الْكَافِرِينَ",
            "duaTransliteration": "Rabbana la taj'alna fitnatan lill-qawmi al-thalimeen wa najjina bi rahmatika min al-qawmi al-kafireen",
            "duaTranslation": "Our Lord, make us not [objects of] torment for the wrongdoing people and save us by Your mercy from the disbelieving people.",
            "duaCitation": "Quran 10:85-86"
        },
        {
            "duaTitle": "Dua for Purity",
            "duaArabic": "رَبِّ طَهِّرْ قَلْبِي",
            "duaTransliteration": "Rabbi tahir qalbi",
            "duaTranslation": "My Lord, purify my heart.",
            "duaCitation": "Quran 26:88"
        },
        {
            "duaTitle": "Dua for Protection from Hellfire",
            "duaArabic": "رَبِّ نَجِّنِي مِنَ النَّارِ",
            "duaTransliteration": "Rabbi najjini min al-nar",
            "duaTranslation": "My Lord, save me from the Hellfire.",
            "duaCitation": "Quran 37:99"
        },
        {
            "duaTitle": "Dua for Gratitude",
            "duaArabic": "رَبِّ أَنزِلْنِي مُنزَلًا مُّبَارَكًا وَأَنتَ خَيْرُ الْمُنزِلِينَ",
            "duaTransliteration": "Rabbi anzilni munzalan mubarakan wa anta khayru al-munzileen",
            "duaTranslation": "My Lord, enable me to be grateful for Your favor which You have bestowed upon me and upon my parents, and to do righteousness of which You approve. And admit me by Your mercy into [the ranks of] Your righteous servants.",
            "duaCitation": "Quran 23:29"
        },
        {
            "duaTitle": "Dua for Goodness",
            "duaArabic": "رَبِّ هَبْ لِي حُكْمًا وَأَلْحِقْنِي بِالصَّالِحِينَ",
            "duaTransliteration": "Rabbi hab li hukman wa alhiqni bissaliheen",
            "duaTranslation": "My Lord, grant me authority and join me with the righteous.",
            "duaCitation": "Quran 26:83"
        },
        {
            "duaTitle": "Dua for Seeking Refuge",
            "duaArabic": "رَبِّ أَعُوذُ بِكَ مِنْ هَمَزَاتِ الشَّيَاطِينِ",
            "duaTransliteration": "Rabbi a'udhu bika min hamazat al-shayateen",
            "duaTranslation": "My Lord, I seek refuge in You from the incitements of the devils.",
            "duaCitation": "Quran 23:97"
        },
        {
            "duaTitle": "Dua for Strength",
            "duaArabic": "رَبِّ أَنزِلْنِي مُنزَلًا مُّبَارَكًا وَأَنتَ خَيْرُ الْمُنزِلِينَ",
            "duaTransliteration": "Rabbi anzilni munzalan mubarakan wa anta khayru al-munzileen",
            "duaTranslation": "My Lord, enable me to be grateful for Your favor which You have bestowed upon me and upon my parents, and to do righteousness of which You approve. And admit me by Your mercy into [the ranks of] Your righteous servants.",
            "duaCitation": "Quran 23:29"
        },
        {
            "duaTitle": "Dua for Knowledge",
            "duaArabic": "رَبِّ زِدْنِي عِلْمًا",
            "duaTransliteration": "Rabbi zidni ilma",
            "duaTranslation": "My Lord, increase me in knowledge.",
            "duaCitation": "Quran 20:114"
        }
    
    
    // Add more dua objects as needed
];

export default duas;
