import React, { useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import LineCurrency from '../LineCurrency/LineCurrency';
import LineChartEuro from '../LineCurrencyEuro/LineCurrencyEuro';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { addCurrency } from '../redux/action';
import { addEuro } from '../redux/action';
import Container from '@material-ui/core/Container';
import { Typography } from '@material-ui/core';

function Currency() {
  const useStyles = makeStyles({
    tables: {
      fontFamily: ['Roboto', 'Helvetica', 'Arial', 'sans-serif'].join(','),
      padding: '5em',
      width: '100%',
      height: '100%',
      display: 'flex',
      justifyContent: 'center',
    },
    currCard: {
      margin: '0',
      width: '100%',
      padding: '100px',
    },
    container: {
      minHeight: '100vh',
    },
    title: {
      fontSize: '3em',
      textAlign: 'center',
    },
  });

  const classes = useStyles();

  const dispatch = useDispatch();
  const euro = useSelector((state) => state.fetch.euro[0]);

  useEffect(() => {
    if (!euro) {
      console.log('>>>Euro has request');
      dispatch(addEuro());
    }
  }, [dispatch]);

  const dollar = useSelector((state) => state.fetch.usd[0]);

  useEffect(() => {
    if (!dollar) {
      console.log('>>>>>>Dollar has request');
      dispatch(addCurrency());
    }
  }, [dispatch]);

  return (
    <Container
      className={classes.container}
      component="main"
      maxWidth="xl"
      align="justify"
    >
      {/* <Typography className={classes.title}>Forex</Typography> */}
      <Grid className={classes.tables} container spacing={5}>
        <Typography component="h1" variant="h3">
          China Tesla rival Nio is up 240% this year
        </Typography>
        <br />
        <br />
        <br />
        <br />
        <Grid className={classes.currCard} item xs={12} sm={6}>
          <Card>
            <CardContent>
              <LineCurrency />
            </CardContent>
          </Card>
        </Grid>
        <Grid className={classes.currCard} item xs={12} sm={6} align="justify">
          BEIJING — Once on the brink of bankruptcy, one of China’s largest
          electric car makers is pressing ahead with plans to expand to Europe
          and beyond. Nio, which listed in the U.S. nearly two years ago, is
          arguably China’s closest competitor to Tesla. Shares of the Chinese
          start-up plunged more than 80% from their highs last year as financial
          troubles mounted. Since its public offering on the New York Stock
          Exchange, several executives, including one of the founders and
          leaders for Nio in the U.K. and the U.S., have left, in addition to
          many layoffs. Then in the middle of the coronavirus outbreak, Nio
          announced funding talks with the government of Hefei city in
          southeastern China that later resulted in a lifeline of 7 billion yuan
          ($1 billion) from investors, including state-backed entities.
          Meanwhile, vehicle deliveries hit a record 3,740 in June and topped
          10,000 for the second quarter overall, according to Nio. Shares are up
          more than 240% so far this year. “We hope in the second half of next
          year we can begin making some preliminary attempts in some countries
          that are more welcome to electric vehicles,” William Li, founder and
          chairman of Nio, told reporters on Thursday. That’s according to a
          CNBC translation of his Mandarin-language remarks. “We hope to begin
          with Europe,” Li said. He declined to name specific countries, but
          said preparations are already underway for Nio’s plan to enter major
          global markets by year 2023 and 2024. The company still has about 200
          people working in its U.S. office, down from the roughly 600 at its
          peak, according to Li. Nio still has a long way to go with its global
          ambitions if it is to match the scale of Elon Musk’s Tesla. In the
          second quarter alone, Tesla delivered more than 90,000 vehicles
          worldwide. Nearly one-fourth of revenue in the three months ended June
          30 came from China at $1.4 billion, while about half came from the
          U.S. at $3.09 billion. Musk also has his eye on Europe. After
          expanding operations in China with a new factory in Shanghai, the
          second gigafactory outside the U.S. is set for Berlin. Tesla’s stock
          has climbed more than 378% this year and topped $2,000 a share on
          Thursday ahead of a five-for-one stock split for stockholders of
          record on Aug. 21. The economic shock of the coronavirus pandemic hit
          a Chinese auto market already struggling from a months-long slump in
          sales. Automobile sales in the first seven months of the year fell
          12.7% from a year ago, with that of new energy vehicles falling 32.8%,
          according to the Ministry of Industry and Information Technology. New
          energy vehicles, which include pure electric and hybrid cars, posted
          their first sales increase for the year in July, up 19.3%, the
        </Grid>
        <br />
        <br />
        <Typography component="h1" variant="h3">
          U.S. stock futures rise as Wall Street tries to end a record-setting
          week
        </Typography>
        <br />
        <br />
        <Grid className={classes.currCard} item xs={12} sm={6} align="justify">
          U.S. stock futures rose early Friday morning as traders were set to
          end a week which saw the broader market reach a record level. Dow
          Jones Industrial Average futures traded 36 points higher. S&P 500 and
          Nasdaq 100 futures also both traded mildly higher. Earlier this week,
          the S&P 500 broke above its late-February high and notched a fresh
          all-time high. The Nasdaq Composite also hit a record on Thursday. The
          S&P 500 ended Thursday’s session up 0.4% for the week while the Nasdaq
          was up over 2% week to date. The lion’s share of those gains has been
          driven by strong gains in Big Tech stocks. Apple is up nearly 3% this
          week and became the first publicly traded company in the U.S. to reach
          a market valuation of $2 trillion. Amazon and Alphabet have rallied
          over 4% this week and Microsoft is up 2.7% in that time. “These are
          great companies and they are likely to continue to deliver solid
          earnings growth, but one has to wonder if there isn’t too much
          enthusiasm baked into their current stock prices,” said Brian Price,
          head of investment management at Commonwealth Financial Network. “It
          would be constructive for the overall health of the stock market if we
          started to see wider breadth and other sectors showing relative
          strength. We’ve had a few minor rallies in cyclical value-oriented
          sectors off the March lows but none that have been sustainable.”
          Sentiment has been kept in check this week, however, by mixed economic
          data and a warning from the Federal Reserve. The Labor Department said
          Thursday that initial weekly jobless claims came in above 1 million,
          surpassing a Dow Jones estimate of 923,000. To be sure, continuing
          claims decreased by more than 600,000. On Wednesday, the Fed released
          the minutes from its July meeting that said the coronavirus pandemic
          “would weigh heavily on economic activity, employment, and inflation
          in the near term.” The latest data on U.S. existing home sales is due
          for release Friday at 10 a.m. ET.When it comes to a second round of
          $1,200 stimulus checks, there’s good news and bad news. The good news:
          Both political parties have said they want to send Americans more
          direct payments. The bad news: Congress needs to agree on the next
          coronavirus stimulus package in order for that money to come through.
          Talks between top Democrats and the White House broke down because
          they could not come to a compromise on how much to spend on that
          legislation. Democrats have proposed more than $3 trillion in aid,
          while Republicans have said their target is $1 trillion.The big
          question is how soon that could happen. Congress has a Sept. 30
          deadline to come up with a budget for the next fiscal year. House
          Democrats are working on new legislation to provide support to the
          U.S. Postal Service.
        </Grid>
        <Grid className={classes.currCard} item xs={12} sm={6}>
          <Card>
            <CardContent>
              <LineChartEuro />
            </CardContent>
          </Card>
        </Grid>
        <Typography component="h1" variant="h3">
          Central banks issue digital currencies
        </Typography>
        <Grid className={classes.currCard} item xs={12} sm={12} align="justify">
          Cryptocurrency bitcoin and Facebook-backed Libra could play a role in
          a world where central banks globally begin to issue their own digital
          currencies, a former top central banker told CNBC’s “Beyond the
          Valley” podcast. While both have had their critics, Raghuram Rajan,
          former governor of the Reserve Bank of India, said that the two
          digital currencies could have a place when central banks enter the
          fray. “I would like to think that these private currencies are also in
          competition with the central bank digital currency,” Rajan told CNBC’s
          “Beyond the Valley” podcast. Digital currencies are likely to have big
          implications for the role central banks and retail lenders play in the
          world and could change the face of the entire financial system. While
          the idea is still being debated, central banks would likely issue
          digital versions of fiat currencies. The People’s Bank of China is
          already doing pilots while other central banks are considering whether
          to issue their own. Bitcoin is a “decentralized” cryptocurrency
          meaning it has no central authority governing its issuance, unlike
          fiat currencies. It is built on so-called blockchain technology, which
          at its simplest level, is an immutable public ledger of bitcoin
          transactions. Bitcoin has often been criticized as being a speculative
          asset. Legendary investor Warren Buffett said earlier this year that
          it has “no value.” Libra takes a more centralized approach. It is a
          project that was proposed by a Facebook-led consortium of companies
          last year. But Libra drew heavy criticism from regulators,
          particularly because of its ties to Facebook and its murky track
          record of data privacy. The idea is for Libra to be a so-called
          “stable coin” which would be backed by a basket of global currencies.
          That would keep its value stable in contrast with the volatility that
          has been seen in bitcoin. Libra has scaled down some of its ambitions.
          Earlier this year, the Libra Association applied to obtain approval
          from regulators to issue a digital currency backed by one currency.
          That would mean the consortium’s digital coin may be equivalent to a
          euro or a U.S. dollar, for example. Rajan said that bitcoin is a
          “speculative asset” rather than one that is used for transactions on a
          large scale. He said investors have often flocked to bitcoin when
          traditional assets such as bonds are less attractive. “In that sense,
          bitcoin is a little bit like gold, in fact, gold has some value
          because we value it for jewelry, but bitcoin you can’t even do that.
          Nevertheless it has value because others think it has value,” Rajan
          said. “On the other hand, Libra is an attempt to create a currency
          which is used for transacting. And that, the whole idea is not to hold
          it as a speculative asset which increases in value … but use it for
          transactions. So the ultimate underlying value is going to be from the
          central banks, they’re going to preserve the value, not of Libra but
          of what Libra can be exchanged into,” he added. The former central
          banker said that having a private digital currency that had a
          “monopoly” would be “problematic.” But ultimately there will be
          competing private digital currencies with different roles. “So the
          bottom line I think is different private currencies will do different
          things and it may be bitcoin has value going forward just as a store
          of value, or as a speculative asset. While Libra may be the kind of
          currency which is used more for transacting,” Rajan said. One of the
          big challenges with digital currencies is the amount of data that
          comes with them. “Do you trust the central bank as much with details
          on every transaction you make? Should the government know? The beauty
          of the cash in our hands, is that it’s anonymous. Even if you’re not
          doing something illegal you don’t want the government seeing
          everything you do,” Rajan said. The same issue is true of private
          digital currencies. But Rajan said that there may be need to
          “integrate the data” between these competing digital currencies
          “because you don’t want the whole thing to be Balkanized.” He added,
          however, that there are several questions to be answered about how to
          safeguard that data. “We need some sort of broader global rules of the
          game. What are countries going to do with data collected from abroad
          on who uses their currency? How do you make sure that the usual
          safeguards on that use are there? If somebody uses a foreign digital
          currency to buy certain services which could compromise them, can they
          be liable to espionage and blackmail, et cetera? And those are
          concerns that are not farfetched in today’s world,” Rajan told CNBC.
        </Grid>
      </Grid>
    </Container>
  );
}

export default Currency;
