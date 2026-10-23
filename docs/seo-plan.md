# VoyageLog SEO Zafer Planı

_Hazırlanma: 22 Ekim 2026. Site: getvoyagelog.app (Vite + React, GitHub Pages, EN/DE/TR)._

## 0. Tek cümlelik strateji

Genel destinasyon rehberleri ("Prag'da gezilecek yerler") yazmıyoruz; o SERP'lerde Lonely Planet, TripAdvisor ve yüz binlerce blog var, sıfır otoriteli bir domain oraya giremez. Bunun yerine **ürünün bizzat cevap olduğu** niyetleri hedefliyoruz: seyahat günlüğü tutma, gezileri hatırlama/belgeleme, rakip alternatifleri, gizlilik/offline, ülke sayacı, yıl özeti ve uygulamanın "şehir listeleri" özelliğine bağlanan mevsimlik kontrol listeleri. Her makale indirmeye giden bir yol.

Arama ortamı kontrolü (22 Ekim 2026):
- **EN** "best travel journal app": SERP'te dev siteler yok, orta boy bloglar (maketecheasier, frostandsun, travelchinacheaper) var. 6-12 ayda girilebilir.
- **EN** "Polarsteps alternative": Folio, Vakantio, TravelFeed gibi rakiplerin her biri kendi "Polarsteps alternative" sayfasını yazmış. Kanıtlanmış taktik, biz de yazıyoruz.
- **DE** "Reisetagebuch App": futurezone, promobil, schieb.de gibi orta boy siteler. Girilebilir; Almanya pazarı ödeme eğilimi yüksek.
- **TR** "seyahat günlüğü uygulaması": SERP neredeyse boş (Tamindir ve App Store sayfaları). **En hızlı kazanım burada.** İlk sıralamalar 4-8 haftada gelebilir.

## 1. Mevcut durum: teknik SEO

Olan ve iyi olan:
- canonical, hreflang (en/de/tr/x-default), sitemap.xml, robots.txt, OG/Twitter kartları
- SoftwareApplication JSON-LD
- Dil başına ön-render edilmiş `<head>` ve `#root` içinde fallback link bloğu (postbuild)
- Özel domain, HTTPS, hızlı statik hosting

Düzeltilecekler (makalelerden önce, 1 gün):
1. **`/` ve `/en/` aynı içerik, farklı canonical.** İki İngilizce ana sayfa birbirine rakip. Çözüm: `/en/` sayfasının canonical'ını `/` yap (ya da tam tersi) ve hreflang `en` ile canonical aynı URL'yi göstersin.
2. **`lastmod` her build'de bugünün tarihi.** Google bunu "yalan söyleyen lastmod" olarak işaretleyip görmezden gelir. İçerik değişmediyse sabit tarih yaz (git log tarihinden türet).
3. **FAQ bölümü var, FAQPage şeması yok.** Ana sayfadaki 8 soruyu FAQPage JSON-LD'ye ekle. Zengin sonuç şansı.
4. **Ana sayfa gövdesi tamamen React ile render ediliyor.** Googlebot JS işler ama ikinci dalgada ve gecikmeli. Makaleler asla böyle olmayacak: saf statik HTML.
5. **Google Search Console + Bing Webmaster Tools** doğrulaması ve sitemap gönderimi (henüz yapılmadıysa). Ölçüm olmadan plan yok.
6. **og.png** her makale için ayrı 1200x630 görsel. Sosyal paylaşımlarda CTR'yi ikiye katlar.
7. **BreadcrumbList** şeması blog sayfalarına.
8. **SoftwareApplication'a `aggregateRating`** yalnızca mağazalarda gerçek puan oluşunca ve gerçek değerle.

## 2. Blog altyapısı (statik, React'siz)

Mevcut postbuild mantığına uygun, 150-250 satırlık bir üretici:

```
content/blog/en/best-travel-journal-apps.md
content/blog/de/beste-reisetagebuch-apps.md
content/blog/tr/en-iyi-seyahat-gunlugu-uygulamalari.md
```

