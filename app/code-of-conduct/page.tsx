import { Card } from "@/components/ui/card"
import FooterLink from "@/components/footer-link"

const cardHeaderContent = {
    title: "Code of Conduct",
}

const cocContent = {
    markdownDescription: true,
    description: `PyCon is a community conference intended for networking and collaboration in and between the Python developer and user communities.

We value the participation of each member of the Python community and want all attendees to have an enjoyable and fulfilling experience. Accordingly, all attendees are expected to show respect and courtesy to other attendees throughout the conference and at all conference events, whether officially sponsored by PyCon or not.

To make clear what is expected, all delegates/attendees, speakers, exhibitors, organizers and volunteers at any PyCon event are required to conform to the following Code of Conduct (CoC). Organizers will enforce this code throughout the event.`
} 

const cocShortContent = {
    markdownDescription: true,
    title: "Short Version",
    description: `1. PyCon is dedicated to providing a harassment-free conference experience for everyone, regardless of gender, sexual orientation, disability, physical appearance, body size, race, or religion. We do not tolerate harassment of conference participants in any form.
  
  2. All communication should be appropriate for a professional audience including people of many different backgrounds.
  
  3. Sexual language and imagery is not appropriate for any conference venue, including talks.
  
  4. Be kind to others. Do not insult or put down other attendees. Behave professionally. Remember that harassment and sexist, racist, or exclusionary jokes are not appropriate for PyCon.
  
  5. Attendees violating these rules may be asked to leave the conference without a refund at the sole discretion of the conference organizers.
  
  Thank you for helping make this a welcoming, friendly event for all.`
  }

  const cocLongContent = {
    markdownDescription: true,
    title: "Long Version",
    description: `1. Harassment includes offensive verbal comments related to gender, sexual orientation, disability, physical appearance, body size, race, religion, sexual images in public spaces, deliberate intimidation, stalking, following, harassing photography or recording, sustained disruption of talks or other events, inappropriate physical contact, and unwelcome sexual attention.

2. Participants asked to stop any harassing behavior are expected to comply immediately.

3. Exhibitors in the expo hall, sponsor or vendor booths, or similar activities are also subject to the anti-harassment policy. In particular, exhibitors should not use sexualized images, activities, or other material. Booth staff (including volunteers) should not use sexualized clothing/uniforms/costumes, or otherwise create a sexualized environment.

4. Be careful in the words that you choose. Remember that sexist, racist, and other exclusionary jokes can be offensive to those around you. Excessive swearing and offensive jokes are not appropriate for PyCon.

5. If a participant engages in behavior that violates this code of conduct, the conference organizers may take any action they deem appropriate, including warning the offender or expulsion from the conference with no refund.`
}

const cocContactContent = {
    markdownDescription: true,
    title: "Contact Information",
    description: `1. If you are being harassed, notice that someone else is being harassed, or have any other concerns, please contact a member of conference staff. Conference staff will be wearing "Staff" t-shirts, or similar items to identify them as staff. You may also contact venue staff and ask to be put in touch with the conference chair.

2. If the matter is especially urgent, please call/contact the emergency contact person(s) which will be supplied to all participants for a particular PyCon event.

3. Conference staff will be happy to help participants contact hotel/venue security or local law enforcement, provide escorts, or otherwise assist those experiencing harassment to feel safe for the duration of the conference. We value your attendance.

---

This Code of Conduct is based on the [PyCon US Code of Conduct](https://us.pycon.org/2021/about/code-of-conduct/)`
}
export default function CodeOfConduct() {
  return (
    <>
    <div className="flex flex-col items-center space-y-8 justify-center p-4">
      <Card variant="corners" {...cardHeaderContent} className="bg-background max-w-[90%] md:max-w-[70%]" />
      <Card {...cocContent} className="bg-background max-w-[90%] md:max-w-[70%]" />
      <Card {...cocShortContent} className="bg-background max-w-[90%] md:max-w-[70%]" />
      <Card {...cocLongContent} className="bg-background max-w-[90%] md:max-w-[70%]" />
      <Card {...cocContactContent} className="bg-background max-w-[90%] md:max-w-[70%]" />
    </div>
    <FooterLink />
    </>
  )
}

