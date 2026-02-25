import AnimatedGridBackground from "@/components/animatingBackground";
import BackButton from '@/components/BackButton';

export default function NotFound() {
  return (
    <>
      <AnimatedGridBackground/>
      <div className="min-h-screen py-12 px-4 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Speaker Not Found</h1>
          <p className="text-gray-600 mb-8">The speaker you&apos;re looking for doesn&apos;t exist.</p>
          <BackButton />
        </div>
      </div>
    </>
  );
}