Frontmatter:
```yaml
title: "Best travel journal apps in 2026"
description: "..."          # 150-160 karakter
date: 2026-11-03
updated: 2026-11-03
lang: en
key: best-apps               # çeviriler arasında hreflang bağı
cover: /assets/blog/best-apps.png
faq:
  - q: "..."
    a: "..."
```

Üretilen çıktı:
- `dist/{lang}/blog/{slug}/index.html` (paylaşılan şablon, mevcut CSS, nav, store rozetleri, CTA bloğu)
- `dist/{lang}/blog/index.html` (liste sayfası)
- Her makalede: Article + BreadcrumbList + FAQPage JSON-LD, canonical, aynı `key`'e sahip çevirilere hreflang, makaleye özel OG
- sitemap.xml'e makale URL'leri (gerçek `updated` tarihiyle), `feed.xml` (RSS)
- Bağımlılık: `marked` + `gray-matter` (ikisi de küçük)

Neden Astro'ya geçmiyoruz: 24 makale için gereksiz göç. Yıl sonunda 60+ makaleye çıkarsa Astro'yu değerlendiririz.

## 3. Anahtar kelime kümeleri ve öncelik

Öncelik = (niyet uygulamaya ne kadar yakın) × (SERP ne kadar zayıf). Hacimler Keyword Planner / GSC ile doğrulanacak; aşağıdakiler niyet bazlı.

| # | Küme | Örnek sorgular (EN / DE / TR) | Öncelik |
|---|------|-------------------------------|---------|
| 1 | Rakip alternatifi | polarsteps alternative, journi alternative, findpenguins vs polarsteps / Polarsteps Alternative / Polarsteps alternatifi | En yüksek |
| 2 | "En iyi uygulama" listeleri | best travel journal app, travel diary app, trip log app / beste Reisetagebuch App, Reisetagebuch App kostenlos / en iyi seyahat günlüğü uygulaması, gezi günlüğü uygulaması | En yüksek |
| 3 | Gizlilik / offline | private travel journal app, travel journal app no account, offline travel diary / Reisetagebuch App offline ohne Konto / internetsiz gezi günlüğü | Yüksek (farklılaştırıcımız) |
| 4 | Nasıl yapılır / ilham | how to keep a travel journal, travel journal ideas, travel journal prompts, what to write in a travel journal / Reisetagebuch schreiben, Reisetagebuch Ideen / seyahat günlüğü nasıl tutulur, gezi günlüğü örnekleri | Yüksek (hacim büyük) |
| 5 | Sayaç / harita / yıl özeti | countries visited tracker, places I've been map app, year in travel / besuchte Länder zählen App / gezdiğim ülkeler haritası uygulaması | Orta-yüksek |
| 6 | Dışa aktarma / yazdırma | print travel journal, travel journal to PDF, travel photo book from journal / Reisetagebuch drucken / gezi günlüğü PDF | Orta |
| 7 | Mevsimlik listeler (şehir listeleri özelliği) | christmas markets europe list, cherry blossom japan spots / Weihnachtsmärkte Europa Liste / Avrupa Noel pazarları | Orta, zamanlamaya bağlı |
| 8 | Google Timeline göçmenleri | google maps timeline alternative, export google timeline / Google Zeitachse Alternative | Fırsat (doğrulanacak) |

## 4. İlk 90 gün: 24 makale

Sıra, yayın haftası ve hedef sorgu. Her makale önce EN yazılır, DE ve TR **çeviri değil yerelleştirme** olur (rakip listesi, örnek şehirler ve fiyatlar o pazara göre değişir).

