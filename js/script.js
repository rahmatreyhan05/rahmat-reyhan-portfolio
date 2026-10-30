"use strict";
/* ===== 1. CONFIG: isi bagian ini ===== */
const CONFIG = {
  email: "rahmat.reyhan16@gmail.com",
  github: "",     // isi: "https://github.com/username-anda"
  linkedin: "https://linkedin.com/in/rahmat-reyhan-80360130a",
  whatsapp: "https://wa.me/62895618988833", // hapus isinya jika tidak ingin ditampilkan
  showPlaceholders: true, // true = tampilkan kotak "Tambah foto" saat foto belum ada; ubah ke false sebelum publish agar kotak kosong disembunyikan
  cvAvailable: true,
  cvPath: "assets/documents/CV-Rahmat-Reyhan.pdf"
};
const TBD = "[Belum diisi]";

/* ===== 2. DATA ===== */
const NAV = ["Home","About","Skills","Projects","Experience","Education","Certificates","Achievements","Organization","Languages","Contact"];
const SKILLS = {
  "Analytical & Operational":["Data Verification","Data Management","Monitoring & Reporting","Problem Solving","Attention to Detail"],
  "Hard Skills":[["Microsoft Word","microsoftword"],["Microsoft Excel","microsoftexcel"],["Microsoft PowerPoint","microsoftpowerpoint"],["Visual Studio Code","visualstudiocode"],["Canva","canva"],["Figma","figma"],["PHP","php"],["CodeIgniter 4","codeigniter"],["MySQL","mysql"]],
  "Soft Skills":["Communication","Teamwork","Adaptability","Critical Thinking","Time Management"]
};
const IMG = "assets/images/";
/* Screenshot proyek: simpan di assets/images/projects/ dengan nama sesuai daftar "shots" (ekstensi .jpg/.png/.webp). Hapus/tambah baris sesuai jumlah gambar. */
const PROJECTS = [
 {id:"internship",title:"Website Pendaftaran Program Internship",cat:"Sistem Informasi · 2026",img:IMG+"project-bogasari.svg",
  shots:[IMG+"projects/internship-1",IMG+"projects/internship-2",IMG+"projects/internship-3"],
  summary:"Sistem informasi untuk mengelola data peserta internship di PT Indofood Sukses Makmur Tbk Divisi Bogasari Flour Mills.",
  problem:"Data peserta internship perlu dikelola secara terpusat.",
  solution:"Sistem informasi berbasis web yang memusatkan pengelolaan data peserta internship.",
  role:"Merancang sistem informasi, database, dan fitur sistem, serta melakukan pengujian sistem.",
  stack:["PHP","CodeIgniter 4","MySQL"],
  features:["Pengelolaan data peserta secara terpusat","Database dan fitur sistem","Pengujian fungsi sistem"],
  learn:"Tantangan utama adalah menyusun alur pendaftaran dan pengelolaan data peserta agar informasi tersimpan secara terpusat dan mudah ditelusuri. Dari proyek ini saya belajar menerjemahkan kebutuhan program ke dalam struktur database dan fitur sistem, lalu menguji fungsi-fungsinya untuk memastikan alur pengelolaan data berjalan sesuai tujuan.",
  github:"",demo:""}
];
const EXPERIENCE = [{
  role:"Material Store & Waste Management (Internship)",company:"PT Indofood Sukses Makmur Tbk Divisi Bogasari Flour Mills",period:"Okt 2025 - Des 2025",
  duties:["Menerima dan memverifikasi barang dari supplier sesuai standar kualitas perusahaan","Mengelola data stok masuk dan keluar secara akurat menggunakan sistem pencatatan internal","Melaksanakan stock opname bulanan untuk memastikan kesesuaian data fisik dan sistem","Menyiapkan material sesuai permintaan produksi tepat waktu"],
  skills:["Data Verification","Data Management","Attention to Detail"],result:"",
  images:[IMG+"experience/bogasari-1",IMG+"experience/bogasari-2",IMG+"experience/bogasari-3"]}];
