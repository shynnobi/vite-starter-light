import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';

function TypographyGuide() {
  return (
    <div className="min-h-screen bg-background text-foreground p-8">
      <div className="max-w-3xl mx-auto">
        <div className="mb-8">
          <Link to="/" className="text-primary hover:underline flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mr-2"
            >
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            Back to Home
          </Link>
        </div>

        <section className="space-y-4 mb-16">
          <h1 className="text-h2">Typography Guide</h1>
          <p className="text-muted-foreground">
            A complete guide to our text styles and components.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-h3 mb-4">Headings</h2>
          <div className="space-y-4">
            <h1 className="text-h1">Heading 1</h1>
            <h2 className="text-h2">Heading 2</h2>
            <h3 className="text-h3">Heading 3</h3>
            <h4 className="text-h4">Heading 4</h4>
            <h5 className="text-h5">Heading 5</h5>
            <h6 className="text-h6">Heading 6</h6>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-h3 mb-4">Paragraphs & Links</h2>
          <div className="space-y-4">
            <p className="leading-7">
              This is a regular paragraph with a{' '}
              <a
                href="#"
                className="font-medium text-primary underline underline-offset-4 hover:text-primary/80"
              >
                link inside it
              </a>
              . The paragraph continues with more text to demonstrate line height and spacing.
            </p>
            <p className="leading-7">
              A second paragraph to show spacing between paragraphs. You can also have{' '}
              <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold">
                inline code
              </code>{' '}
              elements.
            </p>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-h3">Lists</h2>
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h3 className="text-h4 mb-4">Unordered List</h3>
              <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
                <li>First item in list</li>
                <li>Second item in list</li>
                <li>Third item in list</li>
              </ul>
            </div>
            <div>
              <h3 className="text-h4 mb-4">Ordered List</h3>
              <ol className="my-6 ml-6 list-decimal [&>li]:mt-2">
                <li>First item in list</li>
                <li>Second item in list</li>
                <li>Third item in list</li>
              </ol>
            </div>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-h3">Blockquotes</h2>
          <blockquote className="mt-6 border-l-2 border-primary pl-6 italic">
            "The best way to predict the future is to invent it."
            <br />— Alan Kay
          </blockquote>
        </section>

        <section className="mb-10">
          <h2 className="text-h3">Buttons</h2>
          <div className="flex flex-wrap gap-4">
            <Button variant="default" className="text-md">
              Default Button
            </Button>
            <Button variant="secondary">Secondary Button</Button>
            <Button variant="outline">Outline Button</Button>
            <Button variant="ghost">Ghost Button</Button>
            <Button variant="destructive">Destructive Button</Button>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-h3">Code Block</h2>
          <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold block p-4">
            {`const greeting = "Hello, World!";
console.log(greeting);`}
          </code>
        </section>
      </div>
    </div>
  );
}

export default TypographyGuide;
