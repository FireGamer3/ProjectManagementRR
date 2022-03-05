FROM ruby:2.7.0
# throw errors if Gemfile has been modified since Gemfile.lock
RUN bundle config --global frozen 1

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY Gemfile /usr/src/app/
COPY Gemfile.lock /usr/src/app/
RUN gem install bundler:2.3.8
RUN bundle install

COPY . /usr/src/app

RUN apt-get update && \
apt-get install -y nodejs --no-install-recommends && \
rm -rf /var/lib/apt/lists/*
RUN apt-get update && \
apt-get install -y \
sqlite3 --no-install-recommends && \
rm -rf /var/lib/apt/lists/*

EXPOSE 3001
CMD ["bundle", "exec", "rails", "server", "-p", "3001", "-b", "0.0.0.0"]