const EDUCATION = [
  {school:"Universitas Bina Insani, Kota Bekasi",degree:"Bachelor of Information Systems",gpa:"IPK 3,73 (Cumlaude)",period:"Jun 2022 - Aug 2026",extra:[,["Skripsi","Perancangan Sistem Informasi Pendaftaran Program Magang Menggunakan Metode Prototype pada PT ISM Tbk Bogasari Jakarta"]]},
  {school:"SMK Al-Muhadjirin, Kota Bekasi",degree:"Teknik Komputer dan Jaringan",gpa:"Nilai rata-rata 84,66",period:"Jun 2019 - Jun 2022",extra:[]}
];
/* Tambah sertifikat: salin satu baris c(...) lalu isi (nama, kategori, penerbit, tahun, url credential). */
/* Gambar sertifikat: assets/images/certificates/<nama-file>.jpg (nama-file otomatis dari judul; lihat DAFTAR-NAMA-FILE.txt di folder itu). */
const slug = n=>n.toLowerCase().replace(/\(.*?\)/g,"").replace(/[^a-z0-9]+/g,"-").replace(/^-+|-+$/g,"");
const c = (name,cat,issuer,date,url="",pdf="",image="")=>({name,cat,issuer,date,url,pdf,img:IMG+"certificates/"+(image||slug(name))});
const D = "Dicoding Indonesia", R = "Skill Academy by Ruang Guru";
const CERTS = [
  c("Belajar Dasar AI","AI & ML",D,"2026","https://www.dicoding.com/certificates/JLX1VEG4NZ72"),
  c("Memulai Pemrograman dengan Python","Programming",D,"2026","https://www.dicoding.com/certificates/72ZDJ695LZYW"),
  c("Belajar Machine Learning untuk Pemula","AI & ML",D,"2026","https://www.dicoding.com/certificates/98XW0J5ELXM3"),
  c("Architecting on AWS (Membangun Arsitektur Cloud di AWS)","Cloud",D,"2026","https://www.dicoding.com/certificates/EYX4QW64WPDL"),
  c("Belajar Dasar Cloud dan Gen AI di AWS","Cloud",D,"2026","https://www.dicoding.com/certificates/1RXYWVN5QZVM"),
  c("Belajar Fundamental Deep Learning","AI & ML",D,"2026","https://www.dicoding.com/certificates/JMZVORW6OXN9"),
  c("Belajar Fundamental Pemrosesan Data","Data",D,"2026","https://www.dicoding.com/certificates/6RPN7JQN8X2M"),
  c("Belajar Penerapan Data Science dengan Microsoft Fabric","Data",D,"2026","https://www.dicoding.com/certificates/07Z67E95JPQR"),
  c("Membangun Aplikasi Gen AI dengan Microsoft Azure","Cloud",D,"2026","https://www.dicoding.com/certificates/MEPJOG6DLZ3V"),
  c("Spec-Driven Development dengan Kiro","Development",D,"2026","https://www.dicoding.com/certificates/L4PQ9LRLOPO1"),
  c("Belajar Dasar Pemrograman JavaScript","Programming",D,"2026","https://www.dicoding.com/certificates/MEPJMR356P3V"),
  c("Belajar Dasar Pemrograman Web","Frontend",D,"2026","https://www.dicoding.com/certificates/JLX1K0VGJP72"),
  c("Introduction to Financial Literacy","Finance",D,"2026","https://www.dicoding.com/certificates/RVZKM908NXD5"),
  c("Belajar Strategi Pengembangan Diri","Self Development",D,"2026","https://www.dicoding.com/certificates/07Z6QKQ4RZQR"),
  c("Belajar Membuat Front-End Web untuk Pemula","Frontend",D,"2026","https://www.dicoding.com/certificates/MRZMVG55LZYQ"),
  c("Membangun Sistem Machine Learning","AI & ML",D,"2026","https://www.dicoding.com/certificates/1OP871JL8ZQK"),
  c("Belajar Fundamental Front-End Web Development","Frontend",D,"2026","https://www.dicoding.com/certificates/81P2KG0WQXOY"),
  c("Sertifikat Kelulusan Pelatihan Kelas Menengah (Intermediate) - AWS AI Academy","AI & ML","AWS AI Academy","2026"),
  c("Master Class + Sertifikasi BNSP - Data Analyst (Okupasi Level 6)","Data","Bisa AI Academy","2026"),
  c("BIU ISC-BACD 2026 International Student Conference on Business, Accounting, Computer & Design","Conference","Universitas Bina Insani","2026","","","Certificate BiU ISC 2026 - Rahmat Reyhan_page-0001"),
  c("Komunikasi Efektif","Soft Skills",R,"2023"),
  c("Copywriting Teknik SEO","Soft Skills",R,"2023"),
  c("Pertukaran Mahasiswa Merdeka Batch 4","Program","Kementerian Pendidikan, Kebudayaan, Riset, dan Teknologi","2024"),
  c("Internship","Program","PT Indofood Sukses Makmur Tbk Divisi Bogasari Flour Mills","2025")
];
const ACHIEVEMENTS = [{
  cat:"Academic achievements",title:"Merdeka Belajar Kampus Merdeka (MBKM)",sub:"Pertukaran Mahasiswa Merdeka Batch 4 · Inbound, Universitas Pattimura, Maluku",period:"Mar 2024 - Jun 2024",
  items:["Lolos seleksi program MBKM dan menjalani studi di lingkungan akademik lintas budaya","Melaksanakan Modul Nusantara: kebhinekaan, inspirasi, refleksi, dan kontribusi sosial kepada masyarakat lokal","Menyusun logbook mingguan yang mendokumentasikan proses belajar dan refleksi pengalaman"],
  images:[IMG+"achievements/mbkm-1",IMG+"achievements/mbkm-2",IMG+"achievements/mbkm-3"]}];
