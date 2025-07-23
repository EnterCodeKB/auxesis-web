//http://localhost:3000/dev/upload/
"use client";

import UploadSearchPages from "@/components/UploadSearchPages";
import UploadSearchPagesEn from "@/components/UploadSearchPagesEn";

export default function DevPage() {
  return (
    <div>
      <h1>🔧 Dev-verktyg: Ladda upp sidor</h1>
      <UploadSearchPages />
      <UploadSearchPagesEn />
    </div>
  );
}
