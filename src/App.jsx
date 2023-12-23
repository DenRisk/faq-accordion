import TopTeaserDesktop from './assets/images/TopTeaserDesktop.svg'
import Star from './assets/images/icon-star.svg'
import Toggle from './components/toggle'

const faqs = [
  {
    id: 1,
    triggerText: 'What is Frontend Mentor, and how will it help me',
    contentText: 'Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It’s suitable for all levels and ideal for portfolio building.'
  },
  {
    id: 2,
    triggerText: 'Is Frontend Mentor free?',
    contentText: 'Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It’s suitable for all levels and ideal for portfolio building.'
  },
  {
    id: 3,
    triggerText: 'Can I use Frontend Mentor projects in my portfolio?',
    contentText: 'Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It’s suitable for all levels and ideal for portfolio building.'
  },,
  {
    id: 4,
    triggerText: 'How can I get help if I am stuck on a challenge?',
    contentText: 'Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It’s suitable for all levels and ideal for portfolio building.'
  }
]



function App() {
  return (
    <div className="bg-lightPurple min-h-screen flex flex-col">
      <img className='w-full object-cover h-72' src={TopTeaserDesktop} alt='desktopTeaser'/>
      <div className='px-4'>
      <div className='bg-white w-full max-w-xl mx-auto p-10 relative bottom-32 rounded-2xl'>
        <div className='flex gap-4 mb-2'>
          <img src={Star} alt="star" />
          <h1 className='text-5xl font-bold text-darkPurple'>FAQ's</h1>
        </div>
        <div>
        {faqs.map((faq) => (
          <Toggle key={faq.id} triggerText={faq.triggerText} contentText={faq.contentText}/>
        ))}
      </div>
      </div>
    </div>
    </div>
  )
}

export default App
