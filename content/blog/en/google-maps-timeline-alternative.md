---
title: "Google Maps Timeline alternative: keep your own travel history"
description: "Looking for a Google Maps Timeline alternative? Timeline now lives on your phone and some people lost history. Here is how to export it and what to use instead."
date: 2026-10-22
updated: 2026-10-22
lang: en
key: google-timeline
faq:
  - q: "Is there a Google Maps Timeline alternative that works offline?"
    a: "Yes. VoyageLog is a manual travel journal that stores everything on your phone and works fully offline, with no account. It does not record your route in the background. If you want automatic tracking, OwnTracks is a location logger you can point at your own server, and Polarsteps tracks routes without a signal."
  - q: "Did Google Maps Timeline move to my device?"
    a: "Yes. Google announced in December 2023 that Timeline would be saved on your device rather than in the cloud, rolling out gradually on Android and iPhone. Backup to your Google Account is optional and encrypted. Google's help page also says Timeline is not available for Maps on a computer."
  - q: "How do I export my Google Maps Timeline?"
    a: "Open Google Maps on your phone, go to Your Timeline, open the menu, choose Location and privacy settings, then Export Timeline data. The result is a file saved on your phone, usually JSON. Menu names vary by app version and rollout, so check Google's current help page if you do not see the option."
  - q: "Can VoyageLog import my Google Timeline history?"
    a: "No. VoyageLog does not reconstruct the past automatically and does not import Timeline files. You add places and moments yourself, with a title, date, rating, notes and photos. You can use your exported Timeline or your photo dates as a reference while you write entries for past trips."
  - q: "How do I keep my own travel history without Google?"
    a: "Pick a tool that stores data you control and exports to open formats. Write each place or moment as you go, rate places out of five, add photos, and make a backup file regularly. VoyageLog exports JSON, Excel, ZIP with media and PDF, and you can import the JSON on a new phone."
---

The best Google Maps Timeline alternative depends on what you used Timeline for. If you wanted an automatic log of where you were, use a location logger such as OwnTracks or a trip tracker such as Polarsteps. If you wanted to remember trips, with the places you loved and what you thought of them, a journal you write yourself, such as VoyageLog, does that job better. Whichever you pick, export your Timeline from your phone first. Google moved Timeline onto devices, and some people found years of history missing afterwards.

## What Google changed about Timeline

