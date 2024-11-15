const faNavbarData = {
  title: "朱奔超",
  Home: " خانه ",
  publications: " مقالات ",
  Research: " تحقیقات ",
  Jobs: " سوابق شغلی ",
  Contact: " ارتباط با من ",
};

const faHomePageData = {
  name: "朱奔超",
  jobTitle: "复旦大学",
  home_title: "自我介绍",
  home_content: ` 
  <div>
    <p> 你好，我是朱奔超，复旦大学微电子学院硕士研究生在读。目前，我的研究方向是电子设计自动化（EDA），尤其是在布局布线算法方面。 </p>
    <h2 class='title'> 教育背景 </h2>
    <div class="cventry">
      <div class="company">复旦大学</div>
      <div class="location">中国上海</div>
    </div>
    <div class="cventry">
      <div class="cv-title">电子信息(硕士)</div>
      <div class="date">2022年9月 - 2025年6月</div>
    </div>
    <div class="cventry">
      <div class="company">复旦大学</div>
      <div class="location">中国上海</div>
    </div>
    <div class="cventry">
      <div class="cv-title">微电子科学与工程(学士)</div>
      <div class="date">2018年9月 - 2022年6月</div>
    </div>
    <h2 class='title'> 竞赛 </h2>
    <div class="cventry">
      <div class="company">2023 ISPD Contest (Security Closure of Physical Layouts)</div>
      <div class="location">第一名</div>
    </div>
    <div class="cventry">
      <div class="company">2024 ISPD Contest (GPU/ML-Enhanced Large Scale Global Routing)</div>
      <div class="location">第五名</div>
    </div>
    <div class="cventry">
      <div class="company">2024 ICCAD Contest (Power and Timing Optimization Using Multibit Flip-Flop)</div>
      <div class="location">第四名</div>
    </div>
    <h2 class='title'> 论文 </h2>
    <ul>
      <li>
      <strong>Late Breaking Results: Mixed-Cell-Height Detailed Placement under Multi-Cell Spacing Constraints</strong><br>
      <strong>Benchao Zhu</strong>, Zheng Zeng, and Jianli Chen<br>
      <em>61st ACM/IEEE Design Automation Conference (DAC), 2024.</em>
    </li>
    <li>
      <strong>Effective Analytical Placement for Advanced Hybrid-Row-Height Circuit Designs</strong><br>
      Yuan Wen, <strong>Benchao Zhu</strong>, Zhifeng Lin, and Jianli Chen<br>
      <em>29th Asia and South Pacific Design Automation Conference (ASPDAC), 2024.</em>
    </li>
    <li>
      <strong>Mixed-cell-height Placement with Minimum-Implant-Area and Drain-to-Drain Abutment Constraints</strong><br>
      Guohao Chen, Zheng Zeng, <strong>Benchao Zhu</strong>, Jiawei Li, Kun Wang, Jun Yu, and Jianli Chen<br>
      <em>60th ACM/IEEE Design Automation Conference (DAC), 2023.</em>
    </li>
    </ul>
  </div>
  `,
};