const ORG = [{name:"UKM Futsal Universitas Bina Insani",role:"Sekretaris",period:"2024 - 2025",duties:"Mengelola administrasi, mencatat hasil rapat, dan menyusun dokumen organisasi",events:"Mendukung koordinasi latihan rutin, rapat pengurus, dan kegiatan UKM",skills:"Communication, Teamwork, Time Management, Organization, dan Responsibility",images:[IMG+"organization/futsal-1",IMG+"organization/futsal-2",IMG+"organization/futsal-3"]}];
const LANGS = [["Bahasa Indonesia","Native"],["Bahasa Inggris","Intermediate"]];

/* ===== 3. HELPERS ===== */
const $ = (s,r=document)=>r.querySelector(s), $$ = (s,r=document)=>[...r.querySelectorAll(s)];
const esc = s=>String(s).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
const val = v=>/^\[.*\]$/.test(v)?`<span class="ph">${esc(v)}</span>`:esc(v);
const chips = a=>`<div class="chips">${a.map((x,k)=>{const [n,i]=[].concat(x);return `<span class="chip" style="--ci:${k}">${i?`<img src="assets/icons/${i}.svg" alt="" width="18" height="18">`:""}${esc(n)}</span>`}).join("")}</div>`;
/* Gambar opsional: coba .jpg, .png, .webp; jika tidak ada pakai fallback atau sembunyikan. */
const EXTS = ["jpg","png","webp"];
const pic = (base,alt,fb="",cls="")=>`<img class="${cls}" src="${base}.jpg" data-base="${base}" data-i="0" data-fb="${fb}" data-hint="${base}.jpg" alt="${esc(alt)}" loading="lazy">`;
const gallery = (list,alt)=>`<div class="gallery">${(list||[]).map((b,i)=>pic(b,`${alt} ${i+1}`).replace("<img",'<img data-zoom')).join("")}</div>`;
const projectGallery = (list,alt)=>`<div class="proj-gallery">${(list||[]).map((b,i)=>pic(b,`${alt} ${i+1}`).replace("<img",'<img data-zoom')).join("")}</div>`;
document.addEventListener("error",e=>{
  const t = e.target; if(!t.dataset||!t.dataset.base) return;
  const i = +t.dataset.i+1;
  if(i<EXTS.length){ t.dataset.i = i; t.src = `${t.dataset.base}.${EXTS[i]}`; }
  else if(t.dataset.fb && t.dataset.done!=="1"){ t.dataset.done = "1"; t.src = t.dataset.fb; }
  else if(CONFIG.showPlaceholders && t.dataset.hint){
    const d = document.createElement("div"), th = t.classList.contains("thumb"), detail = t.classList.contains("zoom");
    d.className = "slot"+(th?" slot-thumb":"")+(detail?" slot-cert-detail":"");
    d.innerHTML = '<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 8h3l2-3h6l2 3h3v11H4z"/><circle cx="12" cy="13" r="3.5"/></svg><span>Tambah foto</span>'+(th?"":"<small></small>");
    if(!th) d.querySelector("small").textContent = t.dataset.hint;
    t.replaceWith(d);
  } else t.remove();
},true);
const ICON = {
  github:'<path d="M9 19c-4 1-4-2-6-2m12 4v-3.5a3 3 0 0 0-1-2.5c3.5-.4 6-1.7 6-6a4.7 4.7 0 0 0-1.3-3.3 4.3 4.3 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12 12 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.100a4.3 4.3 0 0 0-.1 3.200A4.7 4.7 0 0 0 4 9.500c0 4.3 2.5 5.6 6 6a3 3 0 0 0-1 2.500V21"/>',
  linkedin:'<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2zM4 2a2 2 0 1 1 0 4 2 2 0 0 1 0-4z"/>',
  mail:'<rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 6L2 7"/>',
  whatsapp:'<path d="M3 21l1.7-5A8.5 8.5 0 1 1 8 19.300z"/>',
  sun:'<circle cx="12" cy="12" r="4"/><path d="M12 2v2m0 16v2M4.9 4.900l1.4 1.400m11.4 11.4 1.4 1.400M2 12h2m16 0h2M4.9 19.100l1.4-1.400m11.4-11.4 1.4-1.4"/>',
  moon:'<path d="M21 12.800A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.800z"/>'
};
const svg = n=>`<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${ICON[n]}</svg>`;
const contacts = ()=>[
  CONFIG.github&&["GitHub",CONFIG.github,"github"],CONFIG.linkedin&&["LinkedIn",CONFIG.linkedin,"linkedin"],
  CONFIG.email&&["Email","https://mail.google.com/mail/?view=cm&fs=1&to="+encodeURIComponent(CONFIG.email),"mail"],CONFIG.whatsapp&&["WhatsApp",CONFIG.whatsapp,"whatsapp"]].filter(Boolean);