### Hafta 1-2: altyapı + "kale" içerikler
| Hafta | Dil | Başlık (taslak) | Hedef sorgu | Slug |
|------|-----|-----------------|-------------|------|
| 1 | - | Blog üretici, GSC, teknik düzeltmeler | - | - |
| 2 | EN | Best travel journal apps in 2026, tested on real trips | best travel journal app | /en/blog/best-travel-journal-apps/ |
| 2 | TR | En iyi seyahat günlüğü uygulamaları (2026): 7 uygulamayı gerçek gezilerde denedik | en iyi seyahat günlüğü uygulaması | /tr/blog/en-iyi-seyahat-gunlugu-uygulamalari/ |
| 2 | DE | Die besten Reisetagebuch-Apps 2026 im ehrlichen Vergleich | beste Reisetagebuch App | /de/blog/beste-reisetagebuch-apps/ |

### Hafta 3-6: rakip + gizlilik
| Hafta | Dil | Başlık | Hedef sorgu |
|------|-----|--------|-------------|
| 3 | EN | Polarsteps alternatives for people who don't want to share their trips | polarsteps alternative |
| 3 | DE | Polarsteps Alternative: 6 Apps ohne Konto und ohne Live-Tracking | Polarsteps Alternative |
| 4 | TR | Polarsteps alternatifi: hesapsız ve internetsiz çalışan gezi günlüğü uygulamaları | polarsteps alternatifi |
| 4 | EN | A travel journal that works offline and never asks for an account | offline travel journal app, private travel journal |
| 5 | EN | Journi vs Polarsteps vs VoyageLog: what each one is actually for | journi vs polarsteps |
| 5 | DE | Reisetagebuch App offline und ohne Account: worauf es ankommt | Reisetagebuch App offline |
| 6 | TR | Seyahat günlüğü nasıl tutulur? Adım adım rehber ve 40 yazma fikri | seyahat günlüğü nasıl tutulur |
| 6 | EN | How to keep a travel journal you'll actually reread | how to keep a travel journal |

### Hafta 7-9: nasıl yapılır + mevsimlik (Noel pazarları Kasım başında çıkmalı)
| Hafta | Dil | Başlık | Hedef sorgu |
|------|-----|--------|-------------|
| 7 | EN | Christmas markets in Europe 2026: a checklist of 25 cities to tick off | christmas markets europe list |
| 7 | DE | Weihnachtsmärkte in Europa 2026: Checkliste mit 25 Städten | Weihnachtsmärkte Europa Liste |
| 7 | TR | Avrupa Noel pazarları 2026: tik atılacak 25 şehir | Avrupa Noel pazarları |
| 8 | EN | 50 travel journal prompts for before, during and after a trip | travel journal prompts |
| 8 | DE | Reisetagebuch schreiben: Anleitung und 40 Ideen für unterwegs | Reisetagebuch schreiben Ideen |
| 9 | EN | Places vs moments: a simple system for travel notes | travel journal ideas |
| 9 | TR | Gezi notları için basit bir sistem: yer mi, an mı? | gezi notları nasıl tutulur |

### Hafta 10-12: sayaç, dışa aktarma, Timeline fırsatı
| Hafta | Dil | Başlık | Hedef sorgu |
|------|-----|--------|-------------|
| 10 | EN | How to count the countries you've visited (and keep the number honest) | countries visited tracker |
| 10 | TR | Gezdiğim ülkeleri nasıl sayarım? Gezilen yerler haritası uygulamaları | gezdiğim ülkeler haritası |
| 11 | EN | How to turn a travel journal into a PDF you can print | print travel journal, travel journal pdf |
| 11 | DE | Besuchte Länder zählen: so behältst du den Überblick | besuchte Länder zählen App |
| 12 | EN | Google Maps Timeline moved to your phone: how to keep your own travel history | google maps timeline alternative |
| 12 | DE | Reisetagebuch als PDF exportieren und drucken | Reisetagebuch drucken |
| 12 | TR | Gezi günlüğünü PDF yapıp yazdırma | gezi günlüğü pdf |

Toplam: EN 11, DE 7, TR 7 (hafta 1 altyapı). Noel pazarları makalesi takvime göre öne alınabilir; Kasım'ın ilk haftasından sonra çıkarsa sezonu kaçırır.

