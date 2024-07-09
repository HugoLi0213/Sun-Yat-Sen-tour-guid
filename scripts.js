function playAudio(audioId, mapId) {
    var audio = document.getElementById(audioId);
    var audios = document.querySelectorAll('audio');
    
    audios.forEach(function(a) {
        if (a !== audio) {
            a.pause();
            a.currentTime = 0;
        }
    });
    
    if (audio.paused) {
        audio.play();
    } else {
        audio.pause();
    }

    updateMap(mapId);
}

function showText(track) {
    console.log("Showing text for track:", track);
    var textContent = document.getElementById('textContent');
    var language = document.documentElement.lang;

    if (language === 'en') {
        switch(track) {
            case 1:
                textContent.textContent = `Hello there, let's take a stroll down memory lane and uncover the remarkable story of Dr. Sun Yat-sen - a man they called the "Father of the Nation" and one of the founders of the Republic of China. 

You see, we're standing right in the heart of Hong Kong, the very place where this incredible figure spent his formative years. Dr. Sun arrived on these shores and dove headfirst into both secondary and tertiary education.  

That's why we're here today - to walk in the footsteps of this legendary figure and uncover the rich history hidden within these streets. 

This place – the University of Hong Kong – is pretty special. It's the oldest institute of higher learning in the whole region, founded way back in 1911. And get this – it's got a really interesting connection to a famous historical figure. 

From 1887 to 1892, the legendary Dr. Sun Yat-sen, the "Father of the Nation," was a student right here. He was enrolled at the College of Medicine for Chinese, Hongkong. And then, in 1912, that college was incorporated into the University of Hong Kong as the Faculty of Medicine.   

But the story doesn't end there. In 1923, Dr. Sun came back to the university, this time as an honored guest. And he gave a speech in the Great Hall, now called the Loke Yew Hall. *pauses* And in that speech, he said that "Hong Kong and the University of Hong Kong are my intellectual birthplace."  

Looks around, it's just fascinating to think about all the history and all the brilliant minds that have passed through these halls. You may take a look around before we move to the next stop.`;
                break;
            case 2:
                textContent.textContent = `Welcome back, Let's trace his footsteps through this city. The Diocesan Home and Orphanage – an important part of Dr. Sun Yat-sen's journey here in Hong Kong.  

You know, after spending four years studying in Hawaii, Dr. Sun came to Hong Kong in late 1883 and initially attended the Diocesan Home and Orphanage, which was founded by the Anglican Church. *pauses* It was quite an institution back then – a home and orphanage that provided education and support to young people.  

It was likely a formative experience for him, shaping his worldview and setting him on the path that would lead him to become the revered "Father of the Nation."  

And then, after a stint at the Diocesan Home, he went on to attend The Government Central School here in Hong Kong, further expanding his horizons.   

**pause** Standing here. It's a reminder of the rich tapestry of history that makes up this city, and the important role it played in shaping the life and aspirations of such a pivotal figure.`;
                break;
            case 3:
                textContent.textContent = `And we are back again, Join us on a journey back in time to discover the historic sites that were integral to the founding of the Tongmenghui (Chinese Revolutionary Alliance). 

In 1905, renowned revolutionary Dr. Sun Yat-sen established the Tongmenghui in Tokyo, Japan, and later that year, its Hong Kong branch was founded. The local organization set up a network of reception centers across the city, providing safe havens for revolutionaries. 

Follow in the footsteps of these historical figures as we visit the sites that witnessed this pivotal moment in history. Stroll along Caine Road, Po Hing Fong, Morrison Hill Road, Lan Kwai Fong, and Queen's Road to uncover the hidden stories that shaped Hong Kong's role in China's fight for independence.`;
                break;
            case 4:
                textContent.textContent = `Let's get to it again!

In 1883, a young Dr. Sun arrived in this vibrant city and began his path towards greatness. From his initial enrollment at the Diocesan Home and Orphanage, operated by the Anglican Church, to his residence at the Preaching House of the American Congregational Church (now the China Congregational Church) on 2 Bridges Street, we will uncover the tapestry of cultures and faiths that influenced the young Dr. Sun. 

It was here, in the Preaching House, that he was baptized, adopting the Christian name "Yat-sen" (or "Rixin" in Mandarin). Even as he transferred to The Government Central School, Dr. Sun continued to call this place home, laying the groundwork for his future revolutionary endeavors in the city. 

We look forward to guiding you once more on this captivating expedition, as we uncover the formative experiences that shaped the revolutionary who would go on to leave an indelible mark on history. Let us commence our journey and delve deeper into the early life of this remarkable figure.`;
                break;
            default:
                textContent.textContent = "No text available for this track.";
        }
    } else {
        switch(track) {
            case 1:
                textContent.textContent = `讓我們一起漫步在記憶的長廊中，揭開孫中山先生——這位被稱為「國父」的中華民國創始人之一的非凡故事。

我們現在站在香港的中心，這裡正是這位傑出人物度過他成長歲月的地方。孫中山先生來到這片土地，全身心投入到中學和大學教育中。

這就是為什麼我們今天在這裡——追隨這位傳奇人物的足跡，揭示隱藏在這些街道中的豐富歷史。

這個地方——香港大學——非常特別。它是整個地區最古老的高等學府，早在1911年就成立了。而且，它與一位著名的歷史人物有著非常有趣的聯繫。

從1887年到1892年，這位被稱為「國父」的孫中山先生就是在這裡就讀的。他當時就讀於香港華人西醫書院。後來在1912年，這所學院被併入香港大學，成為醫學院。

故事並沒有到此結束。1923年，孫中山先生再次回到大學，這次是作為貴賓。他在大禮堂（現在叫陸佑堂）發表了演講。*停頓* 在那次演講中，他說：「香港和香港大學是我的知識起源地。」

環顧四周，想到所有的歷史和所有在這些大廳裡走過的傑出人才，真是令人著迷。在我們移步下一站之前，你可以四處看看。`;
                break;
            case 2:
                textContent.textContent = `歡迎回來，讓我們追隨他在這個城市的足跡。教區院舍和孤兒院——孫中山先生在香港旅程中的重要一站。

你知道嗎，在夏威夷學習了四年之後，孫中山先生於1883年底來到香港，最初就讀於由聖公會創立的教區院舍和孤兒院。*停頓* 那時候，這是一個相當重要的機構——一個為年輕人提供教育和支持的家園和孤兒院。

對他來說，這可能是一次塑造性的經歷，形成了他的世界觀，並為他日後成為備受尊崇的「國父」鋪平了道路。

之後，在教區院舍待了一段時間後，他又進入了香港的中央書院（現皇仁書院），進一步擴展了他的視野。

**停頓** 站在這裡，它提醒我們這座城市豐富的歷史織錦，以及它在塑造這位關鍵人物的生活和抱負中所扮演的重要角色。`;
                break;
            case 3:
                textContent.textContent = `我們又回來了，讓我們一起重返過去，探索那些對同盟會（中國革命同盟會）的成立至關重要的歷史遺址。

1905年，著名革命家孫中山先生在日本東京成立了同盟會，同年晚些時候，其香港分會也隨之成立。這個本地組織在全市設立了一個接待中心網絡，為革命者提供安全庇護所。

讓我們跟隨這些歷史人物的腳步，參觀見證了這一歷史轉折點的地方。漫步於堅道、普慶坊、摩利臣山道、蘭桂坊和皇后大道，揭開那些塑造了香港在中國獨立鬥爭中角色的隱藏故事。`;
                break;
            case 4:
                textContent.textContent = `讓我們再次出發！

1883年，年輕的孫中山先生來到這個充滿活力的城市，開始了他邁向偉大的道路。從他最初在聖公會經營的教區院舍和孤兒院入學，到他在美國公理會傳道所（現為中華基督教會）的住所，我們將揭示影響年輕孫中山的文化和信仰的多樣性。

就是在這個傳道所，他受洗並取了基督教名字「逸仙」（或普通話中的「日新」）。即使後來轉入中央書院（現皇仁書院），孫中山先生仍然把這個地方當作家。在這裡，他為日後在這座城市的革命事業奠定了基礎。

我們期待再次帶領你踏上這段引人入勝的探索之旅，揭示那些塑造了這位革命家的早期經歷，他後來在歷史上留下了不可磨滅的印記。讓我們開始我們的旅程，深入探索這位非凡人物的早年生活。`;
                break;
            default:
                textContent.textContent = "此音軌沒有可用的文本。";
        }
    }
}

