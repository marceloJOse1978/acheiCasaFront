"use client";

export default function ShowInformation({keyText, keyValue}: {keyText: string, keyValue: string}) {
  return (
    <div className="select-none">
      <p className="font-semibold text-sm leading-none tracking-normal text-[#D9D9D9]">{keyText}</p>
      <p className="font-medium text-sm leading-none tracking-normal text-[#999999] mt-[3px]">{keyValue}</p>
    </div>
  );
}
