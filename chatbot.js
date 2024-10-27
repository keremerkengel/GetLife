// Fitness chatbot için basit yanıtlar
const responses = {
  "merhaba": [
    "Merhaba! Nasıl yardımcı olabilirim?",
    "Selam! Bugün ne yapmak istiyorsun?",
    "Hey! Fitness hedefin nedir?"
  ],
  "antrenman": [
    "Hangi bölgeyi çalışmak istiyorsun? Bacak, kol, karın?",
    "Evde mi spor salonunda mı çalışacaksın?",
    "Kardio mu ağırlık mı tercih edersin?"
  ],
  "beslenme": [
    "Kilo vermek mi, almak mı istiyorsun?",
    "Günde kaç öğün yiyorsun?",
    "Herhangi bir besin alerjin var mı?"
  ],
  "kilo verme": [
    "Kalori açığı oluştur, protein al, lifli gıdalar ye.",
    "Düzenli kardio yap, su iç, şekerden uzak dur.",
    "Uyku düzenine dikkat et, stres yönetimi önemli."
  ],
  "kas kazanma": [
    "Protein alımını artır, ağırlık antrenmanı yap.",
    "Kalori fazlası oluştur, büyük kas gruplarına odaklan.",
    "Dinlenmeye önem ver, progressif overload uygula."
  ],
  "kardio": [
    "Koşu, yüzme veya bisiklet dene.",
    "HIIT antrenmanları yağ yakmada etkili.",
    "Haftada en az 150 dakika orta yoğunlukta kardio yap."
  ],
  "ağırlık": [
    "Squat, deadlift, bench press temel hareketlerdir.",
    "Haftada 3-4 kez ağırlık çalış.",
    "Ağırlığı yavaş yavaş artır, form önemli."
  ],
  "esneklik": [
    "Yoga veya pilates dene.",
    "Her antrenman sonrası 10 dakika esne.",
    "Dinamik ve statik esneme yapabilirsin."
  ],
  "motivasyon": [
    "Küçük hedefler belirle, başarıları kutla.",
    "Antrenman arkadaşı bul veya grup derslerine katıl.",
    "İlerlemeyi takip et, fotoğraf çek, ölçüm yap."
  ],
  "sakatlık": [
    "Doktora görün, zorlamadan dinlen.",
    "Buz uygula, gerekirse fizyoterapiste git.",
    "İyileşene kadar alternatif egzersizler yap."
  ],
  "diyet": [
    "Dengeli beslen, her öğünde protein al.",
    "Sebze ve meyve tüketimini artır.",
    "Porsiyon kontrolü yap, yavaş ye."
  ],
  "supplement": [
    "Protein tozu kas gelişimini destekler.",
    "Kreatin performansı artırabilir.",
    "Omega-3 genel sağlık için faydalı."
  ],
  "uyku": [
    "Günde 7-9 saat uyumaya çalış.",
    "Yatmadan önce ekranlardan uzak dur.",
    "Düzenli uyku saatleri belirle."
  ],
  "stres": [
    "Meditasyon veya derin nefes egzersizleri dene.",
    "Düzenli egzersiz stres azaltır.",
    "Hobiler edin, sosyal aktivitelere katıl."
  ],
  "hedef belirleme": [
    "SMART hedefler belirle: Spesifik, Ölçülebilir, Ulaşılabilir, İlgili, Zamana bağlı.",
    "Kısa ve uzun vadeli hedefler koy.",
    "Hedeflerini yazıya dök ve görünür bir yere as."
  ],
  "su": [
    "Günde en az 8 bardak su iç.",
    "Egzersiz sırasında su tüketimini artır.",
    "Susuzluk hissetmeden önce su iç."
  ],
  "yağ yakma": [
    "Yüksek yoğunluklu interval antrenmanları etkili.",
    "Yeşil çay metabolizmayı hızlandırabilir.",
    "Kas kütlesi artışı yağ yakımını destekler."
  ],
  "vücut geliştirme": [
    "Büyük kas gruplarına odaklan.",
    "Beslenme ve dinlenme kritik öneme sahip.",
    "Doğru form ve teknik üzerinde çalış."
  ],
  "koşu": [
    "Yavaş başla, kademeli olarak mesafeyi artır.",
    "İyi bir koşu ayakkabısı önemli.",
    "Interval koşuları dayanıklılığı artırır."
  ],
  "yoga": [
    "Esneklik ve denge için harika.",
    "Stres azaltmada etkili.",
    "Farklı yoga stillerini dene."
  ],
  "pilates": [
    "Core gücünü artırır.",
    "Duruşu iyileştirir.",
    "Düşük etkili, eklem dostu bir egzersiz."
  ],
  "crossfit": [
    "Yüksek yoğunluklu, çeşitli hareketler içerir.",
    "Topluluk duygusu motivasyon sağlar.",
    "Doğru tekniğe odaklan, sakatlanma riskini azalt."
  ],
  "yemek önerisi": [
    "Izgara tavuk, tatlı patates, brokoli dene.",
    "Yulaf ezmesi, muz ve badem sütü güzel bir kahvaltı.",
    "Somon, kinoa ve ıspanak besin değeri yüksek bir öğün."
  ],
  "cheat meal": [
    "Haftada bir cheat meal kabul edilebilir.",
    "Porsiyon kontrolüne dikkat et.",
    "Sonrasında normal rutinine dön."
  ],
  "default": [
    "Bu konuda kesin bir bilgim yok. Başka nasıl yardımcı olabilirim?",
  ],
  
  
};
const goalOrientedResponses = {
  "kilo vermek istiyorum": [
    "Harika bir hedef! Kilo vermek için ilk adımlar şunlar olabilir: 1) Günlük kalori alımını azalt, 2) Haftada en az 150 dakika orta yoğunlukta egzersiz yap, 3) Bol su iç. Şu an kilonuz ve boy uzunluğunuz nedir?",
    "Kilo verme yolculuğuna hoş geldin! İşte başlangıç için ipuçları: Porsiyon kontrolü yap, şekerli içeceklerden kaçın ve düzenli kardio egzersizleri yap. Şimdiye kadar nasıl bir diyet uyguladın?",
    "Kilo vermek için harekete geçmen süper! Öncelikle beslenme alışkanlıklarını gözden geçirelim. Günde kaç öğün yiyorsun ve ara öğünlerin neler?"
  ],
  "kas kütlesi artırmak istiyorum": [
    "Kas kütleni artırmak için harika bir karar! İlk adımlar: 1) Protein alımını artır, 2) Ağırlık antrenmanlarına odaklan, 3) Yeterli dinlenmeye önem ver. Şu anki antrenman rutinin nasıl?",
    "Kas yapma hedefin için tebrikler! Başlamak için: Büyük kas gruplarına odaklan, progressif overload uygula ve beslenmeye dikkat et. Haftada kaç gün antrenman yapabilirsin?",
    "Kas kütlesi artırmak için motivasyonun süper! Öncelikle protein alımını ve kalori miktarını artırmalısın. Günlük protein alımın ne kadar? Vücut ağırlığının her kilosu için 1.6-2.2 gram protein hedeflemeliyiz."
  ],
  "daha fit olmak istiyorum": [
    "Daha fit bir yaşam için harika bir karar! Başlangıç için: 1) Düzenli kardiyo ve kuvvet antrenmanları yap, 2) Dengeli beslen, 3) Yeterli su iç. Şu anki fiziksel aktivite seviyeni nasıl tanımlarsın?",
    "Fit olma yolculuğuna hoş geldin! İşte başlangıç ipuçları: Günlük adım sayını artır, haftada 3-4 kez egzersiz yap ve işlenmiş gıdalardan kaçın. Hangi spor dallarından hoşlanıyorsun?",
    "Daha fit olmak için motivasyonun harika! Öncelikle günlük rutinine küçük değişiklikler ekleyelim. Mesela merdiven kullanmak veya kısa yürüyüşler yapmak. İş/okul hayatın nasıl, oturarak mı çok vakit geçiriyorsun?"
  ],
  "esnekliğimi artırmak istiyorum": [
    "Esnekliği artırmak harika bir hedef! Başlangıç için: 1) Her gün 10-15 dakika esneme egzersizleri yap, 2) Yoga veya pilates dene, 3) Dinamik ve statik esneme kombinasyonları kullan. Daha önce yoga veya pilates denedin mi?",
    "Esneklik çalışmak için motivasyonun süper! İlk adımlar: Günlük esneme rutini oluştur, büyük kas gruplarına odaklan ve nefes tekniklerine dikkat et. Hangi bölgede esnekliğini artırmak istiyorsun?",
    "Esnekliği artırmak için harekete geçmen harika! Başlamak için: Her antrenman öncesi ve sonrası esne, yoga veya pilates sınıflarına katıl ve su tüketimini artır. Günlük rutininde esnemeye ne kadar zaman ayırabilirsin?"
  ]
};

