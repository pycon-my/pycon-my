import { Card } from "@/components/ui/card"
import FooterLink from "@/components/footer-link"

const cardHeaderContent = {
    title: "About Us",
}

const aboutContent = {
    markdownDescription: true,
    description: `Since its first inception in 1991, the usage of the Python programming \
language has increased explosively in the past years. Python is now being \
used in multitude industries, from the web, to film production in \
Industrial Light and Magic and even for NASA.

PyCons are conferences about Python and usually done by grassroots volunteers \
within their geographical area. PyCon started first in the United States in \
2003 in Washington D.C, and have grown worldwide and done yearly in many regions \
and countries like Europe, Japan, Australia, Singapore, China South Korea, \
India and Malaysia.

Malaysia had its first mini PyCon in 2014. In 2015, we had our first big PyCon \
MY. After organizing PyCon MY for many years, we realized that getting the \
Python community to get together for a few days a year to share knowledge and \
compare experiences allows the growth of ideas and also the exchange of skills, \
which will lead to a spillover of greater cooperation even after the conference \
is over. Stronger ties between developers and users of Python can be nurtured \
better when there is real human interaction, which is a big plus to the \
community. But we need to have continuity and provide the opportunity for people \
to get together to see the effects in the long run, and just providing a space \
for a few days a year for people to get together doesn't seem to be enough. \
There should be more to that, because continuity and horizontal connections are \
the key.

In order for us to have continuity and transparency going forward (especially \
concerning sponsorship monies), on 17th Dec 2015, we have incorporated PYCON \
MY PLT (LLP0006642-LGN) as a Limited Liability Partnership under the laws of \
Malaysia.

The board can be contactable via [board@pycon.my](mailto:board@pycon.my).

As defined in its contract of incorporation, PYCON MY PLT's purpose are as \
follow:

- Organizing and hosting a yearly PyCon MY
- Organizing and hosting PyCon APAC in replace of the yearly PyCon MY when deemed appropriate and able
- Support and/or organize python related events and workshop within Malaysia and Asia Pacific
- Work together with other communities in a particular python and in general Open Source Software (OSS)
- Work together with other related groups within Malaysia and the rest of the world to further expand the usage and increase users of OSS.

From 2016, PyCon MY and PyCon APAC will be organized and managed by PYCON MY \
PLT, with PYCON MY PLT be the beneficiary of any sponsorship. We will \
also try to work with other python or open source communities to organize events \
beneficial to the community as a whole.`
}

export default function AboutUs() {
    return (
        <>
            <div className="flex flex-col items-center space-y-8 justify-center p-4">
                <Card 
                    variant="corners" 
                    {...cardHeaderContent} 
                    className="bg-background max-w-[90%] md:max-w-[70%]" 
                />
                <Card 
                    {...aboutContent} 
                    className="bg-background max-w-[90%] md:max-w-[70%]" 
                />
            </div>
            <FooterLink />
        </>
    )
}