const faPublicationsPageData = {
  type_one_title: "مقالات منتشر شده",

  type_one_items: [
    {
      title: `رقصیدن با ضربان تغییرات اقلیمی: مطالعه فریم‌های بصری در TikTok از طریق شکاف چپ و راست میان سیاستمداران ایالات متحده (با ). `,
      abstract: `سیاستمداران در سراسر طیف سیاسی در تلاش برای دسترسی به رای دهندگان جوان با تولید ویدیوهای اصلی به TikTok رفته اند. این روند جدید، TikTok را به حلقه قطبی جدید در نبرد ارتباطات سیاسی تبدیل کرده است و نفوذ حزبی در مورد موضوعاتی مانند تغییرات آب و هوا را عمیق تر می کند. با این حال `,
      date: "",
      link: "http://link.com",
      github: "",
      writers: ["علی احمدی", " سارا امینی "],
    },
    {
      title: ` "اکنون شما به زبان من صحبت می کنید" شفافیت ویژه زبان و مذاکرات قانونی در شورای وزیران اتحادیه اروپا. (با ).`,
      abstract: `سیاستمداران در سراسر طیف سیاسی در تلاش برای دسترسی به رای دهندگان جوان با تولید ویدیوهای اصلی به TikTok رفته اند. این روند جدید، TikTok را به حلقه قطبی جدید در نبرد ارتباطات سیاسی تبدیل کرده است و نفوذ حزبی در مورد موضوعاتی مانند تغییرات آب و هوا را عمیق تر می کند. با این حال `,
      date: "1996",
      link: "",
      github: "http://github.com",
      writers: ["علی احمدی"],
    },
  ],

  type_two_title: "مقالات تحت بررسی ",
  type_two_items: [
    {
      title: `رقصیدن با ضربان تغییرات اقلیمی: مطالعه فریم‌های بصری در TikTok از طریق شکاف چپ و راست میان سیاستمداران ایالات متحده (با ). `,
      abstract: `سیاستمداران در سراسر طیف سیاسی در تلاش برای دسترسی به رای دهندگان جوان با تولید ویدیوهای اصلی به TikTok رفته اند. این روند جدید، TikTok را به حلقه قطبی جدید در نبرد ارتباطات سیاسی تبدیل کرده است و نفوذ حزبی در مورد موضوعاتی مانند تغییرات آب و هوا را عمیق تر می کند. با این حال `,
      date: "",
      link: "http://link.com",
      github: "",
      writers: [],
    },
    {
      title: ` "اکنون شما به زبان من صحبت می کنید" شفافیت ویژه زبان و مذاکرات قانونی در شورای وزیران اتحادیه اروپا. (با ).`,
      abstract: `سیاستمداران در سراسر طیف سیاسی در تلاش برای دسترسی به رای دهندگان جوان با تولید ویدیوهای اصلی به TikTok رفته اند. این روند جدید، TikTok را به حلقه قطبی جدید در نبرد ارتباطات سیاسی تبدیل کرده است و نفوذ حزبی در مورد موضوعاتی مانند تغییرات آب و هوا را عمیق تر می کند. با این حال `,
      date: "1996",
      link: "http://link.com",
      github: "http://github.com",
      writers: ["علی احمدی", " سارا امینی "],
    },
  ],

  type_three_title: "فصل های کتاب ",
  type_three_items: [
    {
      title: `رقصیدن با ضربان تغییرات اقلیمی: مطالعه فریم‌های بصری در TikTok از طریق شکاف چپ و راست میان سیاستمداران ایالات متحده (با ). `,
      abstract: `سیاستمداران در سراسر طیف سیاسی در تلاش برای دسترسی به رای دهندگان جوان با تولید ویدیوهای اصلی به TikTok رفته اند. این روند جدید، TikTok را به حلقه قطبی جدید در نبرد ارتباطات سیاسی تبدیل کرده است و نفوذ حزبی در مورد موضوعاتی مانند تغییرات آب و هوا را عمیق تر می کند. با این حال `,
      date: "",
      link: "http://link.com",
      github: "",
      writers: [],
    },
    {
      title: ` "اکنون شما به زبان من صحبت می کنید" شفافیت ویژه زبان و مذاکرات قانونی در شورای وزیران اتحادیه اروپا. (با ).`,
      abstract: `سیاستمداران در سراسر طیف سیاسی در تلاش برای دسترسی به رای دهندگان جوان با تولید ویدیوهای اصلی به TikTok رفته اند. این روند جدید، TikTok را به حلقه قطبی جدید در نبرد ارتباطات سیاسی تبدیل کرده است و نفوذ حزبی در مورد موضوعاتی مانند تغییرات آب و هوا را عمیق تر می کند. با این حال `,
      date: "1996",
      link: "http://link.com",
      github: "http://github.com",
      writers: ["علی احمدی"],
    },
  ],

  type_four_title: "",
  type_four_items: [],
};

const faResearchPageData = {
  title: " تحقیقات ",
  content: `
    <div class='research_content'>
        <p>هدف تحقیق من ترکیب سه زیر زمینه اصلی علوم اجتماعی محاسباتی، از جمله تجزیه و تحلیل داده های رسانه های اجتماعی، تجزیه و تحلیل شبکه، و مدل سازی مبتنی بر عامل، برای مطالعه مسائل مختلف علوم اجتماعی است. در زیر می توانید خلاصه ای از پروژه های گذشته و فعلی من را مشاهده کنید. </p>
        <h2> شناسایی و شناسایی افراط گرایان ایدئولوژیک داخلی ایالات متحده </h2>
        <p> لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد. </p>
        <img src='../files/images/research.png' />
        <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.</p>
    </div>
  `,
};

const faJobsPageData = {
  title: " سوابق شغلی ",
  items: [
    {
      title: `عنوان شغلی `,
      company: " نام شرکت ",
      startData: "11 شهریور 1401 ",
      endDate: "11 مرداد 1402",
      location: " برلین ",
      abstract:
        "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.",
      achievements: [" دستاورد 1 ", " دستاورد 2 ", " دستاورد 3 "],
    },
    {
      title: `عنوان شغلی `,
      company: " نام شرکت ",
      startData: "11 شهریور 1401 ",
      endDate: "",
      location: " برلین ",
      abstract:
        " لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. ",
      achievements: [" دستاورد 1 ", " دستاورد 2 "],
    },
  ],
};