// Mevcut responses objesine yeni yanıtları ekle
Object.assign(responses, goalOrientedResponses);
const additionalResponses = {
  "esneme": [
    "Her antrenman öncesi ve sonrası esne.",
    "Statik esneme için her pozisyonu 15-30 saniye tut.",
    "Dinamik esneme hareketleri ısınma için idealdir."
  ],
  "öğün_planlama": [
    "Günde 3 ana öğün, 2 ara öğün idealdir.",
    "Her öğünde protein, karbonhidrat ve sağlıklı yağ dengesi kur.",
    "Öğün hazırlığı yaparak sağlıklı beslenmeyi kolaylaştır."
  ],
  "kalori_hesaplama": [
    "Bazal metabolizma hızını hesapla, aktivite seviyene göre ayarla.",
    "Kilo vermek için günlük 500 kalori açığı oluştur.",
    "Kalori saymak yerine porsiyon kontrolüne odaklanabilirsin."
  ],
  "makrolar": [
    "Makrolar: protein, karbonhidrat ve yağdır.",
    "Genel oran: %30 protein, %40 karbonhidrat, %30 yağ olabilir.",
    "Hedefine göre makro oranlarını ayarla."
  ],
  "hipertrofi": [
    "Kas hipertrofisi için 8-12 tekrar aralığında çalış.",
    "Haftada her kas grubunu en az 2 kez çalış.",
    "Yeterli protein al ve negatif tekrarlara önem ver."
  ],
  "functional_training": [
    "Günlük hayat hareketlerini taklit eden egzersizler yap.",
    "Denge ve stabilite üzerine odaklan.",
    "Çok eklemli hareketleri tercih et."
  ],
  "esneklik": [
    "Düzenli esneme rutini ekle.",
    "Yoga veya pilates derslerine katıl.",
    "Dinamik ve statik esneme kombinasyonu kullan."
  ],
  "nabız": [
    "Maksimum nabız: 220 - yaşın.",
    "Orta yoğunluk: Maksimum nabzın %50-70'i.",
    "Yüksek yoğunluk: Maksimum nabzın %70-85'i."
  ],
  "plato": [
    "Egzersiz rutinini değiştir.",
    "Beslenme planını gözden geçir.",
    "Dinlenme ve uyku düzenini kontrol et."
  ],
  "egzersiz_çeşitleri": [
    "Kardiyo, kuvvet, esneklik ve denge çalışmaları yap.",
    "Farklı spor dallarını dene: yüzme, bisiklet, dans.",
    "Grup dersleri motivasyonunu artırabilir."
  ],
  "bmi": [
    "BMI = Kilo (kg) / Boy (m)²",
    "Normal BMI aralığı: 18.5 - 24.9",
    "BMI tek başına yeterli değil, vücut kompozisyonuna bak."
  ],
  "vücut_yağ_oranı": [
    "Erkeklerde %10-20, kadınlarda %18-28 arası normal.",
    "Düşük vücut yağı her zaman daha sağlıklı demek değil.",
    "Ölçüm için kaliper veya biyoelektrik empedans kullan."
  ],
  "recovery": [
    "Aktif dinlenme günleri ekle.",
    "Yeterli uyku al, en az 7-8 saat.",
    "Masaj veya foam roller kullan."
  ],
  "postur": [
    "Masa başında düzgün otur, sırtını destekle.",
    "Core egzersizleri yap, duruşunu güçlendir.",
    "Düzenli esneme ile kas dengesizliklerini gider."
  ],
  "sıvı_tüketimi": [
    "Günde en az 8 bardak su iç.",
    "Egzersiz sırasında her 15-20 dakikada bir su iç.",
    "İdrar rengin açık sarı olmalı."
  ],
  "egzersiz_sıklığı": [
    "Haftada en az 150 dakika orta yoğunlukta aktivite yap.",
    "3-4 gün kuvvet antrenmanı, 2-3 gün kardiyo ideal.",
    "Her gün en az 30 dakika hareket et."
  ],
  "esneme_zamanı": [
    "Antrenman öncesi dinamik esneme yap.",
    "Antrenman sonrası statik esneme uygula.",
    "Sabah esneme rutini gün boyu esnekliği artırır."
  ],
  "mindfulness": [
    "Meditasyon veya nefes egzersizleri dene.",
    "Yürüyüş yaparken çevrene odaklan.",
    "Yemek yerken mindful eating uygula."
  ]
};
const greetingResponses = {
  "merhaba": [
    "Merhaba! Nasıl yardımcı olabilirim?",
    "Selam! Bugün nasıl hissediyorsun?",
    "Merhaba! Fitness yolculuğunda sana nasıl destek olabilirim?"
  ],
  "selam": [
    "Selam! Nasıl gidiyor?",
    "Hey! Bugün ne yapmak istiyorsun?",
    "Selam selam! Fitness hedefin nedir?"
  ],
  "nasılsın": [
    "Ben bir AI asistanım, her zaman iyiyim! Sen nasılsın?",
    "Harikayım, umarım sen de iyisindir. Nasıl yardımcı olabilirim?",
    "Formundayım! Senin için ne yapabilirim?"
  ],
  "günaydın": [
    "Günaydın! Güne enerjik başlamaya ne dersin?",
    "Günaydın! Bugün için fitness planın nedir?",
    "Harika bir güne merhaba! Kahvaltıdan sonra hafif bir egzersiz yapmaya ne dersin?"
  ],
  "iyi akşamlar": [
    "İyi akşamlar! Günü nasıl geçirdin?",
    "İyi akşamlar! Bugünkü hedeflerine ulaşabildin mi?",
    "Akşam antrenmanı için hazır mısın? İyi akşamlar!"
  ],
  "iyi geceler": [
    "İyi geceler! Yarın için bir fitness planın var mı?",
    "İyi uykular! Unutma, iyi bir uyku da fitness'ın bir parçası.",
    "Tatlı rüyalar! Yarın yeni bir güne enerjiyle başlayacaksın."
  ],
  "teşekkürler": [
    "Rica ederim! Başka bir konuda yardıma ihtiyacın var mı?",
    "Ne demek, her zaman buradayım!",
    "Sana yardımcı olabildiğime sevindim. Başka sorun var mı?"
  ],
  "görüşürüz": [
    "Görüşürüz! Sağlıklı kal!",
    "Tekrar görüşmek üzere! Hedeflerine odaklanmayı unutma.",
    "Hoşça kal! Bir sonraki konuşmamızda ilerlemeni duymak isterim."
  ]
};const informalResponses = {
  "naber": [
    "Süper! Senden naber? Biraz egzersiz yapmaya ne dersin?",
    "Bomba gibiyim! Sen nasılsın, biraz hareket etmeye var mısın?",
    "İyiyim, teşekkürler! Senin için ne yapabilirim bugün?"
  ],
  "napıyorsun": [
    "Seninle sohbet ediyorum! Sen ne yapıyorsun, antrenmana hazır mısın?",
    "Fitness ipuçları düşünüyorum. Sen ne yapıyorsun?",
    "Senin sorularını bekliyorum! Bugün hangi konuda yardıma ihtiyacın var?"
  ],
  "hey": [
    "Hey! Ne var ne yok?",
    "Selam! Nasıl yardımcı olabilirim?",
    "Hey hey! Bugün için bir fitness planın var mı?"
  ],
  "slm": [
    "Slm! Nasıl gidiyor?",
    "Selam! Bugün kendini nasıl hissediyorsun?",
    "Merhaba! Fitness hedeflerine ulaşmak için ne yapabiliriz?"
  ],
  "sa": [
    "As! Hoş geldin. Nasıl yardımcı olabilirim?",
    "Aleykümselam! Bugün ne yapmak istiyorsun?",
    "Merhaba! Spor yapmaya hazır mısın?"
  ]
};

// Mevcut responses objesine yeni yanıtları ekle
Object.assign(responses, informalResponses);

// Mevcut responses objesine yeni yanıtları ekle
Object.assign(responses, greetingResponses);

// Mevcut responses objesine yeni yanıtları ekle
Object.assign(responses, additionalResponses);

function chatbotResponse(input) {
  input = input.toLowerCase();
  for (let key in responses) {
    if (input.includes(key)) {
      return responses[key];
    }
  }
  return responses["default"];
}

// HTML'de bir form ve chatbot yanıtları için bir div olduğunu varsayalım
document.querySelector('form').addEventListener('submit', function(e) {
  e.preventDefault();
  const userInput = document.querySelector('#user-input').value;
  const response = chatbotResponse(userInput);
  
  const chatOutput = document.querySelector('#chat-output');
  chatOutput.innerHTML += `<p><strong>Siz:</strong> ${userInput}</p>`;
  chatOutput.innerHTML += `<p><strong>Fitness Asistanı:</strong> ${response}</p>`;
  
  document.querySelector('#user-input').value = '';
});