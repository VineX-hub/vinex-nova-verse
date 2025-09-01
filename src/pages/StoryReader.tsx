import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight, Play, Pause, SkipForward, Bookmark, BookmarkCheck, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Card, CardContent } from "@/components/ui/card";
import story1 from "@/assets/story-1.jpg";

const StoryReader = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [showAdModal, setShowAdModal] = useState(false);
  const [adCountdown, setAdCountdown] = useState(5);
  const [slidesSinceAd, setSlidesSinceAd] = useState(0);
  const audioRef = useRef<HTMLAudioElement>(null);

  // Sample story data
  const story = {
    title: "The Enchanted Forest",
    author: "Sarah Chen",
    totalSlides: 15,
  };

  const slides = [
    {
      type: "intro",
      title: "The Enchanted Forest",
      author: "Sarah Chen",
      content: "Welcome to an immersive reading experience. Use the audio controls to listen to the story introduction, then navigate through each chapter at your own pace.",
      hasAudio: true,
      background: story1
    },
    {
      type: "chapter",
      title: "Chapter 1: The Discovery",
      content: "",
      background: story1
    },
    {
      type: "content",
      title: "",
      content: "Elena had always been drawn to the old forest at the edge of her village. The towering oaks and ancient pines seemed to whisper secrets in languages she couldn't understand, yet somehow felt familiar. Today, on her sixteenth birthday, she decided to venture deeper than ever before. The morning mist clung to the ground like ghostly fingers, and shafts of golden sunlight pierced through the canopy above, creating a natural cathedral of light and shadow. As she walked deeper into the woods, the familiar sounds of civilization faded away, replaced by the gentle rustling of leaves and the distant call of birds she'd never heard before.",
      background: ""
    },
    {
      type: "content", 
      title: "",
      content: "Her grandmother's warnings echoed in her mind: 'Never venture beyond the old stone marker, child. The forest holds magic that even I cannot fully understand.' But Elena had always been curious, and today felt different somehow. The very air seemed charged with possibility. She continued forward, her heart pounding with a mixture of excitement and nervousness. The path beneath her feet was well-worn, suggesting others had walked this way before, though she'd never seen anyone else brave enough to come this far into the mysterious woodland that bordered their small village.",
      background: ""
    },
    {
      type: "content",
      title: "",
      content: "That's when she saw it – a glimmer of silver light dancing between the trees ahead. It moved with purpose, beckoning her forward like a will-o'-the-wisp from the old stories. Elena hesitated for a moment, remembering her grandmother's tales of travelers who followed such lights and were never seen again. But something about this light felt different, welcoming rather than menacing. Against her better judgment, she followed it deeper into the forest, where ancient magic still flowed through the roots and branches of trees older than memory itself.",
      background: ""
    },
    {
      type: "chapter",
      title: "Chapter 2: The Guardian",
      content: "",
      background: story1
    },
    {
      type: "content",
      title: "",
      content: "The silver light led Elena to a clearing she had never seen before, despite having explored these woods for years. In the center stood a majestic tree, its trunk so wide that ten people holding hands couldn't encircle it. The bark shimmered with an otherworldly luminescence, and its leaves seemed to catch and reflect light that didn't come from the sun. Carved into the trunk were symbols that hurt her eyes to look at directly, yet filled her with a strange sense of recognition. This was no ordinary tree – this was something ancient and powerful.",
      background: ""
    },
    {
      type: "content",
      title: "",
      content: "As Elena approached the tree, the air grew thick with magic. She could feel it tingling against her skin, raising the fine hairs on her arms. The silver light that had guided her here suddenly coalesced into a figure – tall and ethereal, with features that seemed to shift like moonlight on water. 'Welcome, Elena,' the figure spoke, its voice like wind through leaves. 'We have been waiting for you.' The young woman's breath caught in her throat. How did this mysterious being know her name? And who exactly had been waiting for her in this enchanted place?",
      background: ""
    },
    {
      type: "content",
      title: "",
      content: "'I am Lyralei, Guardian of the Sacred Grove,' the figure continued, gesturing to the magnificent tree behind them. 'Your grandmother was right to warn you about the forest's magic, but she never told you the whole truth, did she?' Elena shook her head, unable to find her voice. 'You carry the bloodline of the Forest Keepers, child. Magic flows through your veins just as it flows through these ancient roots. Today, on your sixteenth birthday, your true journey begins.' The guardian extended a hand that seemed to be made of starlight and shadow. 'Will you accept your destiny?'",
      background: ""
    },
    // Continue with more slides...
    {
      type: "content",
      title: "",
      content: "Elena stared at the outstretched hand, her mind reeling with questions and possibilities. Everything she thought she knew about herself, about her family, about the quiet village life she'd always known, suddenly seemed like just the beginning of a much larger story. The magic in the air pulsed around her, responding to her emotions, growing stronger as her wonder and excitement grew. She could feel something awakening within her – a power that had been dormant, waiting for this exact moment to emerge.",
      background: ""
    },
    {
      type: "chapter",
      title: "Chapter 3: The Choice",
      content: "",
      background: story1
    },
    {
      type: "content",
      title: "",
      content: "Time seemed to slow as Elena considered the guardian's offer. Accept her destiny as a Forest Keeper, and her life would change forever. She would gain powers she'd only dreamed of, but she would also take on responsibilities she couldn't yet fully understand. The weight of generations of Forest Keepers seemed to settle on her shoulders as she stood in that magical clearing, the ancient tree witnessing her moment of decision.",
      background: ""
    },
    {
      type: "content",
      title: "",
      content: "Taking a deep breath, Elena reached out and grasped Lyralei's ethereal hand. The moment their fingers touched, power surged through her like lightning. The world exploded into color as her magical sight awakened – she could see the life force flowing through every plant, every creature, every grain of soil in the forest. The tree before her blazed with ancient wisdom, and she could hear the whispered conversations of the wind through the leaves. She was no longer just Elena from the village. She was Elena, Keeper of the Forest, guardian of magic itself.",
      background: ""
    },
    {
      type: "content",
      title: "",
      content: "'Your training begins now,' Lyralei said with a smile that seemed to light up the entire clearing. 'But first, you must return to your village and say goodbye to your old life. When you are ready, the forest will call to you, and you will know it is time to return. Remember, young Keeper – with great power comes great responsibility. The balance of nature itself may one day rest in your hands.' As the guardian's words faded into the rustling of leaves, Elena knew that her greatest adventure was just beginning.",
      background: ""
    },
    {
      type: "end",
      title: "To Be Continued...",
      content: "Thank you for reading Chapter 1-3 of 'The Enchanted Forest'. Elena's journey into the world of magic has only just begun. Continue reading to discover what challenges await her as she learns to master her newfound powers.",
      background: story1
    }
  ];

  // Handle audio playback
  const toggleAudio = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  // Navigate to next slide
  const nextSlide = () => {
    if (currentSlide < slides.length - 1) {
      const newSlide = currentSlide + 1;
      setCurrentSlide(newSlide);
      setSlidesSinceAd(slidesSinceAd + 1);
      
      // Show ad every 6 slides
      if (slidesSinceAd >= 5) {
        setShowAdModal(true);
        setSlidesSinceAd(0);
        setAdCountdown(5);
      }
    }
  };

  // Navigate to previous slide
  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  // Navigate to specific slide
  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  // Ad countdown timer
  useEffect(() => {
    if (showAdModal && adCountdown > 0) {
      const timer = setTimeout(() => {
        setAdCountdown(adCountdown - 1);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [showAdModal, adCountdown]);

  // Close ad modal
  const closeAdModal = () => {
    if (adCountdown === 0) {
      setShowAdModal(false);
      setAdCountdown(5);
    }
  };

  const currentSlideData = slides[currentSlide];
  const progress = ((currentSlide + 1) / slides.length) * 100;

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="fixed top-0 w-full z-40 bg-gradient-hero text-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <h1 className="text-xl font-bold">{story.title}</h1>
            <span className="text-white/80">by {story.author}</span>
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsBookmarked(!isBookmarked)}
            className="text-white hover:bg-white/20"
          >
            {isBookmarked ? (
              <BookmarkCheck className="w-5 h-5" />
            ) : (
              <Bookmark className="w-5 h-5" />
            )}
          </Button>
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-16 min-h-screen flex flex-col">
        {/* Progress Bar */}
        <div className="w-full bg-muted">
          <Progress value={progress} className="h-1" />
        </div>

        {/* Story Content */}
        <div className="flex-1 flex flex-col justify-center">
          {currentSlideData.type === "intro" && (
            <div
              className="min-h-screen flex items-center justify-center relative bg-cover bg-center"
              style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${currentSlideData.background})` }}
            >
              <div className="text-center text-white max-w-4xl mx-auto px-4">
                <h1 className="text-5xl md:text-6xl font-bold mb-4">{currentSlideData.title}</h1>
                <p className="text-xl mb-8">by {currentSlideData.author}</p>
                <p className="text-lg mb-8 max-w-2xl mx-auto">{currentSlideData.content}</p>
                
                {/* Audio Controls */}
                {currentSlideData.hasAudio && (
                  <div className="flex justify-center items-center space-x-4 mb-8">
                    <Button
                      variant="outline"
                      size="lg"
                      onClick={toggleAudio}
                      className="btn-glass"
                    >
                      {isPlaying ? <Pause className="w-5 h-5 mr-2" /> : <Play className="w-5 h-5 mr-2" />}
                      {isPlaying ? "Pause" : "Play"} Introduction
                    </Button>
                    <Button variant="outline" size="lg" className="btn-glass">
                      <SkipForward className="w-5 h-5 mr-2" />
                      Skip
                    </Button>
                  </div>
                )}
              </div>
              <audio ref={audioRef} src="/story-intro.mp3" />
            </div>
          )}

          {currentSlideData.type === "chapter" && (
            <div
              className="min-h-screen flex items-center justify-center relative bg-cover bg-center"
              style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(${currentSlideData.background})` }}
            >
              <div className="text-center text-white">
                <h2 className="text-4xl md:text-5xl font-bold animate-fade-in">{currentSlideData.title}</h2>
              </div>
            </div>
          )}

          {currentSlideData.type === "content" && (
            <div className="max-w-4xl mx-auto px-4 py-16">
              <Card className="shadow-medium">
                <CardContent className="p-8 md:p-12">
                  <div className="prose prose-lg max-w-none">
                    <p className="text-lg leading-relaxed text-foreground">
                      {currentSlideData.content}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {currentSlideData.type === "end" && (
            <div
              className="min-h-screen flex items-center justify-center relative bg-cover bg-center"
              style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${currentSlideData.background})` }}
            >
              <div className="text-center text-white max-w-2xl mx-auto px-4">
                <h2 className="text-4xl font-bold mb-6">{currentSlideData.title}</h2>
                <p className="text-lg mb-8">{currentSlideData.content}</p>
                <Button size="lg" className="btn-hero">
                  Continue Reading
                </Button>
              </div>
            </div>
          )}
        </div>

        {/* Navigation */}
        <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-30">
          <Card className="bg-white/90 backdrop-blur-md shadow-strong">
            <CardContent className="p-4">
              <div className="flex items-center space-x-6">
                {/* Previous Button */}
                <Button
                  variant="outline"
                  size="sm"
                  onClick={prevSlide}
                  disabled={currentSlide === 0}
                  className="text-primary border-primary/20 hover:bg-primary/10"
                >
                  <ChevronLeft className="w-4 h-4" />
                </Button>

                {/* Slide Dots */}
                <div className="flex space-x-2">
                  {slides.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => goToSlide(index)}
                      className={`w-2 h-2 rounded-full transition-all ${
                        index === currentSlide
                          ? "bg-primary w-6"
                          : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                      }`}
                    />
                  ))}
                </div>

                {/* Next Button */}
                <Button
                  variant="outline"
                  size="sm"
                  onClick={nextSlide}
                  disabled={currentSlide === slides.length - 1}
                  className="text-primary border-primary/20 hover:bg-primary/10"
                >
                  <ChevronRight className="w-4 h-4" />
                </Button>
              </div>

              {/* Progress Text */}
              <div className="text-center mt-2 text-sm text-muted-foreground">
                {currentSlide + 1} of {slides.length}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Ad Modal */}
        {showAdModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80">
            <Card className="max-w-md mx-4 relative">
              <CardContent className="p-8 text-center">
                <div className="mb-6">
                  <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-2xl">Ad</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">Support VineNovels</h3>
                  <p className="text-muted-foreground">
                    This brief message from our sponsors helps keep stories free for everyone.
                  </p>
                </div>

                <div className="bg-gradient-card p-6 rounded-lg mb-6">
                  <p className="text-lg font-semibold mb-2">Premium Reading Experience</p>
                  <p className="text-sm text-muted-foreground">
                    Upgrade to VineNovels Premium for ad-free reading, exclusive content, and early access to new stories.
                  </p>
                </div>

                {adCountdown > 0 ? (
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary mb-2">{adCountdown}</div>
                    <p className="text-sm text-muted-foreground">Continuing in {adCountdown} seconds...</p>
                  </div>
                ) : (
                  <Button onClick={closeAdModal} className="w-full btn-hero">
                    Continue Reading
                  </Button>
                )}

                {adCountdown === 0 && (
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={closeAdModal}
                    className="absolute top-2 right-2"
                  >
                    <X className="w-4 h-4" />
                  </Button>
                )}
              </CardContent>
            </Card>
          </div>
        )}
      </main>
    </div>
  );
};

export default StoryReader;