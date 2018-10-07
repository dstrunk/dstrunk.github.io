---
title: Automating CSV parsing with Ruby
tags: [ruby]
category: Ruby
---
Part of my day job involves designing and sending out email campaigns for various customers. On the whole it's a pretty painless job, with one sticking point: getting a properly sanitized email list of subscribers is hard. Depending on the client supplying the spreadsheet, any number of things could go wrong:

* duplicate entries
* empty lines
* malformed email addresses
* ALL CAPS ENTRIES / lowercased entries

In addition to these problems, the data usually doesn't come in a format that I need to upload to our campaign manager (Yes I know a CRM would mitigate all of these issues, but that's beside the point). Being the <del>lazy</del> resourceful Ruby developer I am, I created a simple script to parse a .csv list and output the information I'm looking for. I'll post it first, then go through and explain what the lines do.

~~~
require 'csv'

unless ARGV.length == 2
  puts "Sorry, incorrect number of arguments."
  puts "Usage: ruby parse.rb InputFile.csv OutputFile.csv\n"
  exit
end

ET_HEADERS = %w(Email\ Address Subscriber\ Key First\ Name LastName).freeze

new_list = []

old_list = CSV.read(ARGV[0], "r:windows-1251:utf-8", headers: true, skip_blanks: true).reject { |row| row.to_hash.values.all?(&:nil?) }

old_list.each do |row|
  new_list << row unless row["confirmed"] == "yes"
end

CSV.open(ARGV[1], 'wb') do |csv|
  csv << ET_HEADERS
  new_list.each do |row|
    csv << [row["email"], row["email"], row["fname"], row["lname"]]
  end
end
~~~

So how does this script work, exactly? It's pretty easy: open terminal and run `ruby parse.rb inputfile.csv outputfile.csv` (all names are self-explanitory, hopefully). Now to break down the blocks.

~~~
require 'csv'
~~~

This requires the `csv` library that comes standard with Ruby. Don't worry; it's not a gem, you don't have to download anything. Just include it at the top of your file.

~~~
unless ARGV.length == 2
  puts "Sorry, incorrect number of arguments."
  puts "Usage: ruby parse.rb InputFile.csv OutputFile.csv\n"
  exit
end
~~~

Here's some simple error handling. This script expects two arguments after invoking it in the command line: an input file and an output file. If the script detects anything more or less, it will exit with a nice but stern explanation why.

~~~
ET_HEADERS = %w(Email\ Address Subscriber\ Key First\ Name LastName).freeze
new_list = []
~~~

Here I setup a constant and a variable I'll be using down the road. `ET_HEADERS` is a constant that holds the headers the campaign manager needs to be properly uploaded. `new_list` is a variable instantiated with a new array; we'll be injecting the parsed contents of our old list into this array.

~~~
old_list = CSV.read(ARGV[0], "r:windows-1251:utf-8", headers: true, skip_blanks: true).reject { |row| row.to_hash.values.all?(&:nil?) }
~~~

This is probably the most complex part of the script, but it's not so bad. We're creating a new variable called `old_list`. In `old_list`, we use the CSV library to open up `ARGV[0]`, the first argument in our command line. The gnarly `r:windows-1251:utf-8` is telling Ruby to transcode whatever file format the csv file is into something it can work with; `headers: true` tells the file to include headers; and `skip_blanks: true` tells the CSV reader to (surprise!) skip blanks. the `reject` block tells the CSV reader that, for each row, if all values are nil, remove them completely.

~~~
old_list.each do |row|
  new_list << row unless row["confirmed"] == "yes"
end
~~~

Once a list has been screened for blanks, we'll throw them into the new array (`new_list` variable set up at the beginning). Here's where I'll add my edge-case conditionals. Things like "If a user has confirmed or RSVPed," or "If a user hasn't responded within a week."

~~~
CSV.open(ARGV[1], 'wb') do |csv|
  csv << ET_HEADERS
  new_list.each do |row|
    csv << [row["email"], row["email"], row["fname"], row["lname"]]
  end
end
~~~

Now that we've got our "sanitized" list, it's time to open a new CSV file. We open a new CSV file as specified in `ARGV[1]`, and begin building our new file. First, we add the `ET_HEADERS` to the first row. Then, for each array entry in `new_list`, we append the necessary columns to our new document.

## Future plans

The script is pretty basic at this point, but it does its job well. One problem I have with the script is it requires knowledge of the input script, and requires modifying appended columns based on the input CSV file. In the future it would be nice to build out a prompt that reads the headers of the input CSV, and allow the user (me) to select which rows I'm looking for (as well as potentially any conditionals to the input list to look for).

As it stands, however, it works great. List digestion has gone from a 15-20 minute job down to a 1-2 minute job, and with the amount of emails that come onto my desk daily, that's easily a 3-4 hours a week saved on processing lists. Not bad for 17 lines of code!
