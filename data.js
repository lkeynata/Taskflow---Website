export let tasks=[
{id:1,title:'Menyelesaikan Mini Project',course:'Backend Basic',deadline:'2026-10-24',status:'Belum Selesai',priority:'Tinggi'},
{id:2,title:'Membuat rangkuman materi',course:'Sistem Informasi',deadline:'2026-10-26',status:'Selesai',priority:'Sedang'},
{id:3,title:'Belajar JavaScript ES6',course:'Pemrograman Web',deadline:'2026-10-28',status:'Belum Selesai',priority:'Sedang'}
];
export const replaceTasks=(next)=>{tasks=next;};