## 5. "Mükemmel makale" standardı

Her makale yayınlanmadan önce bu listeyi geçer:

**Niyet ve yapı**
- 1 birincil sorgu: başlıkta, H1'de, URL'de ve ilk 100 kelimede doğal biçimde.
- 3-5 ikincil sorgu H2'lerde.
- İlk paragraf cevabı verir; "bu yazıda ... anlatacağız" girişi yok.
- 1.200-2.500 kelime. Liste makaleleri uzun, nasıl-yapılır makaleleri orta.
- İçindekiler (H2'lerden otomatik), kısa paragraflar, karşılaştırma tablosu varsa gerçek verilerle.
- Sonda 3-5 soruluk FAQ (FAQPage şemasına gider).

**Güvenilirlik (E-E-A-T)**
- Yazar: geliştirici adıyla imza ve kısa biyografi ("VoyageLog'u yapan kişi" dürüst bir konum; gizlemiyoruz).
- Rakip bilgileri yayın günü doğrulanır: fiyat, ücretsiz sınırlar, offline davranışı. Yanlış rakip bilgisi en hızlı güven kaybı.
- Gerçek ekran görüntüleri (appscreens klasöründekiler + rakiplerin kendi mağaza görselleri, telif notuyla).
- Dürüst dezavantaj bölümü: "VoyageLog rota takibi yapmaz, bunu istiyorsan Polarsteps al." Bu cümle dönüşümü düşürmez, güveni artırır.
- Her makalede `updated` tarihi ve yılda bir gözden geçirme.

**Bağlantı ve dönüşüm**
- En az 2 iç bağlantı (diğer makaleler + ana sayfadaki ilgili bölüm).
- 1-2 dış bağlantı güvenilir kaynağa.
- Makale ortasında ve sonunda CTA bloğu: iki mağaza rozeti + tek cümle ("Hesap yok, internet gerekmez").
- Çevirileri arasında hreflang, üstte dil değiştirici.

**Yazım**
- Kısa cümleler, somut örnekler (Prag, Viyana, Roma örnekleri zaten içerikte var).
- Yapay zekâ kokusu veren kalıplar yasak: "in today's fast-paced world", "unlock", "seamless", "dünyasına adım atın", "keşfedin".
- Türkçe makaleler Türkiye'deki gerçeklikle: vize, kur, yurt dışı dolaşım maliyeti gibi yerel dertler.

## 6. Otorite ve dağıtım (makale yazmak tek başına yetmez)

Yeni domain için bağlantı yoksa sıralama yok. Her ay şunlardan en az 3'ü:
1. **AlternativeTo**: VoyageLog'u Polarsteps, Journi, FindPenguins ve Day One alternatifi olarak ekle. Bu sayfalar "X alternative" sorgularında zaten 1. sıradalar; oradan trafik ve link gelir.
2. **Mağaza sayfaları → site**: App Store ve Google Play açıklamalarında ve geliştirici web sitesi alanında getvoyagelog.app.
3. **Diğer uygulamaların siteleri** (Mamio, WorkDeutsch, WorkEnglish): footer'da "Diğer uygulamalarımız" bağlantısı. Aynı geliştirici, doğal.
4. **Product Hunt / Hacker News Show HN / Indie Hackers**: tek seferlik lansman, "offline-first, hesapsız" açısıyla.
5. **Reddit**: r/travel, r/solotravel, r/onebag, r/privacy, r/degoogle'da gerçek soruya gerçek cevap; makale linki yalnızca ilgiliyse. Spam algılanırsa domain yanar.
6. **Mevcut listelere dahil olma**: maketecheasier, frostandsun, futurezone, promobil, schieb.de yazarlarına kısa e-posta: "2026 güncellemenizde VoyageLog'u değerlendirir misiniz, test hesabı gerekmez, offline çalışır". %10 dönüş bile yeter.
7. **TR teknoloji basını**: Webrazzi, ShiftDelete, Tamindir, Donanım Haber "yerli geliştiriciden hesapsız gezi günlüğü" hikâyesi.
8. **Uygulama içinden paylaşım kartları** (trip recap, best-of PDF): kart altına küçük "getvoyagelog.app" damgası. Her paylaşım bir marka araması.

## 7. Ölçüm

Haftalık 15 dakika GSC:
- İzlenim ve ortalama pozisyon (makale bazında)
- 4-10. sıradaki sorgular → o makaleyi güçlendir (bölüm ekle, güncelle)
- 11-30. sıradaki sorgular → iç bağlantı ver

Aylık hedefler (gerçekçi, yeni domain):
| Ay | Dizine alınan sayfa | GSC tıklama/ay | Not |
|----|---------------------|----------------|-----|
| 1 | 10 | 50 | TR ilk sıralamalar |
| 2 | 18 | 300 | Noel pazarları sezonu |
| 3 | 26 | 800 | EN alternatif sorguları ilk sayfaya |
| 6 | 40 | 3.000 | "best travel journal app" ilk 10 |

Mağaza tarafında: GSC'den gelen ziyaretçilerin mağaza tıklama oranı (CTA'ya UTM: `?utm_source=blog&utm_campaign=slug`; App Store için kampanya bağlantısı).

