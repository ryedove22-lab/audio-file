(function(){
  var el=document.getElementById('poto-player');
  if(!el)return;
  var title=el.getAttribute('data-title')||'';
  var src=el.getAttribute('data-src')||'';

  el.innerHTML=`
    <div style="background:#0a0a0e;border-radius:16px;padding:1.5rem 1rem;display:flex;flex-direction:column;align-items:center;font-family:Georgia,serif">
      <div style="background:#0d0d12;border:1px solid #2a2a35;border-radius:12px;padding:20px 24px;width:300px;display:flex;flex-direction:column;align-items:center;gap:14px">

        <div style="width:100%;height:1px;background:linear-gradient(90deg,transparent,#8a8fa8,transparent)"></div>

        <div style="text-align:center">
          <div style="color:#c8ccd8;font-size:13px;font-weight:500;letter-spacing:.12em;text-transform:uppercase">${title}</div>
          <div style="color:#555870;font-size:11px;margin-top:4px;letter-spacing:.06em">Andrew Lloyd Webber</div>
        </div>

        <div style="position:relative;width:200px;height:200px">
          <div id="poto-disc-inner" style="width:200px;height:200px;border-radius:50%;background:#0f0f14;border:2px solid #1e1e28;position:relative;display:flex;align-items:center;justify-content:center;overflow:hidden">
            <svg style="position:absolute;inset:0;width:100%;height:100%;border-radius:50%" viewBox="0 0 200 200">
              <circle cx="100" cy="100" r="95" fill="none" stroke="#161620" stroke-width=".8"/>
              <circle cx="100" cy="100" r="89" fill="none" stroke="#131318" stroke-width=".8"/>
              <circle cx="100" cy="100" r="83" fill="none" stroke="#161620" stroke-width=".8"/>
              <circle cx="100" cy="100" r="77" fill="none" stroke="#131318" stroke-width=".8"/>
              <circle cx="100" cy="100" r="71" fill="none" stroke="#161620" stroke-width=".8"/>
              <circle cx="100" cy="100" r="65" fill="none" stroke="#131318" stroke-width=".8"/>
              <circle cx="100" cy="100" r="59" fill="none" stroke="#161620" stroke-width=".8"/>
              <circle cx="100" cy="100" r="53" fill="none" stroke="#131318" stroke-width=".8"/>
              <circle cx="100" cy="100" r="47" fill="none" stroke="#161620" stroke-width=".8"/>
              <circle cx="100" cy="100" r="41" fill="none" stroke="#131318" stroke-width=".8"/>
              <circle cx="100" cy="100" r="35" fill="none" stroke="#161620" stroke-width=".8"/>
            </svg>
            <div style="width:66px;height:66px;border-radius:50%;background:#6b0a0a;border:1.5px solid #8b1a1a;z-index:2;display:flex;align-items:center;justify-content:center;flex-direction:column;text-align:center">
              <span style="color:#c8ccd8;font-size:6px;font-weight:500;line-height:1.4;letter-spacing:.08em">PHANTOM<br>OF THE<br>OPERA</span>
            </div>
          </div>
          <div id="poto-arm-inner" style="position:absolute;width:105px;height:2px;background:#9098b0;border-radius:2px;transform-origin:right center;top:44px;right:16px;transform:rotate(-35deg);transition:transform 0.9s ease;z-index:5">
            <div style="position:absolute;right:-7px;top:-5px;width:13px;height:13px;border-radius:50%;background:#b0b8cc;border:1.5px solid #d0d4e0"></div>
            <div style="position:absolute;left:0;top:-3px;width:6px;height:6px;border-radius:50%;background:#333"></div>
            <div style="position:absolute;left:2px;top:3px;width:16px;height:1.5px;background:#777;transform:rotate(28deg)"></div>
          </div>
        </div>

        <audio id="poto-audio-inner" src="${src}" controls preload="none"
          style="width:100%;margin-top:4px"></audio>

        <div style="color:#3a3a48;font-size:16px;letter-spacing:10px">— ✦ —</div>
        <div style="width:100%;height:1px;background:linear-gradient(90deg,transparent,#8a8fa8,transparent)"></div>
      </div>
    </div>

    <style>
      @keyframes poto-spin{from{transform:rotate(0deg)}to{transform:rotate(360deg)}}
      .poto-spinning{animation:poto-spin 4s linear infinite}
    </style>
  `;

  var audio=document.getElementById('poto-audio-inner');
  var disc=document.getElementById('poto-disc-inner');
  var arm=document.getElementById('poto-arm-inner');

  audio.addEventListener('play',function(){
    disc.classList.add('poto-spinning');
    arm.style.transform='rotate(-20deg)';
  });
  audio.addEventListener('pause',function(){
    disc.classList.remove('poto-spinning');
    arm.style.transform='rotate(-35deg)';
  });
  audio.addEventListener('ended',function(){
    disc.classList.remove('poto-spinning');
    arm.style.transform='rotate(-35deg)';
  });
})();
