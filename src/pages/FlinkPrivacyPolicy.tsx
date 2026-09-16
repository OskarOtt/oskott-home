import '../styles/flinkPrivacyPolicy.css'

function FlinkPrivacyPolicy() {
  return (
    <main className="flink-privacy">
      <div className="flink-privacy__content">
        <h1>Privacy Policy for Flink</h1>
        <p className="flink-privacy__updated">Last updated: 16. sept 2026</p>

        <p>
          Flink ("we," "our," or "us") respects your privacy. This Privacy
          Policy explains what information we collect, how we use it, and
          your rights regarding your data when you use the Flink mobile
          application (the "App").
        </p>

        <h2>1. Information We Collect</h2>
        <p>
          <strong>Account information:</strong> When you create an account,
          we collect your email address, name, and password (stored
          securely, hashed — we never store your password in plain text).
        </p>
        <p>
          <strong>Profile and pet information:</strong> Information you
          choose to provide, such as your profile photo, and your dog's
          name, breed, birth date, and photos or videos.
        </p>
        <p>
          <strong>Training data:</strong> Training sessions, training plans,
          goals, and calendar entries you create within the App.
        </p>
        <p>
          <strong>Social content:</strong> Posts, comments, and follow
          relationships you create when using the social features of the
          App.
        </p>
        <p>
          <strong>Media:</strong> Photos and videos you upload are stored on
          our secure cloud storage provider (Cloudflare R2) and served via a
          content delivery network.
        </p>
        <p>
          <strong>Technical information:</strong> We may automatically
          collect basic technical data (such as device type and app
          version) to help us maintain and improve the App.
        </p>

        <h2>2. How We Use Your Information</h2>
        <p>We use the information we collect to:</p>
        <ul>
          <li>
            Provide and operate the App's core features (training tracking,
            dog profiles, calendar, social feed)
          </li>
          <li>Authenticate your account and keep it secure</li>
          <li>Improve and maintain the App</li>
          <li>Respond to support requests</li>
        </ul>
        <p>
          We do not sell your personal information. We do not use
          third-party advertising or tracking networks.
        </p>

        <h2>3. How We Store and Share Information</h2>
        <p>
          Your data is stored on our servers and, for media files, on
          Cloudflare R2 cloud storage. We do not share your personal
          information with third parties except:
        </p>
        <ul>
          <li>
            Service providers who help us operate the App (e.g., cloud
            hosting and storage providers), under confidentiality
            obligations
          </li>
          <li>When required by law</li>
        </ul>
        <p>
          Other users may see content you choose to make visible, such as
          your profile, posts, and dog profiles, depending on the App's
          social/sharing features.
        </p>

        <h2>4. Data Security</h2>
        <p>
          We use industry-standard measures to protect your information,
          including secure token storage on your device and encrypted
          network connections (HTTPS) for all data transmitted to and from
          the App.
        </p>

        <h2>5. Your Rights and Choices</h2>
        <p>You may:</p>
        <ul>
          <li>
            Access, update, or delete your profile and dog information at
            any time within the App
          </li>
          <li>Delete photos or videos you've uploaded</li>
          <li>
            Request deletion of your account and associated data by
            contacting us at oskott@gmail.com
          </li>
        </ul>

        <h2>6. Data Retention</h2>
        <p>
          We retain your information for as long as your account is active.
          If you delete your account, we will delete or anonymize your
          personal data within a reasonable time, except where retention is
          required by law.
        </p>

        <h2>7. Children's Privacy</h2>
        <p>
          Flink is not intended for children under 13 (or the applicable
          age of consent in your country). We do not knowingly collect
          personal information from children.
        </p>

        <h2>8. Changes to This Policy</h2>
        <p>
          We may update this Privacy Policy from time to time. We will
          notify you of material changes by updating the "Last updated"
          date above.
        </p>

        <h2>9. Contact Us</h2>
        <p>
          If you have questions about this Privacy Policy or your data,
          contact us at:
          <br />
          oskott@gmail.com
        </p>
      </div>
    </main>
  )
}

export default FlinkPrivacyPolicy