/* ===== 4. RENDER ===== */
function render(){
  $("#menu").innerHTML = NAV.map(n=>`<a href="#${n.toLowerCase()}">${n}</a>`).join("");
  $("#footNav").innerHTML = ["About","Projects","Certificates","Contact"].map(n=>`<a href="#${n.toLowerCase()}">${n}</a>`).join("");
  const soc = contacts().map(([l,u,i])=>`<a href="${esc(u)}" target="_blank" rel="noopener" aria-label="${l}">${svg(i)}</a>`).join("");
  $("#heroSocials").innerHTML = $("#footSocials").innerHTML = soc;
  $("#contactLinks").innerHTML = contacts().map(([l,u])=>`<li><a href="${esc(u)}" target="_blank" rel="noopener">${l}</a></li>`).join("") || '<li class="ph">Tautan kontak belum diisi (lihat CONFIG di js/script.js).</li>';
  $("#skillGrid").innerHTML = Object.entries(SKILLS).map(([k,v])=>`<div class="card reveal"><h3>${k}</h3>${chips(v)}</div>`).join("");
  $("#projGrid").innerHTML = PROJECTS.map(p=>`<article class="card proj reveal">${projectGallery(p.shots,p.title)}<div class="body"><span class="tag">${p.cat}</span><h3>${p.title}</h3><p>${p.summary}</p>${chips(p.stack)}<button class="btn" data-proj="${p.id}">View Details</button></div></article>`).join("");
  $("#expList").innerHTML = EXPERIENCE.map(e=>`<div class="card reveal"><h3>${val(e.role)}</h3><p class="meta">${val(e.company)} · ${val(e.period)}</p><ul>${e.duties.map(d=>`<li>${d}</li>`).join("")}</ul><p><b>Skills gained:</b></p>${chips(e.skills)}${gallery(e.images,"Dokumentasi magang")}${e.result?`<p class="note"><b>Kontribusi:</b> ${val(e.result)}</p>`:""}</div>`).join("");
  $("#eduList").innerHTML = `<div class="timeline">`+EDUCATION.map(e=>`<div class="card reveal"><h3>${e.school}</h3><p class="meta">${[e.degree,e.gpa,e.period].map(val).join(" · ")}</p>${e.extra.map(([k,v])=>`<p><b>${k}:</b> ${val(v)}</p>`).join("")}</div>`).join("")+`</div>`;
  const cats = ["Semua",...new Set(CERTS.map(c=>c.cat))];
  $("#certFilters").innerHTML = cats.map((c,i)=>`<button data-cat="${c}" aria-pressed="${i===0}">${c}</button>`).join("");
  drawCerts("Semua");
  $("#achGrid").innerHTML = ACHIEVEMENTS.map(a=>`<div class="card reveal"><span class="tag">${a.cat}</span><h3>${a.title}</h3><p class="meta">${a.sub} · ${a.period}</p><ul>${a.items.map(i=>`<li>${i}</li>`).join("")}</ul>${gallery(a.images,a.title)}</div>`).join("");
  $("#orgList").innerHTML = ORG.map(o=>`<div class="card org reveal"><div class="badge" aria-hidden="true">UKM</div><div><h3>${o.name}</h3><p class="meta">${o.role} · ${val(o.period)}</p><p><b>Tanggung jawab:</b> ${val(o.duties)}</p><p><b>Kegiatan:</b> ${val(o.events)}</p><p><b>Skills:</b> ${val(o.skills)}</p>${gallery(o.images,o.name)}</div></div>`).join("");
  $("#langList").innerHTML = LANGS.map(([n,l])=>`<div class="card reveal"><h3>${n}</h3><p>${val(l)}</p></div>`).join("");
  $("#year").textContent = new Date().getFullYear();
}
function drawCerts(cat){
  $("#certGrid").innerHTML = CERTS.map((c,i)=>({c,i})).filter(x=>cat==="Semua"||x.c.cat===cat)
    .map(({c,i})=>`<button class="card cert" data-cert="${i}">${c.pdf?pdfFrame(c.pdf,c.name,true):pic(c.img,"Sertifikat "+c.name,"","thumb")}<span class="tag">${c.cat}</span><h3>${c.name}</h3><p>${val(c.issuer)} · ${val(c.date)}</p></button>`).join("");
}

