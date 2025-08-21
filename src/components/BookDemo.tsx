import { NotebookPenIcon } from "lucide-react";
import AnimatedButton from "./AnimatedButton";

function BookDemoGridItem({data}:{data:{
  org:string;
  org_text:string;
  image:string;
}}) {
  return <div className="book-demo-grid-item">
    <span className="size-15 rounded-full bg-accent"></span>
    <h4 className="text-base text-center font-bold">{data.org}</h4>
    <p className="text-center text-xs">{data.org_text}</p>
  </div>;
}
export default function BookDemo() {
  return (
    <section className="w-full relative isolate px-peers md:px-container pb-container flex justify-center before:h-1/2 before:absolute before:bg-gradient-to-r before:from-indigo-600 before:via-sky-600 before:to-emerald-600 before:w-full before:left-0 before:bottom-0 before:-z-1">
      <main className="w-full max-w-6xl bg-accent isolate shadow-md shadow-background/30 p-sections sm:p-container md:p-sections rounded-xl grid gap-peers grid-cols-1 sm:grid-cols-[1fr_1fr] lg:grid-cols-[3fr_2fr] items-center">
        {/* content */}
        <div className="w-full flex flex-col gap-peers">
          <h3 className="text-3xl md:text-4xl font-bold gradient-headers">
            Intelligent Human-like AI Agents Built for Enterprise Scale &
            Security
          </h3>
          <p className="text-muted-foreground">
            Zero Engineering Lift | 100+ integrations | Multi-LLM architecture
          </p>
          <AnimatedButton
            Value="Book a demo"
            className="book-demo-btn rounded-tl-full rounded-br-full px-10 py-3 lg:px-13 lg:py-3 mb-3 mt-peers cursor-pointer active:scale-95 scale-100 duration-300 max-w-[20rem] text-primary-foreground text-base sm:text-lg font-bold flex items-center justify-center gap-small">
            <span className="size-5 sm:size-6">
              <NotebookPenIcon className="size-full" />
            </span>
            </AnimatedButton>
        </div>
        {/* grid */}
        <div className="w-full grid grid-cols-2 gap-small">
          <BookDemoGridItem data={{
            org:"HIPAA",
            org_text: "Health Insurance Portability and Accountability Act",
            image:""
          }} />
          <BookDemoGridItem data={{
            org:"ISO 27001",
            org_text: "ISO/IEC 27001.2022 Certification",
            image:""
          }} />
          <BookDemoGridItem data={{
            org:"ISO 27701",
            org_text: "ISO/IEC 27701.2019 Certification",
            image:""
          }} />
          <BookDemoGridItem data={{
            org:"SOC 2 Type II",
            org_text: "SOC 2 Type II Compliant",
            image:""
          }} />
         
        </div>
      </main>
    </section>
  );
}
