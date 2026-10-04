const $=id=>document.getElementById(id);
async function send(action){
 const api=$("api").value.trim().replace(/\/$/,"");
 const key=$("key").value.trim();
 if(!api||!key){$("status").textContent="Isi URL API dan Panel Key.";return}
 const body={action,songId:$("id").value.trim(),songName:$("name").value.trim(),playSpeed:Number($("speed").value),volume:Number($("vol").value)};
 try{
  const r=await fetch(api+"/api/dj",{method:"POST",headers:{"Content-Type":"application/json","x-panel-key":key},body:JSON.stringify(body)});
  const d=await r.json();
  $("status").textContent=d.ok?"✅ Perintah terkirim: "+action:"❌ "+(d.error||"Gagal");
 }catch(e){$("status").textContent="❌ API tidak bisa dihubungi."}
}