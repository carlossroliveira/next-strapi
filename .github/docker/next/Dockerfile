FROM node:20-alpine3.18 AS builder
RUN apk add --no-cache libc6-compat bash python3 py3-pip groff less
RUN apk add --no-cache --upgrade bash
RUN python3 -m venv /opt/venv
ENV PATH="/opt/venv/bin:$PATH"
RUN pip install awscli --upgrade

WORKDIR /usr/app

ARG AWS_ACCESS_KEY
ARG AWS_SECRET_ACCESS_KEY


ARG NEXT_PUBLIC_ENVIRONMENT
ARG NEXT_PUBLIC_URL_API_4TAX

ENV NEXT_PUBLIC_ENVIRONMENT=$NEXT_PUBLIC_ENVIRONMENT
ENV NEXT_PUBLIC_URL_API_4TAX=$NEXT_PUBLIC_URL_API_4TAX
RUN echo $NEXT_PUBLIC_URL_API_4TAX


RUN aws configure set aws_access_key_id $AWS_ACCESS_KEY
RUN aws configure set aws_secret_access_key $AWS_SECRET_ACCESS_KEY
RUN aws configure set default.region us-east-1
RUN aws codeartifact login --tool npm --repository packages --domain seidor --namespace @seidor

WORKDIR /app

# Install dependencies based on the preferred package manager
# COPY package.json yarn.lock* package-lock.json* pnpm-lock.yaml* ./
ADD . .
RUN \
    if [ -f yarn.lock ]; then yarn --frozen-lockfile; \
    elif [ -f package-lock.json ]; then npm ci; \
    elif [ -f pnpm-lock.yaml ]; then yarn global add pnpm && pnpm i --frozen-lockfile; \
    else echo "Lockfile not found." && exit 1; \
    fi

RUN yarn build

FROM node:20-alpine3.18 AS runner
WORKDIR /app
ENV NODE_ENV production

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static
USER nextjs
EXPOSE 3000
ENV PORT 3000
CMD ["node", "server.js"]