/* ===== 5. CV ===== */
function setupCV(){
  const ok = CONFIG.cvAvailable;
  $$("[data-cv]").forEach(a=>{ if(ok) a.href = CONFIG.cvPath; });
  const v = $("[data-cv-view]");
  if(ok) v.href = CONFIG.cvPath; else { v.setAttribute("aria-disabled","true"); v.addEventListener("click",e=>e.preventDefault()); }
  $("#cvNote").textContent = ok ? "" : "File CV belum tersedia. Letakkan PDF di assets/documents/CV-Rahmat-Reyhan.pdf lalu ubah cvAvailable menjadi true di js/script.js.";
}

/* ===== 6. MODAL ===== */
const modal = $("#modal");
function open(html,variant=""){
  const isCert = variant==="cert";
  const isPdfCert = variant==="cert-pdf";
  modal.classList.toggle("cert-modal",isCert);
  modal.classList.toggle("cert-pdf-modal",isPdfCert);
  $("#mBody").classList.toggle("cert-detail",isCert||isPdfCert);
  $("#mBody").innerHTML = html;
  modal.showModal();
}
function pdfFrame(path,title,preview=false){
  const view = preview ? "#page=1&zoom=page-fit&toolbar=0&navpanes=0&scrollbar=0" : "#page=1&zoom=page-width&toolbar=0&navpanes=0&scrollbar=0";
  return `<div class="cert-pdf-box${preview?" cert-pdf-preview":""}"><iframe class="cert-pdf" src="${esc(path+view)}" title="${esc(preview?"Pratinjau halaman pertama sertifikat "+title:"Sertifikat "+title)}"${preview?' aria-hidden="true" tabindex="-1" loading="lazy"':""}></iframe></div>`;
}
document.addEventListener("click",e=>{
  const p = e.target.closest("[data-proj]"), c = e.target.closest("[data-cert]"), f = e.target.closest("[data-cat]");
  if(p){ const x = PROJECTS.find(q=>q.id===p.dataset.proj);
    open(`<span class="tag">${x.cat}</span><h3 id="mTitle">${x.title}</h3>${gallery(x.shots,x.title)}<h4>Problem statement</h4><p>${x.problem}</p><h4>Solution overview</h4><p>${x.solution}</p><h4>My role</h4><p>${val(x.role)}</p><h4>Tech stack</h4>${chips(x.stack)}<h4>Key features</h4><ul>${x.features.map(i=>`<li>${i}</li>`).join("")}</ul><h4>Challenges and learnings</h4><p>${val(x.learn)}</p><div class="cta">${x.github?`<a class="btn" href="${esc(x.github)}" target="_blank" rel="noopener">GitHub Repository</a>`:""}${x.demo?`<a class="btn ghost" href="${esc(x.demo)}" target="_blank" rel="noopener">Live Demo</a>`:""}</div>${x.github||x.demo?"":'<p class="note">Tautan repository/demo belum diisi.</p>'}`); }
  if(c){ const x = CERTS[c.dataset.cert];
    const variant = x.pdf?"cert-pdf":"cert";
    open(`<div class="cert-detail-head"><span class="tag">${x.cat}</span><h3 id="mTitle">${x.name}</h3><p class="meta">${val(x.issuer)} · ${val(x.date)}</p></div>${x.pdf?pdfFrame(x.pdf,x.name):pic(x.img,"Sertifikat "+x.name,"","zoom")}<div class="cta">${x.url?`<a class="btn" href="${esc(x.url)}" target="_blank" rel="noopener">View Credential</a>`:'<span class="note">Credential URL belum diisi.</span>'}</div>`,variant); }
  if(f){ $$("[data-cat]").forEach(b=>b.setAttribute("aria-pressed",b===f)); drawCerts(f.dataset.cat); }
  const z = e.target.closest("img[data-zoom]"); if(z) open(`<img class="zoom" src="${esc(z.currentSrc||z.src)}" alt="${esc(z.alt)}">`);
  if(e.target===modal) modal.close();
});
$("#mClose").addEventListener("click",()=>modal.close());
modal.addEventListener("close",()=>{
  modal.classList.remove("cert-modal");
  modal.classList.remove("cert-pdf-modal");
  $("#mBody").classList.remove("cert-detail");
  $("#mBody").replaceChildren();
});

