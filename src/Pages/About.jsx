import { Leaf, ShoppingBag, Heart, Truck } from "lucide-react"
import FreshMart from "../assets/FreshMart.jpg"

const values = [
  {
    title: "Freshness",
    para: "We're committed to providing the freshest produce and products, sourced locally whenever possible.",
    logo: <Leaf className="h-8 w-8" />
  },
  {
    title: "Quality",
    para: "We carefully select every product on our shelves to ensure the highest quality for our customers.",
    logo: <ShoppingBag className="h-8 w-8" />
  },
  {
    title: "Community",
    para: "We're proud to support local farmers, producers, and community initiatives in every neighborhood we serve.",
    logo: <Heart className="h-8 w-8" />
  },
  {
    title: "Sustainability",
    para: "We're committed to environmentally friendly practices and reducing our carbon footprint.",
    logo: <Truck className="h-8 w-8" />
  }
]

const About = () => {
  return (
    <div className="">
      <div className="max-w-6xl mx-auto py-12 px-4 mt-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4 ai-gradient-text">About FreshMart</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Your neighborhood grocery store committed to providing fresh, quality products since 2005.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center md:mb-20">
          <div>
            <h2 className="text-3xl font-semibold mb-6 text-white">Our Story</h2>
            <div className="space-y-4 text-gray-300">
              <p>
                FreshMart began with a simple idea: to create a grocery store that offers the freshest produce, highest
                quality meats, and finest selection of everyday essentials at fair prices.
              </p>
              <p>
                Founded in 2005 by the Johnson family, our first store opened in Grocery City with just 15 employees.
                Today, we've grown to 25 locations across the state, but our commitment to quality and community remains
                unchanged.
              </p>
              <p>
                We work directly with local farmers and producers to bring you the best products while supporting our
                local economy. Our team members are passionate about food and dedicated to providing exceptional customer
                service.
              </p>
            </div>
          </div>
          <div className="relative overflow-hidden">
            <img
              src={FreshMart}
              alt="FreshMart store front"
              className="object-cover rounded-lg border border-white/10 w-full"
            />
          </div>
        </div>

        <div className="mb-20 mt-10">
          <h2 className="text-3xl font-semibold mb-10 text-center text-white">Our Values</h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6 ">
            {
              values.map((item, index) => {
                return <div key={index} className="border-t-4 border-1 rounded-md border-purple-500 glass-card">
                  <div className="py-6">
                    <div className="flex flex-col items-center text-center">
                      <div className="bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 p-3 rounded-full mb-4 text-purple-400 border border-purple-500/30">
                        {item.logo}
                      </div>
                      <h3 className="text-xl font-medium mb-2 text-white">{item.title}</h3>
                      <p className="text-gray-300 px-4">
                        {item.para}
                      </p>
                    </div>
                  </div>
                </div>
              })
            }

          </div>
        </div>



        <div className="glass-card p-8 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4 text-white text-center">Join the FreshMart Family</h2>
          <p className="text-center text-gray-300 mb-6">
            We're always looking for passionate individuals to join our team. Check out our current openings!
          </p>
          <div className="flex justify-center">
            <a
              href="/careers"
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 hover:opacity-90 transition-opacity shadow-lg shadow-purple-500/30"
            >
              View Career Opportunities
            </a>
          </div>
        </div>
      </div>

    </div>
  )
}

export default About;