Timeline used to be a cloud feature. Your phone reported where you went, Google stored it, and you could browse it on a computer. In December 2023 Google [announced](https://blog.google/products/maps/updates-to-location-history-and-new-controls-coming-soon-to-maps/) that, for people who have Location History turned on, Timeline would be saved on the device instead. The change rolled out gradually over the following year, with a notification in the app when it reached your account.

Here is what Google's own pages say today, as far as we could verify:

- **Storage.** Timeline saves visits and routes on each signed-in device, based on what that device records.
- **Backup is optional.** If you turn it on, Maps keeps an encrypted copy on Google's servers, and you can import it onto a different device if yours is lost or damaged. Google's [backup help](https://support.google.com/maps/answer/14169818) describes this. Backup is not on unless you choose it.
- **Timeline is opt-in.** Google's help page says it is off by default for a Google Account and can only be turned on if you opt in.
- **No computer version.** The help page states that Timeline is not available for Maps on a computer. Deleting parts of it needs the mobile app.
- **Auto-delete.** Google's announcement said that when you first turn on Location History, auto-delete is set to three months, down from 18 months earlier. You can extend it or turn it off.

None of this is a secret, and for many people nothing went wrong. Still, the combination matters. If your phone is lost and backup was never on, the history on that phone goes with it. If auto-delete is set short, old trips age out quietly.

## Why some people lost their history

During the migration, a number of users reported that years of Timeline were gone. [BGR reported](https://bgr.com/tech/google-maps-bug-is-deleting-timelines-and-there-might-not-be-a-fix/) cases where Google Support told people the data could not be recovered with current tools, and some people said an empty backup had overwritten a real one. We cannot tell you how widespread this was. Google has not published a number, and the press coverage mixes dates and device types.

What we can say plainly is the lesson. A location history that exists in only one place is fragile, whether that place is Google's server or your phone. The sensible habit is to export a copy now and store it somewhere you control. This takes five minutes and is worth doing even if you plan to keep using Timeline.

## Export your Google Maps Timeline: step by step

Menu names change between app versions and rollouts, so treat these as a guide and check Google's [current Timeline help](https://support.google.com/maps/answer/6258979) if something looks different.

1. Update Google Maps on your phone to the latest version.
2. Tap your profile picture, then Your Timeline.
3. Open the three-dot menu and choose Location and privacy settings. On some Android versions the route is Settings, then Location, then Timeline.
4. Tap Export Timeline data and confirm with your screen lock if asked.
5. Save the file. It is usually a single JSON file stored on the phone.
6. Copy it off the phone: to a laptop, an external drive, or a folder you back up. Do not leave the only copy on the same device.
7. Check the file opens and is not empty. If it is empty or tiny after years of use, export again before you change anything.
8. Consider turning on Timeline backup, or setting auto-delete to a longer period, if you intend to keep using Timeline.

You may have used Google Takeout for this before. Sources disagree on whether Takeout still includes Timeline once your data is on-device, and Google's help pages do not settle it, so do not rely on it. The on-phone export is the reliable route.

An exported JSON file is raw data: coordinates and timestamps. It is not a readable diary. Hobbyist tools can render it on a map, but be careful about uploading a file of your movements to a random website. Process it on your own computer where you can.

## What a Timeline user actually wanted

People used Timeline for different reasons, and the replacement depends on which one was yours.

- **"Where was I on that date?"** A pure location record. Automatic, passive, no effort.
- **"What was that restaurant in Lisbon?"** A way to find places again. Timeline was never good at this, since it recorded visits without names you chose or opinions.
- **"Show me my year."** A look back at trips, countries and distances.
- **"I want it to be mine."** Control of the data, not a log that disappears when a setting changes.

The first is a tracking problem. The other three are journaling problems, and a tracker handles them badly, because a trail of dots cannot tell you whether the pizza was worth the queue.

## Two ways to replace Timeline

There are two families of tools, and they solve different problems.

| | Automatic trackers | Deliberate journals |
|---|---|---|
| How entries appear | Phone records in the background | You write each one |
| Examples | OwnTracks, Polarsteps, FindPenguins | VoyageLog |
| Captures the past | Only from the day you start | Only what you add |
| Opinions and ratings | Not the focus | The point |
| Battery use | Some extra drain | Same as a notes app |
| Typical risk | Account or server holds your data | You forget to write entries |

### Automatic trackers

**OwnTracks** is the closest thing to old Timeline for people comfortable with a bit of setup. Its [own site](https://owntracks.org/) describes it as an app for keeping track of your own location, usable as a private location diary, for iPhone and Android, open source, with the option to connect to your own server. You own the data, and you need to be willing to run or choose a server.

**Polarsteps** records your route automatically and, according to its site, keeps tracking without a signal. It then builds a trip map and can print a photo book. It is a social-leaning product with a cloud account, and its strength is the finished route map. If that is what you miss, read our [Polarsteps alternatives](/en/blog/polarsteps-alternatives/) guide.

**FindPenguins** describes itself as a travel app for planning, tracking and sharing trips, with a tracker that follows your itinerary automatically. It suits long trips and an audience.

All three share one limit: they start recording on the day you install them. None of them recovers the trips you took before.

{{cta}}

### Deliberate journals: VoyageLog

VoyageLog is the app we build, so weigh this with that in mind. It is a private travel journal for iPhone and Android with no account to create. Everything is stored on your phone, it works fully offline, and there is no server holding your history.

The model is small. An entry is either a **place**, which you can revisit and rate from one to five, or a **moment**, which happened once and has no rating. Each entry has a title, an optional location (paste an Apple or Google Maps link and it fills in), a date, notes, tags, photos and video. Trips sit as cards on one timeline with dates, duration and countries, and a long trip can be split by city. There is a map for each trip and one map of everywhere you have been, plus an Insights tab with trips, cities, countries, days away and average rating, and a Year in Travel look-back.

This is the thing Timeline could never do: tell you which places were good. A 5 beside Pizzarium in Rome says more in two seconds than a coordinate ever will. Our guide to [keeping a travel journal](/en/blog/how-to-keep-a-travel-journal/) shows the one-minute entry that makes this practical.

Be clear about the limits. VoyageLog does **not** reconstruct your past automatically. It does not read your Timeline, it does not import Google location files, and it has no GPS route tracking. If you want a route drawn while you walk, use one of the trackers above. VoyageLog is also not a trip planner and has no feed or sharing network.

On data control, the picture is better than most. Exports are JSON, Excel, ZIP with all photos and videos, PDF, and image cards. You can import the JSON or ZIP on a new phone. The app reminds you to make a backup every ten trips. The free version is a complete journal with a limited number of trips, and Pro removes the limits and adds up to 50 photos per entry, advanced search filters and exports. Pro comes as a yearly subscription or a one-time lifetime purchase, with the same features either way. The full comparison is in our [best travel journal apps](/en/blog/best-travel-journal-apps/) article.

## Can you use both?

Yes, and for many people that is the right answer. A tracker answers "where was I" without effort. A journal answers "was it good, and what do I want to remember." They do not compete.

A practical split: let a tracker run on long trips where the route matters, such as a road trip along the Amalfi coast. Use a journal on every trip, including city breaks to Prague or Vienna where the route is a few streets and the interesting part is the café you rated 5. If you only pick one and want it to last, pick the one whose data you can export and read without the company's app.

## Rebuild past trips from your photo metadata

If Timeline gave you a record of past trips and you have lost it, your photo library is the best remaining source. Most phone photos carry a capture date and time, and many carry GPS coordinates, unless you turned location tagging off in the camera settings or stripped it when sharing.

Here is a method that works without any special software.

1. **List your trips by date.** Open your photo library, sort by date, and note the first and last photo of each trip.
2. **Check the map view.** Both iPhone Photos and Google Photos show pictures on a map when they have location data. A cluster in Barcelona tells you which neighbourhoods you covered.
3. **Pull out the anchor photos.** One per place: the menu, the ticket, the facade. These carry the date and, often, the place.
4. **Open the photo details.** The info panel shows the date, time and sometimes a place name. Copy it into your notes.
5. **Write the entry.** For each anchor photo, add a title, a rating if it was a place, and one line you still remember.
6. **Accept gaps.** You will not recover every stop. Entries for the ten places you remember are better than a perfect log you never finish.

This is manual and a little slow, so do it for the trips you care about, not all of them. If you also exported your Timeline file, use its dates to confirm which days you were where. Do this once, and from then on the journal fills itself in as you travel, one entry at a time.

## What to do this week

Export your Timeline file and copy it off your phone. Decide what you want to be able to answer in five years: where you were, or what you thought. Pick a tracker for the first, a journal for the second, or both. Then write one entry for your most recent trip while you still remember it.

The goal is a travel history that belongs to you, in a format you can open when the app, the phone or the setting has changed. See also how to [plan a trip around Christmas markets](/en/blog/christmas-markets-europe-checklist/) for a trip worth journaling, or open the [VoyageLog home page](/en/) to see the app.