/* ===== 7. UI BEHAVIOR ===== */
function setupUI(){
  const root = document.documentElement, tb = $("#theme");
  const paint = ()=>{ tb.innerHTML = svg(root.dataset.theme==="dark"?"sun":"moon"); };
  paint();
  tb.addEventListener("click",()=>{ root.dataset.theme = root.dataset.theme==="dark"?"light":"dark"; try{localStorage.setItem("theme",root.dataset.theme)}catch(e){} paint(); });
  const menu = $("#menu"), bg = $("#burger");
  const toggle = o=>{ menu.classList.toggle("open",o); bg.setAttribute("aria-expanded",o); };
  bg.addEventListener("click",()=>toggle(!menu.classList.contains("open")));
  menu.addEventListener("click",e=>{ if(e.target.tagName==="A") toggle(false); });
  document.addEventListener("keydown",e=>{ if(e.key==="Escape") toggle(false); });
  const nav = $("#nav"), top = $("#top");
  const onScroll = ()=>{ nav.classList.toggle("stuck",scrollY>20); top.classList.toggle("show",scrollY>600); };
  addEventListener("scroll",onScroll,{passive:true}); onScroll();
  top.addEventListener("click",()=>scrollTo({top:0}));
  if(!("IntersectionObserver" in window)) return;
  document.documentElement.classList.add("js");
  const rv = new IntersectionObserver(es=>es.forEach(x=>{ if(x.isIntersecting){ x.target.classList.add("in"); rv.unobserve(x.target);
    /* setelah animasi selesai, lepas class reveal agar hover kartu berfungsi normal */
    if(x.target.tagName!=="H2") setTimeout(()=>{ x.target.classList.remove("reveal","in"); x.target.style.removeProperty("--d"); },1800); } }),{threshold:.12});
  $$(".reveal").forEach(el=>{ const sib=[...el.parentElement.children].filter(n=>n.classList.contains("reveal")); el.style.setProperty("--d",Math.min(sib.indexOf(el),8)*90+"ms"); rv.observe(el); });
  const links = $$("#menu a");
  const sp = new IntersectionObserver(es=>es.forEach(x=>{ if(x.isIntersecting){ const id = x.target.id; links.forEach(a=>a.classList.toggle("on",a.getAttribute("href")==="#"+id)); } }),{rootMargin:"-45% 0px -50% 0px"});
  $$("main section").forEach(s=>sp.observe(s));
}

