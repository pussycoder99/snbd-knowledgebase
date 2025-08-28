import { Article, Category } from './types';

const categories: Category[] = [
  { id: 1, slug: 'getting-started', name: 'Getting Started', icon: 'M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5' },
  { id: 2, slug: 'domains-dns', name: 'Domains & DNS', icon: 'M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z' },
  { id: 3, slug: 'bdix-hosting', name: 'BDIX Hosting', icon: 'M5 12h14M12 5l7 7-7 7' },
  { id: 4, slug: 'automation-n8n', name: 'Automation (n8n)', icon: 'M12 8V4m0 16v-4m8-8h-4M4 12H0m16 0h4m-4 4l-2 2m-8-4l-2-2m0 8l2-2m8 4l2 2' },
  { id: 5, slug: 'billing-accounts', name: 'Billing & Accounts', icon: 'M3 6h18M7 12h2M15 12h2M3 18h18' },
  { id: 6, slug: 'troubleshooting', name: 'Troubleshooting', icon: 'M18.36 6.64a9 9 0 1 1-12.73 0M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83' },
];

const articles: Article[] = [
  {
    id: 1,
    slug: 'welcome-to-snbd-host',
    title: 'Welcome to SNBD HOST',
    category_id: 1,
    tags: ['welcome', 'account', 'getting started'],
    body_html: `
      <h1>Welcome to SNBD HOST!</h1>
      <p>We're thrilled to have you on board. This guide will walk you through the first steps to get your account and services up and running.</p>
      <h2>1. Accessing Your Client Portal</h2>
      <p>Your primary hub for managing services, billing, and support is the <a href="https://portal.snbdhost.com">Client Portal</a>. You should have received your login credentials via email. If not, you can use the "Forgot Password" link on the login page.</p>
      <h2>2. Understanding Your Services</h2>
      <p>In the portal, you'll find a list of your active services under the "Services" tab. This could include:</p>
      <ul>
        <li>Web Hosting (cPanel)</li>
        <li>Domain Registrations</li>
        <li>n8n Automation Instances</li>
      </ul>
      <h2>3. Getting Help</h2>
      <p>If you ever get stuck, our knowledgebase is your first stop. If you can't find an answer, don't hesitate to <a href="https://portal.snbdhost.com/submitticket.php">submit a support ticket</a>. Our team is available 24/7 to assist you.</p>
    `,
    updated_on: '2024-05-15',
    popular: true,
    published: true,
    created_at: '2024-05-15T10:00:00Z',
    updated_at: '2024-05-15T10:00:00Z',
  },
  {
    id: 2,
    slug: 'connect-domain-via-cloudflare',
    title: 'Connect your domain via Cloudflare (A-Z)',
    category_id: 2,
    tags: ['dns', 'cloudflare', 'domain', 'performance'],
    body_html: `
      <h1>Connecting Your Domain via Cloudflare</h1>
      <p>Using Cloudflare provides significant security and performance benefits. Here’s how to connect your domain purchased from SNBD HOST (or elsewhere) to your hosting account using Cloudflare as your DNS manager.</p>
      <h2>Step 1: Add Your Site to Cloudflare</h2>
      <p>Create a free Cloudflare account and add your domain name. Cloudflare will automatically scan for existing DNS records.</p>
      <h2>Step 2: Point Your Domain to Hosting IP</h2>
      <p>In the Cloudflare DNS settings, ensure you have an 'A' record for your root domain (e.g., <code>yourdomain.com</code>) and a 'CNAME' or 'A' record for <code>www</code>, pointing to your hosting server's IP address. You can find this IP in your cPanel or welcome email.</p>
      <pre><code>Type: A | Name: yourdomain.com | Content: [Your Server IP] | Proxy: Proxied
Type: CNAME | Name: www | Content: yourdomain.com | Proxy: Proxied</code></pre>
      <h2>Step 3: Update Nameservers</h2>
      <p>Cloudflare will provide you with two nameservers. You need to log in to your domain registrar (e.g., SNBD HOST client portal) and replace the existing nameservers with the ones from Cloudflare. DNS propagation can take up to 24 hours.</p>
    `,
    updated_on: '2024-05-20',
    popular: true,
    published: true,
    created_at: '2024-05-20T11:00:00Z',
    updated_at: '2024-05-20T11:00:00Z',
  },
  {
    id: 3,
    slug: 'deploy-website-on-bdix-cpanel',
    title: 'Deploy a website on BDIX cPanel hosting',
    category_id: 3,
    tags: ['cpanel', 'bdix', 'hosting', 'deployment'],
    body_html: `
      <h1>Deploying Your Website on BDIX cPanel Hosting</h1>
      <p>Our BDIX-connected cPanel hosting offers lightning-fast speeds for users in Bangladesh. Here’s how to deploy your site.</p>
      <h2>1. Login to cPanel</h2>
      <p>Use the credentials provided in your welcome email to log in to cPanel. The URL is typically <code>http://yourdomain.com/cpanel</code>.</p>
      <h2>2. Upload Your Files</h2>
      <p>Navigate to the "File Manager". Inside, open the <code>public_html</code> directory. This is where your website's files should be uploaded. You can use the "Upload" button to upload a ZIP file and then "Extract" it.</p>
      <h2>3. Create a Database (if needed)</h2>
      <p>If your website uses a database (like WordPress), go to "MySQL® Database Wizard" in cPanel. Follow the steps to create a new database, a database user, and assign the user to the database with all privileges. Note down the database name, username, and password.</p>
      <h2>4. Update Configuration Files</h2>
      <p>Update your application's configuration file (e.g., <code>wp-config.php</code> for WordPress) with the correct database details.</p>
    `,
    updated_on: '2024-05-21',
    popular: false,
    published: true,
    created_at: '2024-05-21T12:00:00Z',
    updated_at: '2024-05-21T12:00:00Z',
  },
  {
    id: 4,
    slug: 'launch-n8n-instance-with-docker',
    title: 'Launch an n8n instance with Docker',
    category_id: 4,
    tags: ['n8n', 'docker', 'automation', 'vps'],
    body_html: `
      <h1>Launching an n8n Instance with Docker</h1>
      <p>SNBD HOST offers powerful VPS solutions perfect for running automation tools like n8n. Here's a quick guide to get it running with Docker.</p>
      <h2>Prerequisites</h2>
      <ul>
        <li>A VPS with Docker and Docker Compose installed.</li>
        <li>Basic command-line knowledge.</li>
      </ul>
      <h2>1. Create a <code>docker-compose.yml</code> file</h2>
      <p>Create a directory for n8n and a <code>docker-compose.yml</code> file inside it.</p>
      <pre><code>version: '3.7'

services:
  n8n:
    image: n8nio/n8n
    restart: always
    ports:
      - "127.0.0.1:5678:5678"
    environment:
      - N8N_HOST=your.domain.com
      - N8N_PROTOCOL=https
      - NODE_ENV=production
      - WEBHOOK_URL=https://your.domain.com/
    volumes:
      - ./n8n_data:/home/node/.n8n
</code></pre>
      <h2>2. Run Docker Compose</h2>
      <p>In the same directory, run the command:</p>
      <pre><code>docker-compose up -d</code></pre>
      <p>This will start your n8n instance in the background. You would typically use a reverse proxy like Nginx or Caddy to expose it to the web securely with SSL.</p>
    `,
    updated_on: '2024-05-22',
    popular: true,
    published: true,
    created_at: '2024-05-22T13:00:00Z',
    updated_at: '2024-05-22T13:00:00Z',
  },
  {
    id: 5,
    slug: 'billing-payments-invoices',
    title: 'Billing, payments & invoices',
    category_id: 5,
    tags: ['billing', 'invoice', 'payment', 'bkash'],
    body_html: `
      <h1>Managing Your Billing and Payments</h1>
      <p>This guide explains how to view invoices, make payments, and manage your billing details in the SNBD HOST client portal.</p>
      <h2>Viewing Invoices</h2>
      <p>Log in to the <a href="https://portal.snbdhost.com">Client Portal</a> and navigate to "Billing" > "My Invoices". Here you will see a list of all your paid and unpaid invoices.</p>
      <h2>Making a Payment</h2>
      <p>Click on an unpaid invoice to view it. You will see a "Pay Now" button. We accept various payment methods, including:</p>
      <ul>
        <li>bKash</li>
        <li>Nagad</li>
        <li>Credit/Debit Cards</li>
        <li>Bank Transfer</li>
      </ul>
      <p>Select your preferred method and follow the on-screen instructions. Payments are typically applied to your account instantly.</p>
    `,
    updated_on: '2024-05-18',
    popular: false,
    published: true,
    created_at: '2024-05-18T14:00:00Z',
    updated_at: '2024-05-18T14:00:00Z',
  },
  {
    id: 6,
    slug: 'fix-email-deliverability',
    title: 'Fix email deliverability (SPF, DKIM, DMARC)',
    category_id: 2,
    tags: ['email', 'spf', 'dkim', 'dmarc', 'dns'],
    body_html: `
      <h1>Improving Email Deliverability with SPF, DKIM & DMARC</h1>
      <p>If your emails are landing in spam folders, it's crucial to set up these three DNS records.</p>
      <h2>SPF (Sender Policy Framework)</h2>
      <p>An SPF record is a TXT record that lists the mail servers authorized to send email for your domain. Your cPanel provides the correct SPF record to add to your DNS.</p>
      <h2>DKIM (DomainKeys Identified Mail)</h2>
      <p>DKIM adds a digital signature to emails, allowing the receiver to verify that the email is from a legitimate source. You can enable DKIM from your cPanel's "Email Deliverability" tool.</p>
      <h2>DMARC (Domain-based Message Authentication, Reporting, and Conformance)</h2>
      <p>DMARC tells receiving mail servers what to do with emails that fail SPF or DKIM checks (quarantine, reject, or do nothing). A basic DMARC record can be added as a TXT record in your DNS settings.</p>
      <pre><code>Type: TXT | Name: _dmarc | Content: "v=DMARC1; p=none; rua=mailto:youremail@yourdomain.com"</code></pre>
    `,
    updated_on: '2024-05-23',
    popular: true,
    published: true,
    created_at: '2024-05-23T15:00:00Z',
    updated_at: '2024-05-23T15:00:00Z',
  },
  {
    id: 7,
    slug: 'http-503-common-causes',
    title: 'HTTP 503: Common causes & quick fixes',
    category_id: 6,
    tags: ['error', '503', 'troubleshooting', 'cpanel'],
    body_html: `
      <h1>Troubleshooting HTTP 503 Service Unavailable Errors</h1>
      <p>A 503 error means your server is temporarily unable to handle the request. On a cPanel server, this is often related to resource limits.</p>
      <h2>Common Causes</h2>
      <ol>
        <li><strong>Entry Process Limit Reached:</strong> Your account is using too many concurrent PHP/LSPHP processes. This can happen during traffic spikes or due to inefficient code.</li>
        <li><strong>High CPU/Memory Usage:</strong> A script or plugin might be consuming excessive CPU or RAM, causing the server to become temporarily overloaded.</li>
        <li><strong>Maintenance Mode:</strong> Some applications (like WordPress) can get stuck in maintenance mode.</li>
      </ol>
      <h2>Quick Fixes</h2>
      <ul>
        <li><strong>Check Resource Usage in cPanel:</strong> Look at the "CPU and Concurrent Connection Usage" tool to see if you've hit your limits.</li>
        <li><strong>Optimize Your Website:</strong> Use caching plugins, optimize images, and disable unused plugins to reduce server load.</li>
        <li><strong>Increase Resources:</strong> If you consistently hit limits, you may need to upgrade your hosting plan. Contact our support to discuss options.</li>
      </ul>
    `,
    updated_on: '2024-05-24',
    popular: false,
    published: true,
    created_at: '2024-05-24T16:00:00Z',
    updated_at: '2024-05-24T16:00:00Z',
  },
];

// Mock API functions
export async function getCategories(): Promise<Category[]> {
  return Promise.resolve(categories);
}

export async function getArticles({ query, category, tag }: { query?: string; category?: string; tag?: string }): Promise<Article[]> {
  let filteredArticles = articles.filter(a => a.published);

  if (category) {
    const categoryObj = categories.find(c => c.slug === category);
    if (categoryObj) {
      filteredArticles = filteredArticles.filter(a => a.category_id === categoryObj.id);
    }
  }

  if (tag) {
    filteredArticles = filteredArticles.filter(a => a.tags.includes(tag));
  }

  if (query) {
    const lowercasedQuery = query.toLowerCase();
    filteredArticles = filteredArticles.filter(a =>
      a.title.toLowerCase().includes(lowercasedQuery) ||
      a.tags.some(t => t.toLowerCase().includes(lowercasedQuery)) ||
      a.body_html.toLowerCase().includes(lowercasedQuery)
    );
  }

  return Promise.resolve(filteredArticles.sort((a, b) => new Date(b.updated_on).getTime() - new Date(a.updated_on).getTime()));
}

export async function getArticleBySlug(slug: string): Promise<Article | undefined> {
  return Promise.resolve(articles.find(a => a.slug === slug && a.published));
}
