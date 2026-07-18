// Helper function to extract YouTube Video ID
  function getYouTubeId(url) {
    if (!url) return null;
    const regExp = /^.*(youtu\.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : null;
  }

  const projects = [
    { cat:'short', tag:'Short-Form', vertical:true, title:'Founder Story Cutdown', desc:'60-second interview cutdown with kinetic captions and B-roll layering.', time:'00:00:47', youtube: 'https://youtu.be/8KnvXEBBKOs' },
    { cat:'long',  tag:'Long-Form',  vertical:false, title:'Studio Vlog — Episode 4', desc:'Full-length YouTube edit with chaptering, pacing passes and thumbnail set.', time:'00:11:24', youtube: 'https://www.youtube.com/shorts/mHyPqkcKBFw?feature=share' },
    { cat:'long',  tag:'Long-Form',  vertical:false, title:'Podcast Highlight Reel', desc:'90-minute conversation trimmed to an 18-minute broadcast cut.', time:'00:18:02', youtube:'https://www.youtube.com/shorts/Q0BOH_s9gSU?feature=share'},
    { cat:'gaming',tag:'Gaming',     vertical:false, title:'Ranked Match Montage', desc:'Frame-synced kill-cams, HDR pop grade and reactive sound design.', time:'00:06:40', youtube:'https://www.youtube.com/shorts/SLH-TsmpY-w?feature=share'},
    { cat:'gaming',tag:'Gaming',     vertical:true,  title:'Clutch Clip Compilation', desc:'Vertical highlight reel built for gaming shorts and clip channels.', time:'00:00:52', youtube:'https://www.youtube.com/shorts/RBBwQp3FoKg?feature=share'},
    { cat:'football',tag:'Football', vertical:false, title:'Match Day Recap', desc:'90-minute match compressed into a 5-minute highlight package with graphics.', time:'00:05:10' ,youtube:'https://www.youtube.com/shorts/wX07ipHQqGA?feature=share'},
    { cat:'football',tag:'Football', vertical:true,  title:'Skill Reel — Weekend Wrap', desc:'Vertical highlight cut for club social channels, beat-matched to music.', time:'00:00:38' ,youtube:'https://www.youtube.com/shorts/5A-6LS9hxr8?feature=share'},
    { cat:'ecom',  tag:'eCommerce Ads', vertical:true, title:'Product Launch Ad', desc:'Studio-clean product edit with pack-shot grade and CTA overlay.', time:'00:00:15' ,youtube:'https://www.youtube.com/shorts/OEWoY-O9JSE?feature=share'},
    { cat:'doc',   tag:'Documentary', vertical:false, title:'Warm Archive — Short Doc', desc:'Interview-led documentary cut with archival grade and score.', time:'00:14:30',youtube:'https://www.youtube.com/shorts/LGvEmDg3st0?feature=share' },
    { cat:'grade', tag:'Color Grading', vertical:false, title:'Grade Lab — Before / After', desc:'Full color pass on raw log footage, matched to reference stills.', time:'00:02:12',youtube:'https://www.youtube.com/shorts/BMREVdj6lVI?feature=share' },
    { cat:'anime', tag:'Anime', vertical:true, title:'AMV — Cel Punch Cut', desc:'Beat-synced anime music video with cel-shaded color treatment.', time:'00:01:30' ,youtube:'https://www.youtube.com/shorts/VhVr6SL5C_M?feature=share'},
    { cat:'ads',   tag:'Ads', vertical:false, title:'Broadcast Spot — 30s', desc:'Full-spec broadcast ad with voiceover mix and safe-title framing.', time:'00:00:30',youtube:'https://youtu.be/od1XnVttWTM' },
  ];