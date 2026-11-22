#import "blog/lib.typ": *
#import "blog/theme.typ": *

#show: theme
#show: article.with(
  title: "Test",
  desc: [Just a work in progress for now],
  publish_date: datetime(year: 2026, month: 11, day: 22),
  tags: ("test",),
)

#outline()

= Testing!

This is a test post while I get everything set up.

Stay tuned for when I actually post something!