function updateMap(mapId) {
    var map = document.getElementById("map");
    switch(mapId) {
      case 'map1':
        map.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3691.9178490290213!2d114.13410861529721!3d22.283921285327654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3403ff1d5b7d2671%3A0xf4cc5bf8e61c7ed1!2sThe%20University%20of%20Hong%20Kong!5e0!3m2!1sen!2shk!4v1621443681049!5m2!1sen!2shk&markers=color:red%7Clabel:HKU%7C22.283921,114.134109";
        break;
      case 'map2':
        map.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3688.8964120199723!2d114.14173001529998!3d22.285376285326205!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x340400e5d0e87b19%3A0x8db3e7b3657c4628!2sDiocesan%20Home%20and%20Orphanage!5e0!3m2!1sen!2shk!4v1621443681046!5m2!1sen!2shk&markers=color:red%7Clabel:D%7C22.285376,114.141730";
        break;
      case 'map3':
        map.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3688.9364120199723!2d114.14589701529998!3d22.287487285324304!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x340400e9d0d9b1f9%3A0x9db3e9b3658d4628!2sCaine%20Road!5e0!3m2!1sen!2shk!4v1621443681047!5m2!1sen!2shk";
        break;
      case 'map4':
        map.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3688.9764120199723!2d114.15006401529998!3d22.289598285322403!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x340400f0d0e97b19%3A0xadb3e8b3659d4628!2sBridges%20Street!5e0!3m2!1sen!2shk!4v1621443681048!5m2!1sen!2shk";
        break;
      default:
        map.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3688.8564120199723!2d114.13856231529998!3d22.283265285328106!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x340400ddf0d63d21%3A0x515ede18c18b52e6!2sSun%20Yat%20Sen%20Memorial%20Park!5e0!3m2!1sen!2shk!4v1621443681045!5m2!1sen!2shk";
    }
}

function switchLanguage(lang) {
    if (lang === 'zh') {
        window.location.href = 'index_zh.html';
    } else {
        window.location.href = 'index.html';
    }
}