/* ===== 8. CONTACT FORM (membuka Gmail di browser, tanpa backend) ===== */
function setupForm(){
  const form = $("#form");
  form.addEventListener("submit",e=>{
    e.preventDefault();
    let ok = true;
    const rules = {name:v=>v.trim()?"":"Isi nama Anda.",email:v=>/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)?"":"Masukkan email yang valid.",subject:v=>v.trim()?"":"Isi subjek.",message:v=>v.trim().length>=10?"":"Pesan minimal 10 karakter."};
    for(const k in rules){ const el = form.elements[k], m = rules[k](el.value); $("#e-"+k).textContent = m; el.setAttribute("aria-invalid",!!m); if(m) ok = false; }
    if(!ok) return;
    if(!CONFIG.email){ $("#formNote").textContent = "Alamat email tujuan belum diisi di CONFIG (js/script.js), jadi Gmail belum bisa dibuka."; return; }
    const f = form.elements, b = `Dari: ${f.name.value} (${f.email.value})\n\n${f.message.value}`;
    const url = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(CONFIG.email)}&su=${encodeURIComponent(f.subject.value)}&body=${encodeURIComponent(b)}`;
    if(!window.open(url,"_blank","noopener")) location.href = url; // jika pop-up diblokir, buka di tab ini
    $("#formNote").textContent = "Gmail dibuka di tab baru. Login jika diminta, lalu tekan Kirim di sana untuk mengirim pesan.";
  });
}


/* ===== 9. EFEK INTERAKTIF (otomatis nonaktif jika pengguna memilih reduced motion) ===== */
function setupFX(){
  const RM = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const fine = matchMedia("(hover: hover) and (pointer: fine)").matches;
  // Progress scroll di atas halaman
  const bar = document.createElement("div"); bar.className = "progress"; bar.setAttribute("aria-hidden","true"); document.body.prepend(bar);
  const prog = ()=>{ const h = document.documentElement.scrollHeight-innerHeight; bar.style.transform = `scaleX(${h>0?Math.min(scrollY/h,1):0})`; };
  addEventListener("scroll",prog,{passive:true}); prog();
  // Garis timeline tumbuh saat terlihat
  const tl = $$(".timeline");
  if("IntersectionObserver" in window){ const o = new IntersectionObserver(es=>es.forEach(x=>{ if(x.isIntersecting){ x.target.classList.add("grow"); o.unobserve(x.target);} }),{threshold:.2}); tl.forEach(t=>o.observe(t)); }
  else tl.forEach(t=>t.classList.add("grow"));
  // Efek klik (ripple) pada tombol
  document.addEventListener("click",e=>{
    const b = e.target.closest(".btn"); if(!b||RM||b.getAttribute("aria-disabled")==="true") return;
    const r = b.getBoundingClientRect(), d = document.createElement("span"); d.className = "ripple";
    d.style.left = (e.clientX-r.left)+"px"; d.style.top = (e.clientY-r.top)+"px"; b.append(d); setTimeout(()=>d.remove(),650);
  });
  if(RM){ $("#rot").textContent = "data management"; return; }
  // Nama muncul huruf per huruf
  const h1 = $(".hero h1"), name = h1.textContent; h1.setAttribute("aria-label",name);
  let n = 0;
  h1.innerHTML = name.split(" ").map(w=>`<span class="w" aria-hidden="true">${[...w].map(ch=>`<span class="ch" style="--i:${n++}">${ch}</span>`).join("")}</span>`).join(" ");
  // Teks mengetik bergantian
  const rot = $("#rot"), words = ["data management","data verification","project management","system analyst","web development"];
  let w = 0, i = 0, del = false;
  (function tick(){
    const word = words[w]; rot.textContent = word.slice(0,i); let d = del?35:70;
    if(!del && i===word.length){ del = true; d = 1400; }
    else if(del && i===0){ del = false; w = (w+1)%words.length; d = 350; }
    else i += del?-1:1;
    setTimeout(tick,d);
  })();
  if(!fine) return;
  // Sorotan dan parallax halus di hero mengikuti kursor
  const hero = $(".hero");
  hero.addEventListener("pointermove",e=>{
    const r = hero.getBoundingClientRect(), x = (e.clientX-r.left)/r.width, y = (e.clientY-r.top)/r.height;
    hero.style.setProperty("--mx",x*100+"%"); hero.style.setProperty("--my",y*100+"%");
    hero.style.setProperty("--px",(x-.5)*2); hero.style.setProperty("--py",(y-.5)*2);
  });
  // Kartu miring 3D + kilau, tombol magnetik (delegasi event agar kartu hasil filter ikut)
  let card = null, mag = null;
  const resetCard = ()=>{ if(card){ card.style.transition = "transform .5s cubic-bezier(.2,.8,.2,1)"; card.style.transform = ""; card = null; } };
  const resetMag = ()=>{ if(mag){ mag.style.translate = ""; mag = null; } };
  document.addEventListener("pointermove",e=>{
    const c = e.target.closest(".proj,.photo-card,.cert");
    if(card && card!==c) resetCard();
    if(c){
      card = c; const r = c.getBoundingClientRect(), x = (e.clientX-r.left)/r.width, y = (e.clientY-r.top)/r.height;
      c.style.transition = "transform .12s"; c.style.transform = `perspective(900px) rotateX(${(.5-y)*8}deg) rotateY(${(x-.5)*10}deg) translateY(-4px)`;
      c.style.setProperty("--gx",x*100+"%"); c.style.setProperty("--gy",y*100+"%");
    }
    const b = e.target.closest(".cta .btn,.nav-tools .btn");
    if(mag && mag!==b) resetMag();
    if(b){ mag = b; const r = b.getBoundingClientRect(); b.style.translate = `${(e.clientX-r.left-r.width/2)*.22}px ${(e.clientY-r.top-r.height/2)*.3}px`; }
  });
  document.addEventListener("pointerout",e=>{ if(!e.relatedTarget){ resetCard(); resetMag(); } });
}

render(); setupCV(); setupUI(); setupForm(); setupFX();