## 8. Durum (22 Ekim 2026)

Yapıldı:
- Blog üretici (`scripts/blog.mjs`): `content/blog/{en,de,tr}/*.md` → `/{dil}/blog/{slug}/`, liste sayfası, RSS, BlogPosting + BreadcrumbList + FAQPage şeması, çeviriler arası hreflang, UTM'li CTA.
- Teknik düzeltmeler: `/` ile `/en/` tek canonical, git tabanlı lastmod, ana sayfaya FAQPage şeması, üst çubuk ve footer'da Blog linki.
- Makale başına OG görseli: `npm run og` (`scripts/og.mjs`, 1200x630 PNG, `public/assets/blog/og/<dil>/<slug>.png`; `blog.mjs` varsa otomatik kullanır, yoksa `og.png`). PNG'ler commit edilir, CI üretmez.
- İlk 12 makale (hafta 2-7 planından): best apps, Polarsteps alternatifi, nasıl tutulur, Noel pazarları; üç dilde.
- 13 yeni makale (EN 7, DE 3, TR 3; toplam 25 makale): offline günlük (EN, DE), Journi vs Polarsteps (EN), prompts (EN), yer-an sistemi (EN, TR), ülke sayacı (EN, DE, TR), yazdırma/PDF (EN, DE, TR), Google Timeline alternatifi (EN).
- `npm run check:blog` (`scripts/check-blog.mjs`): kelime sayısı, açıklama uzunluğu, FAQ, CTA, iç/dış link ve yasaklı kalıp denetimi.

Sırada:
1. Deploy sonrası GSC/Bing doğrulama ve sitemap gönderimi.
2. AlternativeTo kaydı, mağaza açıklamalarına site linki.
3. İlk 12 makaleye dış kaynak linki ekle (`check:blog` 12 uyarı veriyor). Doğrulanmış kaynaklar yeni makalelerde var.
3b. Eksik diller: prompts DE/TR, Journi vs Polarsteps DE/TR, Google Timeline DE/TR, offline TR, yer-an DE.
4. Haftalık GSC kontrolü, 4-10. sıradaki sorguları güçlendirme.

Yeni makale eklemek: `content/blog/<dil>/<slug>.md` dosyası oluştur, frontmatter anahtarları `title, description, date, updated, lang, key, faq`; gövdede bir kez `{{cta}}`; `key` aynı olan dosyalar birbirine hreflang ile bağlanır; `npm run og` ile OG görselini üret (yeni dosyalar için, mevcutları atlar), `npm run build` gerisini üretir.
