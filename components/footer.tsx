import { Github, Twitter, Linkedin, Coffee } from "lucide-react"

const Footer = () => {
  return (
    <footer className="py-12 border-t border-gray-200">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-1">Taylor Labs</h3>
            <p className="text-gray-500">Transforming ideas into impactful solutions</p>
          </div>

          <div className="flex items-center space-x-6">
            <a href="mailto:hello@taylorlabs.co" className="text-gray-600 hover:text-purple-600 transition-colors">
              hello@taylorlabs.co
            </a>

            <div className="flex space-x-3">
              <a
                href="https://twitter.com/evantaylor1104"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center hover:bg-purple-100 hover:text-purple-600 transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={16} />
              </a>
              <a
                href="https://www.linkedin.com/in/evan-l-taylor/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center hover:bg-purple-100 hover:text-purple-600 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={16} />
              </a>
              <a
                href="https://github.com/evan-taylor"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center hover:bg-purple-100 hover:text-purple-600 transition-colors"
                aria-label="GitHub"
              >
                <Github size={16} />
              </a>
              <a
                href="https://buymeacoffee.com/evan.taylor"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center hover:bg-purple-100 hover:text-purple-600 transition-colors"
                aria-label="Buy Me A Coffee"
              >
                <Coffee size={16} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-gray-100 text-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} Taylor Labs, LLC. All rights reserved.</p>
          <p className="mt-2">Mailing Address: 2261 Market Street #86329, San Francisco, CA 94114</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
