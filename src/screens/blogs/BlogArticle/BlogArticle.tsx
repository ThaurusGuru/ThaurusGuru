import { useParams, Navigate } from 'react-router-dom';
import { Volume2, List, Sparkles } from 'lucide-react';
import { getBlogById } from '../../../data/blogData';
import ReactMarkdown from 'react-markdown';

function BlogArticle() {
  const { id } = useParams<{ id: string }>();
  const blog = id ? getBlogById(id) : null;

  // Redirect to blogs page if blog not found
  if (!blog) {
    return <Navigate to="/blogs" replace />;
  }

  const ButtonStyle = {
    display: 'inline-flex',
    padding: '6px 12px',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '6px',
    borderRadius: '20px',
    background: 'rgba(229, 210, 255, 0.20)',
    color: '#FFF',
    fontFamily: '"M PLUS 2", Helvetica',
    fontSize: '15px',
    fontWeight: 700,
    lineHeight: '20px',
    cursor: 'pointer',
    transition: 'all 0.2s',
  };

  return (
    <div className="w-full flex justify-center px-6 lg:px-[100px] pt-[120px] lg:pt-[150px] pb-16 lg:pb-[100px]">
      <div className="w-full max-w-[1240px]">
        {/* Header Section - Title Area and Image */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-[100px] items-start mb-12 lg:mb-16">
          {/* Title Area */}
          <div className="flex flex-col items-start w-full lg:w-[454px]">
            {/* Date Badge */}
            <div 
              className="inline-flex justify-center items-center mb-4 lg:mb-6"
              style={{
                padding: '2px 14px',
                borderRadius: '20px',
                background: 'rgba(229, 210, 255, 0.40)'
              }}
            >
              <span 
                className="font-['Poppins',Helvetica]"
                style={{
                  color: '#FFF',
                  fontSize: '10px',
                  fontWeight: 700,
                  lineHeight: '24px'
                }}
              >
                {blog.date}
              </span>
            </div>

            {/* Title */}
            <h1 
              className="font-['M_PLUS_2',Helvetica] mb-4 lg:mb-6"
              style={{
                color: '#FFF',
                fontSize: 'clamp(28px, 5vw, 36px)',
                fontWeight: 700,
                lineHeight: '1.2'
              }}
            >
              {blog.title}
            </h1>

            {/* Author */}
            <p 
              className="font-['M_PLUS_2',Helvetica]"
              style={{
                color: '#FFF',
                fontSize: '14px',
                fontWeight: 700,
                lineHeight: 'normal'
              }}
            >
              by {blog.author}
            </p>
          </div>

          {/* Image */}
          <div 
            className="w-full lg:w-[686px]"
            style={{ 
              height: 'auto',
              maxHeight: '351px',
              aspectRatio: '686 / 351'
            }}
          >
            <img 
              src={blog.image}
              alt={blog.title}
              className="w-full h-full object-cover rounded-xl lg:rounded-none"
            />
          </div>
        </div>

        {/* Content Section with Sidebar Buttons */}
        <div className="flex flex-col lg:flex-row items-start">
          {/* Left Sidebar - Buttons */}
          <div className="flex flex-col gap-4 mb-8 lg:mb-0 lg:mr-[100px] w-full lg:w-[400px]">
            <div className="flex flex-wrap gap-2 lg:gap-4">
              <button style={ButtonStyle} className="hover:bg-[rgba(229, 210, 255, 0.30)] scale-90 lg:scale-100 origin-left">
                <Volume2 size={16} />
                Listen
              </button>
              <button style={ButtonStyle} className="hover:bg-[rgba(229, 210, 255, 0.30)] scale-90 lg:scale-100 origin-left">
                <List size={16} />
                On this page
              </button>
              <button style={ButtonStyle} className="hover:bg-[rgba(229, 210, 255, 0.30)] scale-90 lg:scale-100 origin-left">
                <Sparkles size={16} />
                AI summary
              </button>
            </div>
          </div>

          {/* Right Content - Article Text */}
          <div className="w-full lg:w-[741px] prose prose-invert prose-headings:text-white prose-p:text-white prose-p:font-['M_PLUS_2',Helvetica] prose-p:text-lg prose-p:font-bold prose-p:leading-normal prose-p:mb-6 prose-h2:font-['M_PLUS_2',Helvetica] prose-h2:text-2xl prose-h2:font-semibold prose-h2:mb-4 prose-h2:mt-8 prose-ul:text-white prose-ul:font-['M_PLUS_2',Helvetica] prose-ul:text-lg prose-ul:font-bold prose-li:mb-2 max-w-none">
            <ReactMarkdown
              components={{
                h2: ({node, ...props}) => <h2 style={{ color: '#FFF', fontFamily: '"M PLUS 2", Helvetica', fontSize: '24px', fontWeight: 600, lineHeight: 'normal', marginBottom: '1rem', marginTop: '2rem' }} {...props} />,
                p: ({node, ...props}) => <p style={{ color: '#FFF', fontFamily: '"M PLUS 2", Helvetica', fontSize: '18px', fontWeight: 700, lineHeight: 'normal', marginBottom: '1.5rem' }} {...props} />,
                ul: ({node, ...props}) => <ul className="list-disc ml-6 mb-6 text-white font-['M_PLUS_2',Helvetica] text-lg font-bold" {...props} />,
                li: ({node, ...props}) => <li className="mb-2" {...props} />,
              }}
            >
              {blog.content}
            </ReactMarkdown>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogArticle;
